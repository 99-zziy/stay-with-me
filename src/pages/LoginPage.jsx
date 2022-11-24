import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../api/bookApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [bookId, setBookId] = useState();
  const [firstCardNum, setFirstCardNum] = useState("");
  const [secondCardNum, setSecondCardNum] = useState("");
  const [thirdCardNum, setThirdCardNum] = useState("");
  const [fourthCardNum, setFourthCardNum] = useState("");

  const inputMoveNumber = (e) => {
    if (e.target.value.length === 4) {
      e.target.nextElementSibling.focus();
    }
  };

  const handleLogin = () => {
    const cardNum = [
      firstCardNum,
      secondCardNum,
      thirdCardNum,
      fourthCardNum,
    ].join("-");
    login({ bookId, cardNum });
    navigate("/");
  };

  return (
    <InputContainer>
      <h2>D hotel에 오신 것을 환영합니다.</h2>
      <h4>예약번호와 예약하실 때 결제한 신용카드의 번호를 입력해주세요.</h4>
      <InputForm>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input
              className="reserv"
              placeholder="예약번호"
              onChange={(e) => setBookId(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
              marginLeft: "8px",
            }}
          >
            <CardInput
              type="text"
              placeholder={"신용카드 번호"}
              onChange={(e) => setFirstCardNum(e.target.value)}
              onKeyUp={(e) => inputMoveNumber(e)}
              maxLength="4"
            />
            <CardInput
              type="password"
              onChange={(e) => setSecondCardNum(e.target.value)}
              onKeyUp={(e) => inputMoveNumber(e)}
              maxLength="4"
            />
            <CardInput
              type="password"
              onChange={(e) => setThirdCardNum(e.target.value)}
              onKeyUp={(e) => inputMoveNumber(e)}
              maxLength="4"
            />
            <CardInput
              type="password"
              maxLength="4"
              onChange={(e) => setFourthCardNum(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button onClick={handleLogin}>로그인</button>
        </div>
      </InputForm>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 1000px;
  margin: 100px auto;
  text-align: center;
  h2 {
    color: rgb(200, 166, 117);
    text-align: center;
    margin-top: 50px;
  }
  h4 {
    color: rgb(51, 51, 51);
    margin: 4px;
    font-weight: 400;
  }
`;

const CardInput = styled.input`
  width: 70px;
  margin-right: 10px;
  height: 30px;
`;

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
  background-color: rgb(241, 230, 214);
  padding: 80px 0px;
  width: 600px;
  p {
    width: 150px;
  }
  .reserv {
    height: 30px;
    width: 335px;
  }
  .card {
    height: 20px;
    width: 76px;
    margin-right: 10px;
  }
  button {
    height: 40px;
    width: 100px;
    margin-left: 30px;
    border: none;
    background: rgb(94, 94, 94);
    font-size: 1.2rem;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    cursor: pointer;
    font-size: 1rem;
    color: white;
  }
`;

export default LoginPage;
