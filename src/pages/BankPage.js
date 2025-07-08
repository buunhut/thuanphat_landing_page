import React, { useState } from "react";

export const BankPage = () => {
  const [bank, setBank] = useState([]);
  const [bankInfo, setBankInfo] = useState({ bankName: "", bankCode: "" });
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Kiểm tra các key trong bankInfo
    let hasEmptyValue = false;
    for (let key in bankInfo) {
      if (bankInfo[key] === "") {
        hasEmptyValue = true;
        break; // Dừng vòng lặp nếu tìm thấy giá trị rỗng
      }
    }

    if (hasEmptyValue) {
      console.log("nhập đầy đủ thông tin.");
    } else {
      setBank((prevState) => [...prevState, bankInfo]);
      setBankInfo({ bankName: "", bankCode: "" }); // Đặt lại bankInfo
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setBankInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>Bank</h1>
          {bank.length > 0 && (
            <>
              {bank.map((item, index) => {
                const { bankName } = item;
                return <h3 key={index}>{bankName}</h3>;
              })}
            </>
          )}
          <form action="">
            <div className="wrap">
              <div className="inputItem">
                <input
                  type="text"
                  placeholder="Bank code"
                  value={bankInfo.bankCode}
                  name="bankCode"
                  onChange={handleChangeInput}
                />
              </div>

              <div className="inputItem">
                <input
                  type="text"
                  placeholder="Bank name"
                  value={bankInfo.bankName}
                  name="bankName"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
