import styled from "styled-components";
import Step from "../../components/Step";
import { useNavigate, useLocation } from "react-router";
import { reserveRoom } from "../../api/bookApi";
import { forwardRef, useState } from "react";
import BottomBar from "../../components/BottomBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Slide } from "@mui/material";

const SecondStep = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const bookPrice = state.roomPrice;
  const checkInDate = state.checkInDate;
  const checkOutDate = state.checkOutDate;
  const roomId = state.roomId;
  const capacity = state.capacity;
  const roomName = state.roomName;
  const [bookOption, setBookOption] = useState("요청 사항 없음");
  const [userName, setUserName] = useState("강지영");
  const [userPhone1, setUserPhone1] = useState("010");
  const [userPhone2, setUserPhone2] = useState("8229");
  const [userPhone3, setUserPhone3] = useState("2558");
  const [firstCardNum, setFirstCardNum] = useState("1234");
  const [secondCardNum, setSecondCardNum] = useState("1111");
  const [thirdCardNum, setThirdCardNum] = useState("1111");
  const [fourthCardNum, setFourthCardNum] = useState("1111");
  const [cardCompany, setCardCompany] = useState("국민카드");

  const [open, setOpen] = useState(false);
  const [aopen, setAopen] = useState(false);
  const [option, setOption] = useState(1);

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };

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

    navigate("/complete", {
      state: {
        bookId: 2018112029,
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
            value={bookOption}
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
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ paddingTop: "20px" }}>연락처</p>
                  <TelInput
                    value={userPhone1}
                    onChange={(e) => {
                      setUserPhone1(e.target.value);
                    }}
                  />
                  -
                  <TelInput
                    value={userPhone2}
                    onChange={(e) => {
                      setUserPhone2(e.target.value);
                    }}
                  />
                  -
                  <TelInput
                    value={userPhone3}
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
                    value={cardCompany}
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
                    value={firstCardNum}
                    onChange={(e) => setFirstCardNum(e.target.value)}
                    onKeyUp={(e) => inputMoveNumber(e)}
                    maxLength="4"
                  />
                  -
                  <CardInput
                    type="password"
                    value={secondCardNum}
                    onChange={(e) => setSecondCardNum(e.target.value)}
                    onKeyUp={(e) => inputMoveNumber(e)}
                    maxLength="4"
                  />
                  -
                  <CardInput
                    type="password"
                    value={thirdCardNum}
                    onChange={(e) => setThirdCardNum(e.target.value)}
                    onKeyUp={(e) => inputMoveNumber(e)}
                    maxLength="4"
                  />
                  -
                  <CardInput
                    type="password"
                    value={fourthCardNum}
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {option === 2 ? (
          <>
            <DialogTitle>{"정말 예약을 변경하시겠습니까?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                예약을 변경하시면 &nbsp;
                <u>
                  <b>변경 규정</b>
                </u>
                에 따라 360000원 금액이 환불되고, {bookPrice}원이 결제 됩니다.
                <br />
                이에 동의하십니까?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setOption(2);
                  handleComplete();
                }}
              >
                네
              </Button>
              <Button onClick={handleClose}>아니오</Button>
            </DialogActions>
          </>
        ) : (
          <>
            <div
              style={{
                marginBottom: "30px",
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              <DialogTitle>강지영님 변경 내역을 확인해주세요!</DialogTitle>
            </div>
            <DialogContent style={{ marginBottom: "30px" }}>
              <DialogContentText id="alert-dialog-slide-description2">
                <div style={{ display: "flex" }}>
                  <div>
                    <p
                      style={{
                        textAlign: "center",
                        color: "rgb(200, 153, 117)",
                        fontWeight: 600,
                      }}
                    >
                      {" "}
                      기존 예약 내역
                    </p>
                    <table
                      border={1}
                      style={{
                        width: "250px",
                        margin: "10px",
                        borderSpacing: "0px",
                        borderColor: "rgb(224, 224, 224)",
                      }}
                    >
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>예약자 성함</th>
                        <td style={{ textAlign: "center" }}>{userName}</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>예약자 연락처</th>
                        <td style={{ textAlign: "center" }}>010-8229-2558</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>체크인 날짜</th>
                        <td style={{ textAlign: "center" }}>2022.11.29</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>체크아웃 날짜</th>
                        <td style={{ textAlign: "center" }}>2022.11.30</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>이용 인원</th>
                        <td style={{ textAlign: "center" }}>2인</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>객실 타입</th>
                        <td style={{ textAlign: "center" }}>
                          그랜드 디럭스 더블
                        </td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>이용 요금</th>
                        <td style={{ textAlign: "center" }}>400000원</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <p
                      style={{
                        textAlign: "center",
                        color: "rgb(200, 153, 117)",
                        fontWeight: 600,
                      }}
                    >
                      변경 예약 내역
                    </p>
                    <table
                      border={1}
                      style={{
                        width: "250px",
                        margin: "10px",
                        borderSpacing: "0px",
                        borderColor: "rgb(224, 224, 224)",
                      }}
                    >
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>예약자 성함</th>
                        <td style={{ textAlign: "center" }}>{userName}</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>예약자 연락처</th>
                        <td style={{ textAlign: "center" }}>010-8229-2558</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>체크인 날짜</th>
                        <td style={{ textAlign: "center" }}>
                          {checkInDate
                            .replace("12:00:00", "")
                            .replaceAll("-", ".")}
                        </td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>체크아웃 날짜</th>
                        <td style={{ textAlign: "center" }}>
                          {checkOutDate
                            .replace("12:00:00", "")
                            .replaceAll("-", ".")}
                        </td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>이용 인원</th>
                        <td style={{ textAlign: "center" }}>2인</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>객실 타입</th>
                        <td style={{ textAlign: "center" }}>{roomName}</td>
                      </tr>
                      <tr
                        style={{
                          height: "45px",
                        }}
                      >
                        <th>이용 요금</th>
                        <td style={{ textAlign: "center" }}>{bookPrice}원</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setOpen(true);
                  setAopen(false);
                  setOption(2);
                }}
              >
                확인완료
              </Button>
              <Button onClick={() => setAopen(false)}>취소</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
      <BottomBar
        handleNext={() => setOpen(true)}
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
