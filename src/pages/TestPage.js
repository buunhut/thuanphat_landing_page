import React, { useState } from "react";
import { useSelector } from "react-redux";

const TestPage = () => {
  const { test } = useSelector((state) => state.dataSlice);
  const [question, setQuestion] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Thêm trạng thái để theo dõi việc đã submit hay chưa

  const handleChangeExam = (e) => {
    const { value } = e.target;
    if (value) {
      const find = test.find((item) => item.exam === +value);
      if (find) {
        setQuestion(find.question);
        setSelectedAnswers({});
        setResult(null);
        setIsSubmitted(false); // Reset trạng thái submit khi chọn bài mới
      }
    } else {
      setQuestion([]);
    }
  };

  const handleSelectAnswer = (questionIndex, answerId) => {
    if (!isSubmitted) {
      // Chỉ cho phép thay đổi nếu chưa submit
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionIndex]: answerId,
      }));
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;

    question.forEach((item, index) => {
      if (selectedAnswers[index] === item.correct) {
        correctCount++;
      }
    });

    setResult(correctCount);
    setIsSubmitted(true); // Đánh dấu đã submit
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setResult(null);
    setIsSubmitted(false); // Reset trạng thái submit
  };

  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>Test page demo only</h1>
          <div className="test" style={{ marginTop: "10px" }}>
            <select name="" id="" onChange={handleChangeExam}>
              <option value="">Chọn đề</option>
              {test?.map((item, index) => {
                const { exam } = item;
                return (
                  <option value={exam} key={index}>
                    {exam}
                  </option>
                );
              })}
            </select>
            <div>
              {question?.map((item, index) => {
                const { ask, suggest, correct } = item;
                return (
                  <div key={index} style={{ padding: "0px" }}>
                    <div
                      style={{
                        padding: "10px",
                        border: "1px solid silver",
                        marginTop: "5px",
                        backgroundColor: "white",
                      }}
                    >
                      <p style={{ margin: "0 0 0" }}>{ask}</p>
                      <div style={{ marginTop: "0px" }}>
                        {suggest?.map((suggestItem) => {
                          const { id, content } = suggestItem;
                          const isSelected = selectedAnswers[index] === id;
                          const isCorrect = correct === id;
                          const isWrong =
                            result !== null && isSelected && !isCorrect;

                          return (
                            <div key={id}>
                              <input
                                type="radio"
                                name={`question-${index}`}
                                value={id}
                                checked={isSelected}
                                onChange={() => handleSelectAnswer(index, id)}
                                disabled={isSubmitted} // Vô hiệu hóa radio nếu đã submit
                              />
                              <label
                                style={{
                                  color: isWrong ? "red" : "",
                                  marginLeft: "5px",
                                }}
                              >
                                {content}
                              </label>
                            </div>
                          );
                        })}
                      </div>

                      {result !== null && (
                        <div
                          style={{
                            color:
                              item.correct === selectedAnswers[index]
                                ? "green"
                                : "red",
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {question.length > 0 && (
              <div style={{ margin: "10px 0" }}>
                {isSubmitted ? (
                  <button onClick={handleReset}>Làm lại</button>
                ) : (
                  <button onClick={handleSubmit}>Xong</button>
                )}
              </div>
            )}

            {result !== null && (
              <div>
                <h3>
                  Kết quả: {result} / {question.length} câu đúng!
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
