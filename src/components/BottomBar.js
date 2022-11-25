import styled from "styled-components";

const BottomBar = ({ handleNext, handleBack, price }) => {
  return (
    <BarContainer>
      <div>
        <BeforeButton onClick={handleBack}>이전</BeforeButton>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>요금 합계</p>
            <h6>부가가치세 포함</h6>
          </div>
          <h5>{price}원</h5>
        </div>
        <CancelButton onClick={handleNext}>예약 하기</CancelButton>
      </div>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;
  border-top: 3px solid rgb(224, 224, 224);
  position: sticky;
  bottom: 0;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  p {
    color: rgb(200, 153, 117);
    font-weight: 700;
    margin: 0;
    margin-bottom: 5px;
  }
  h6 {
    margin: 0;
    color: rgb(100, 100, 100);
  }
  h5 {
    font-size: 18px;
  }
`;

const BeforeButton = styled.button`
  border: none;
  background: rgb(200, 153, 117);
  width: 120px;
  height: 50px;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  margin: 10px;
`;

const CancelButton = styled.button`
  border: none;
  background: rgb(94, 94, 94);
  width: 120px;
  height: 50px;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  margin: 10px;
  margin-left: 30px;
`;

export default BottomBar;
