import styled from "styled-components";

const LoginPage = () => {
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
            <input className="reserv" placeholder="예약번호"></input>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <input className="card" placeholder="신용카드 번호"></input>
            <input className="card"></input>
            <input className="card"></input>
            <input className="card"></input>
          </div>
        </div>
        <div>
          <button>로그인</button>
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
    height: 20px;
    width: 360px;
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
