import React, { useState } from "react";
import { useSelector } from "react-redux";

const VisaPage = () => {
  const { country } = useSelector((state) => state.dataSlice);
  const copyCountry = [...country];
  const [seclectedCountry, setSelectedCountry] = useState("");
  const [sex, setSex] = useState("male");
  const [purpose, setPurpose] = useState("");
  const handleChangeCountry = (e) => {
    const { value } = e.target;
    setSelectedCountry(value);
  };

  const [marital, setMarital] = useState("");
  const handleChangeMarital = (e) => {
    const { value } = e.target;
    setMarital(value);
  };
  const handleChangeSex = (e) => {
    const { value } = e.target;
    setSex(value);
  };
  const handleChangePurpose = (e) => {
    const { value } = e.target;
    setPurpose(value);
  };
  const [child, setChild] = useState(false);
  const handleCheckcChild = () => {
    setChild(!child);
  };
  return (
    <div id="container">
      <div className="content">
        <div className="contentItem">
          <h1>VISA</h1>

          <form action="">
            <div className="selectItem">
              <i className="fa-solid fa-earth-americas"></i>

              <select name="" id="" onChange={handleChangeCountry}>
                <option value="">Chọn quốc gia cần xin thị thực</option>
                {copyCountry
                  .sort((a, b) => a.vietnamese.localeCompare(b.vietnamese))
                  .map((item, index) => {
                    const { name, vietnamese } = item;
                    return (
                      <option key={index} value={name}>
                        {vietnamese}
                      </option>
                    );
                  })}
              </select>
            </div>
          </form>

          {seclectedCountry && (
            <div>
              <h3>BẠN VUI LÒNG CUNG CẤP THÔNG TIN</h3>

              {/* <h2>{seclectedCountry}</h2> */}

              <form>
                <div className="inputItem">
                  <label htmlFor="">Họ và tên</label>
                  <i className="fa-solid fa-user"></i>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Ngày, tháng, năm sinh (dd/mm/yyyy)</label>
                  <i className="fa-regular fa-calendar-days"></i>
                  <input
                    type="date"
                    name="birth"
                    placeholder="Ngày tháng năm sinh"
                  />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Nơi sinh</label>
                  <i className="fa-solid fa-map-location"></i>
                  <input type="text" name="place" placeholder="Hồ Chí Minh" />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Quốc tịch</label>
                  <i className="fa-solid fa-flag-usa"></i>
                  <input
                    type="text"
                    name="nationality"
                    placeholder="Việt Nam"
                  />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Số căn cước công dân</label>
                  <i className="fa-solid fa-id-card"></i>
                  <input type="text" name="idCard" placeholder="095086005525" />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Số passport</label>
                  <i className="fa-solid fa-passport"></i>
                  <input type="text" name="passport" placeholder="C9202758" />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Ngày cấp (dd/mm/yyyy)</label>
                  <i className="fa-regular fa-calendar-days"></i>

                  <input type="date" name="issue" placeholder="Ngày cấp" />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Ngày hết hạn (dd/mm/yyyy)</label>
                  <i className="fa-regular fa-calendar-days"></i>

                  <input type="date" name="exprie" placeholder="Ngày hết hạn" />
                </div>
                <div className="selectItem">
                  <i className="fa-solid fa-venus-mars"></i>
                  <select name="" id="" onChange={handleChangeSex}>
                    <option value="">Giới tính</option>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>

                <div className="inputItem">
                  <label htmlFor="">Nghề nghiệp hiện tại</label>
                  <i className="fa-solid fa-briefcase"></i>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Kỹ sư phần mềm"
                  />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Thu nhập hàng tháng</label>
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                  <input type="text" name="income" placeholder="30,000,000" />
                </div>

                <div className="inputItem">
                  <label htmlFor="">E-mail</label>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="nhut.nta@gmail.com"
                  />
                </div>
                <div className="inputItem">
                  <label htmlFor="">Số điện thoại</label>
                  <i className="fa-solid fa-phone"></i>
                  <input type="text" name="phone" placeholder="0909240886" />
                </div>
                <div className="selectItem">
                  <i className="fa-solid fa-people-roof"></i>
                  <select name="" id="" onChange={handleChangeMarital}>
                    <option value="single">Tình trạng hôn nhân</option>
                    <option value="single">Độc thân</option>
                    <option value="maried">Có gia đình</option>
                    <option value="divorce">Ly dị</option>
                  </select>
                </div>
                {marital === "maried" ? (
                  <div className="wrap">
                    <div className="extraForm">
                      <div className="inputItem">
                        <label htmlFor="">Họ tên vợ/chồng</label>
                        <input type="text" placeholder="Châu Thị Bích Quyền" />
                      </div>
                      <div className="inputItem">
                        <label htmlFor="">
                          Ngày, tháng, năm sinh (dd/mm/yyyy)
                        </label>
                        <i className="fa-regular fa-calendar-days"></i>
                        <input
                          type="date"
                          name="birth"
                          placeholder="Ngày tháng năm sinh"
                        />
                      </div>
                      <div className="inputItem">
                        <label htmlFor="">Nơi sinh</label>
                        <i className="fa-solid fa-map-location"></i>
                        <input
                          type="text"
                          name="place"
                          placeholder="Hồ Chí Minh"
                        />
                      </div>
                      <div className="inputItem">
                        <label htmlFor="">Quốc tịch</label>
                        <i className="fa-solid fa-flag-usa"></i>
                        <input
                          type="text"
                          name="nationality"
                          placeholder="Việt Nam"
                        />
                      </div>
                      <div className="inputItem">
                        <label htmlFor="">Số căn cước công dân</label>
                        <i className="fa-solid fa-id-card"></i>
                        <input
                          type="text"
                          name="idCard"
                          placeholder="095086005525"
                        />
                      </div>
                      <div className="checkboxItem">
                        <input type="checkbox" onChange={handleCheckcChild} />
                        <label htmlFor="">Có con </label>
                      </div>
                      {child && <div>thông tin con</div>}
                    </div>
                  </div>
                ) : marital === "divorce" ? (
                  <div>form con</div>
                ) : null}

                <div className="selectItem">
                  <i className="fa-solid fa-plane"></i>
                  <select name="" id="" onChange={handleChangePurpose}>
                    <option value="">Mục đích chuyến đi</option>
                    <option value="tourism">Du lịch</option>
                    <option value="visit">Thăm thân</option>
                    <option value="both">Cả hai</option>
                    <option value="other">Mục đích khác</option>
                  </select>
                </div>
                {purpose === "other" && (
                  <div className="wrap">
                    <div className="extraForm">
                      <div className="inputItem">
                        <input
                          type="text"
                          placeholder="Điền cụ thể mục đích chuyến đi..."
                        />
                      </div>
                    </div>
                  </div>
                )}
              </form>
              <p className="result">
                * <i>Kết quả đánh giá chỉ mang tính chất tham khảo.</i>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaPage;
