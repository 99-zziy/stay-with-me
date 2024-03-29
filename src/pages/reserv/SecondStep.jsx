import styled from "styled-components";
import Step from "../../components/Step";
import { useNavigate, useLocation } from "react-router";
import { reserveRoom } from "../../api/bookApi";
import { useState } from "react";
import BottomBar from "../../components/BottomBar";

const SecondStep = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookPrice = state.roomPrice;
  const checkInDate = state.checkInDate;
  const checkOutDate = state.checkOutDate;
  const roomId = state.roomId;
  const capacity = state.capacity;
  const roomName = state.roomName;
  const [bookOption, setBookOption] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone1, setUserPhone1] = useState("");
  const [userPhone2, setUserPhone2] = useState("");
  const [userPhone3, setUserPhone3] = useState("");
  const [firstCardNum, setFirstCardNum] = useState("");
  const [secondCardNum, setSecondCardNum] = useState("");
  const [thirdCardNum, setThirdCardNum] = useState("");
  const [fourthCardNum, setFourthCardNum] = useState("");
  const [cardCompany, setCardCompany] = useState("");

  const handleComplete = async () => {
    const cardNum = [
      firstCardNum,
      secondCardNum,
      thirdCardNum,
      fourthCardNum,
    ].join("-");

    const userPhone = [userPhone1, userPhone2, userPhone3].join("-");

    const data = await reserveRoom({
      bookPrice,
      checkInDate,
      checkOutDate,
      roomId,
      bookOption,
      userName,
      userPhone,
      cardNum,
      cardCompany,
    });

    navigate("/reserv/3", {
      state: {
        bookId: data.bookId,
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        userName: data.userName,
        userPhone: data.userPhone,
        bookPrice: data.bookPrice,
        capacity: capacity,
        roomName: roomName,
      },
    });
  };

  const handleBack = () => {
    navigate(-1);
  };

  const inputMoveNumber = (e) => {
    if (e.target.value.length === 4) {
      e.target.nextElementSibling.focus();
    }
  };

  return (
    <>
      <InputContainer>
        <Step step={2} />
        <h3>옵션 사항, 고객 정보 입력</h3>
        <InputDiv>
          <Label>추가 요청사항</Label>
          <textarea
            placeholder="추가 요청 사항을 입력해주세요."
            onChange={(e) => {
              setBookOption(e.target.value);
            }}
          />
        </InputDiv>
        <InputDiv>
          <Label>정보입력</Label>
          <InputDiv2>
            <div style={{ width: "50%" }}>
              <InfoInput>
                <p>고객정보</p>
                <div style={{ display: "flex" }}>
                  <p>성명</p>
                  <BasicInput
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ paddingTop: "20px" }}>연락처</p>
                  <TelInput
                    onChange={(e) => {
                      setUserPhone1(e.target.value);
                    }}
                  />
                  -
                  <TelInput
                    onChange={(e) => {
                      setUserPhone2(e.target.value);
                    }}
                  />
                  -
                  <TelInput
                    onChange={(e) => {
                      setUserPhone3(e.target.value);
                    }}
                  />
                </div>
              </InfoInput>
            </div>
            <div style={{ width: "50%" }}>
              <InfoInput>
                <div style={{ display: "flex" }}>
                  <p>카드 종류</p>
                  <select
                    className="sessionSelect"
                    name="section"
                    onChange={(e) => setCardCompany(e.target.value)}
                  >
                    <option value="">카드를 선택하세요</option>
                    <option value="신한카드">신한카드</option>
                    <option value="국민카드">국민카드</option>
                    <option value="국민카드">삼성카드</option>
                    <option value="현대카드">롯데카드</option>
                    <option value="현대카드">BC카드</option>
                    <option value="현대카드">하나카드</option>
                    <option value="현대카드">우리카드</option>
                    <option value="현대카드">현대카드</option>
                  </select>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ paddingTop: "20px" }}>카드 번호</p>
                  <CardInput
                    type="text"
                    onChange={(e) => setFirstCardNum(e.target.value)}
                    onKeyUp={(e) => inputMoveNumber(e)}
                    maxLength="4"
                  />
                  -
                  <CardInput
                    type="password"
                    onChange={(e) => setSecondCardNum(e.target.value)}
                    onKeyUp={(e) => inputMoveNumber(e)}
                    maxLength="4"
                  />
                  -
                  <CardInput
                    type="password"
                    onChange={(e) => setThirdCardNum(e.target.value)}
                    onKeyUp={(e) => inputMoveNumber(e)}
                    maxLength="4"
                  />
                  -
                  <CardInput
                    type="password"
                    maxLength="4"
                    onChange={(e) => setFourthCardNum(e.target.value)}
                  />
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
      </InputContainer>
      <BottomBar
        handleNext={handleComplete}
        handleBack={handleBack}
        price={bookPrice}
      />
    </>
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
  select {
    height: 40px;
  }
`;

const BasicInput = styled.input`
  width: 300px;
  height: 30px;
`;

const TelInput = styled.input`
  width: 80px;
  margin: 0px 5px;
  height: 30px;
`;

const CardInput = styled.input`
  width: 70px;
  margin: 0px 5px;
  height: 30px;
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

export default SecondStep;
