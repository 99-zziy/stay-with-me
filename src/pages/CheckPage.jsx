import styled from "styled-components";
import { useNavigate } from "react-router";

const CheckPage = () => {
  const navigate = useNavigate();

  return (
    <InputContainer>
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
          <td>ㅇ20181120243084</td>
        </tr>
        <tr>
          <th>예약자 성함</th>
          <td>강지영</td>
        </tr>
        <tr>
          <th>예약자 연락처</th>
          <td>010-8229-2558</td>
        </tr>
        <tr>
          <th>체크인 날짜</th>
          <td>2022.10.31</td>
        </tr>
        <tr>
          <th>체크아웃 날짜</th>
          <td>2022.11.01</td>
        </tr>
        <tr>
          <th>이용 인원</th>
          <td>2인</td>
        </tr>
        <tr>
          <th>객실 타입</th>
          <td>Standard</td>
        </tr>
        <tr>
          <th>이용 요금</th>
          <td>529,000원</td>
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
`;

export default CheckPage;
