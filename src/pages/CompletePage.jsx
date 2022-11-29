import styled from "styled-components";
import { useNavigate, useLocation } from "react-router";
import { AiFillCheckCircle } from "react-icons/ai";

const CompletePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookId = state.bookId;
  const checkInDate = state.checkInDate;
  const checkOutDate = state.checkOutDate;
  const userName = state.userName;
  const userPhone = state.userPhone;
  const bookPrice = state.bookPrice;
  const capacity = state.capacity;
  const roomName = state.roomName;

  return (
    <InputContainer>
      <Circle />
      <h3>고객님의 예약이 변경되었습니다.</h3>
      <h6>고객님이 변경하신 내역입니다.</h6>
      <table border={1}>
        <tr>
          <th>예약번호</th>
          <td>{bookId}</td>
        </tr>
        <tr>
          <th>예약자 성함</th>
          <td>{userName}</td>
        </tr>
        <tr>
          <th>예약자 연락처</th>
          <td>{userPhone}</td>
        </tr>
        <tr>
          <th>체크인 날짜</th>
          <td>{checkInDate.replace("T12:00:00", "").replaceAll("-", ".")}</td>
        </tr>
        <tr>
          <th>체크아웃 날짜</th>
          <td>{checkOutDate.replace("T12:00:00", "").replaceAll("-", ".")}</td>
        </tr>
        <tr>
          <th>이용 인원</th>
          <td>2인</td>
        </tr>
        <tr>
          <th>객실 타입</th>
          <td>{roomName}</td>
        </tr>
        <tr>
          <th>이용 요금</th>
          <td>{bookPrice}원</td>
        </tr>
      </table>
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
  p {
    color: rgb(231, 76, 60);
    font-size: 14px;
    margin: 5px;
  }
`;

const Circle = styled(AiFillCheckCircle)`
  width: 50px;
  height: 50px;
  color: rgb(200, 166, 117);
`;

export default CompletePage;
