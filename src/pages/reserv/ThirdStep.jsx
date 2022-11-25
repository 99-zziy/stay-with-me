import styled from "styled-components";
import Step from "../../components/Step";
import { useNavigate } from "react-router";

const ThirdStep = () => {
  const navigate = useNavigate();
  const book = {
    bookId: 1222323434,
    checkInDate: "2022-11-23T12:00:00",
    checkOutDate: "2022-11-24T12:00:00",
    userName: "NACHANJIN",
    userPhone: "010-8539-9393",
    bookPrice: "200000",
    capacity: "2",
    roomName: "비즈니스 디럭스 킹",
  };

  const handleComplete = () => {
    navigate("/");
  };

  return (
    <InputContainer>
      <Step step={3} />
      <h3>예약이 정상적으로 처리되었습니다.</h3>
      <h6>
        모든 예약 변경 , 취소는 예약 번호와 신용카드 번호를 통해 진행됩니다.
      </h6>
      <h6>
        변경, 취소 위약금은 해당 요청이 처리된 날짜를 기준으로 진행됩니다.
      </h6>
      <h6>해당 상품의 변경,취소 규정을 반드시 확인부탁드립니다.</h6>
      <table border={1}>
        <tr>
          <th>예약번호</th>
          <td>{book.bookId}</td>
        </tr>
        <tr>
          <th>예약자 성함</th>
          <td>{book.userName}</td>
        </tr>
        <tr>
          <th>예약자 연락처</th>
          <td>{book.userPhone}</td>
        </tr>
        <tr>
          <th>체크인 날짜</th>
          <td>
            {book.checkInDate.replace("T12:00:00", "").replaceAll("-", ".")}
          </td>
        </tr>
        <tr>
          <th>체크아웃 날짜</th>
          <td>
            {book.checkOutDate.replace("T12:00:00", "").replaceAll("-", ".")}
          </td>
        </tr>
        <tr>
          <th>이용 인원</th>
          <td>{book.capacity}인</td>
        </tr>
        <tr>
          <th>객실 타입</th>
          <td>{book.roomName}</td>
        </tr>
        <tr>
          <th>이용 요금</th>
          <td>{book.bookPrice}</td>
        </tr>
      </table>
      <div style={{ display: "flex", width: "800px", justifyContent: "end" }}>
        <CompleteButton onClick={handleComplete}>확인</CompleteButton>
      </div>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 1000px;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  h3 {
    color: rgb(200, 166, 117);
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  h6 {
    font-size: 0.85rem;
    color: rgb(51, 51, 51);
    margin: 4px;
    font-weight: 400;
  }
  table {
    width: 700px;
    margin-top: 50px;
    border-spacing: 0px;
    border-color: rgb(224, 224, 224);
  }
  th {
    background: rgb(224, 224, 224);
    height: 45px;
  }
  td {
    text-align: center;
  }
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
  margin: 50px;
`;

export default ThirdStep;
