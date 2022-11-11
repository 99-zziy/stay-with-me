import styled from "styled-components";
import Step from "../../components/Step";
import { useNavigate } from "react-router";

const SecondStep = () => {
  const navigate = useNavigate();
  const handleComplete = () => {
    navigate("/reserv/3");
  };

  return (
    <InputContainer>
      <Step step={2} />
      <h3>옵션 사항, 고객 정보 입력</h3>
      <InputDiv>
        <Label>추가 요청사항</Label>
        <textarea placeholder="추가 요청 사항을 입력해주세요." />
      </InputDiv>
      <InputDiv>
        <Label>정보입력</Label>
        <InputDiv2>
          <div style={{ width: "50%" }}>
            <InfoInput>
              <p>고객정보</p>
              <div style={{ display: "flex" }}>
                <p>성명</p>
                <input></input>
              </div>
              <div style={{ display: "flex" }}>
                <p>연락처</p>
                <input></input>
              </div>
            </InfoInput>
          </div>
          <div style={{ width: "50%" }}>
            <InfoInput>
              <p>신용카드 정보</p>
              <div style={{ display: "flex" }}>
                <p>카드 종류</p>
                <input></input>
              </div>
              <div style={{ display: "flex" }}>
                <p>카드 번호</p>
                <input></input>
              </div>
              <div style={{ display: "flex" }}>
                <p>유효 기간</p>
                <input></input>
              </div>
            </InfoInput>
          </div>
        </InputDiv2>
      </InputDiv>
      <InputDiv>
        <Label>변경 및 취소 규정</Label>
        <h6 style={{ marginTop: "30px" }}>
          숙박 예정일 1일 전 18시까지는 위약금 없이 취소 및 변경이 가능합니다.
        </h6>
        <h6>
          숙박 예정일 1일 전 18시 이후 취소/변경 및 노쇼(No-show) 발생 시,
        </h6>
        <h6>
          - 성수기(5월~10월, 12월 24일~31일) : 최초 1일 숙박 요금의 80%가
          위약금으로 부과됩니다.
        </h6>
        <h6>
          - 비수기(성수기 외 기간) : 최초 1일 숙박 요금의 10%가 위약금으로
          부과됩니다.
        </h6>
      </InputDiv>
      <div
        style={{
          marginRight: "20px",
          marginTop: "50px",
          marginBottom: "50px",
          textAlign: "end",
        }}
      >
        <CompleteButton onClick={handleComplete}>완료</CompleteButton>
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 1000px;
  margin: 50px auto;
  h3 {
    color: rgb(200, 166, 117);
    text-align: center;
    margin-top: 50px;
  }
`;

const InfoInput = styled.div`
  p {
    margin-right: 20px;
    width: 100px;
    height: 35px;
    font-size: 0.85rem;
    font-weight: 700;
  }
  input {
    width: 300px;
    height: 30px;
  }
`;

const InputDiv = styled.div`
  margin-top: 50px;
  textarea {
    height: 150px;
    width: 400px;
    padding: 1em;
    margin-top: 30px;
  }
  h6 {
    font-size: 0.8rem;
    color: rgb(51, 51, 51);
    margin: 8px;
  }
`;

const InputDiv2 = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Label = styled.div`
  background: rgb(224, 224, 224);
  padding: 1em;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 70px;
`;

const CompleteButton = styled.button`
  border: none;
  background: rgb(94, 94, 94);
  width: 95px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
`;

export default SecondStep;
