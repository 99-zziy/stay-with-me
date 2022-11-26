import styled from "styled-components";
import { useNavigate, useLocation } from "react-router";

const CheckPage = () => {
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

  const handleEdit = () => {
    //
  };

  const handleCancel = () => {
    //
  };

  return (
    <InputContainer>
      <h3>{userName}님의 예약현황입니다.</h3>
      <h6>
        변경, 취소 위약금은 해당 요청이 처리된 날짜를 기준으로 진행됩니다.
      </h6>
      <h6>해당 상품의 변경,취소 규정을 반드시 확인부탁드립니다.</h6>
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
          <td>디럭스 킹</td>
        </tr>
        <tr>
          <th>이용 요금</th>
          <td>{bookPrice}원</td>
        </tr>
      </table>
      <div style={{ width: "700px", marginTop: "40px" }}>
        <p>
          * 예약 변경시 환불 규정에 따라 금액이 환불되고, 변경이 된 예약으로
          금액이 결제됩니다.
        </p>
        <p>* 예약 취소시 취소 규정에 따라 금액이 환불됩니다.</p>
      </div>
      <div style={{ display: "flex", width: "720px", justifyContent: "end" }}>
        <EditButton onClick={handleEdit}>예약 변경</EditButton>
        <CancelButton onClick={handleCancel}>예약 취소</CancelButton>
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
  p {
    color: rgb(231, 76, 60);
    font-size: 14px;
    margin: 5px;
  }
`;

const EditButton = styled.button`
  border: none;
  background: rgb(200, 153, 117);
  width: 95px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 3px;
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
  width: 95px;
  height: 40px;
  font-size: 1.2rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  margin: 10px;
`;

export default CheckPage;
