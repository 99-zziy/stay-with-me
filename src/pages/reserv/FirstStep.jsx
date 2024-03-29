import Step from "../../components/Step";
import styled from "styled-components";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import { searchRooms } from "../../api/bookApi";
import roomImg1 from "../../assets/room1.jpg";
import roomImg2 from "../../assets/room2.jpg";
import roomImg3 from "../../assets/room3.jpeg";
import roomImg4 from "../../assets/room4.jpeg";

const FirstStep = () => {
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(tomorrow);
  const [day, setDay] = useState(1);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  const onIncrease = () => {
    if (count < 3) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const onDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const getDateFormat = (d) => {
    //yyyy-mm-dd 포맷 날짜 생성
    return (
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1 > 9
        ? (d.getMonth() + 1).toString()
        : "0" + (d.getMonth() + 1)) +
      "-" +
      (d.getDate() > 9
        ? d.getDate().toString()
        : "0" + d.getDate().toString()) +
      " 12:00:00"
    );
  };

  const handleReserve = ({ roomId, roomPrice, roomName }) => {
    const start = getDateFormat(startDate);
    const end = getDateFormat(endDate);
    navigate("/reserv/2", {
      state: {
        roomId,
        roomPrice,
        roomName,
        checkInDate: start,
        checkOutDate: end,
        capacity: count,
      },
    });
  };

  const handleSearch = async () => {
    const start = getDateFormat(startDate);
    const end = getDateFormat(endDate);
    const data = await searchRooms({ start, end, capacity: count });
    setRooms(data);
  };

  useEffect(() => {
    const diff =
      (endDate.getTime() - startDate.getTime()) / (1000 * 24 * 60 * 60);
    setDay(Math.ceil(diff));
  }, [startDate, endDate]);

  return (
    <SeachPageContainer>
      <Step step={1} />
      <h3>날짜 , 인원 선택</h3>
      <Box>
        <div style={{ marginRight: "20px" }}>
          <p>체크인</p>
          <div
            style={{ height: "50px", display: "flex", alignItems: "center" }}
          >
            <SDatePicker
              selected={startDate}
              dateFormat="yyyy.MM.dd (E)"
              onChange={(date) => {
                console.log(date);
                setStartDate(date);
              }}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
        <div style={{ marginRight: "20px", marginTop: "30px" }}>
          <p style={{ height: "50px", display: "flex", alignItems: "center" }}>
            {`${day}박`}
          </p>
        </div>
        <div style={{ marginRight: "20px" }}>
          <p>체크아웃</p>
          <div
            style={{ height: "50px", display: "flex", alignItems: "center" }}
          >
            <SDatePicker
              selected={endDate}
              dateFormat="yyyy.MM.dd (E)"
              onChange={(date) => setEndDate(date)}
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>
        <div style={{ marginRight: "20px" }}>
          <p style={{ textAlign: "center" }}> 인원</p>
          <div
            style={{
              display: "flex",
              width: "100px",
              justifyContent: "space-around",
              alignItems: "center",
              height: "50px",
            }}
          >
            <Button onClick={onDecrease}>-</Button>
            <p>{count}</p>
            <Button onClick={onIncrease}>+</Button>
          </div>
        </div>
        <div style={{ marginRight: "20px", marginTop: "50px" }}>
          <SearchButton onClick={handleSearch}>검색</SearchButton>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {rooms &&
          rooms.map((room, index) => (
            <div
              key={room.roomId}
              style={{
                display: "flex",
                width: "960px",
                justifyContent: "space-between",
                marginBottom: "-20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                {index === 0 && (
                  <Left>
                    <img src={roomImg1} />
                  </Left>
                )}
                {index === 1 && (
                  <Left>
                    <img src={roomImg2} />
                  </Left>
                )}
                {index === 2 && (
                  <Left>
                    <img src={roomImg3} />
                  </Left>
                )}
                {index >= 3 && (
                  <Left>
                    <img src={roomImg4} />
                  </Left>
                )}

                <Mid>
                  <h4>{room.roomName}</h4>
                  <h6>{room.roomDetail}</h6>
                </Mid>
              </div>
              <Right>
                <p>{room.roomPrice}원</p>
                <ReserveButton onClick={() => handleReserve(room)}>
                  예약하기
                </ReserveButton>
              </Right>
            </div>
          ))}
      </div>
    </SeachPageContainer>
  );
};

const SeachPageContainer = styled.div`
  h3 {
    color: rgb(200, 166, 117);
    text-align: center;
    margin-top: 50px;
  }
  p {
    font-size: 0.9rem;
    font-weight: 600;
  }
  input {
    &:hover {
      cursor: pointer;
    }
  }
  input:focus {
    outline: none !important;
  }
`;

const SDatePicker = styled(DatePicker)`
  border: none;
  background: #f5f5f5;
  font-size: 0.9rem;
  font-weight: 500;
  color: #757575;
`;

const Button = styled.button`
  border: none;
  background: #e0e0e0;
  width: 30px;
  height: 30px;
  font-size: 1.2rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
`;

const SearchButton = styled.button`
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

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 50px auto;
  padding: 30px 80px;
  background: #f5f5f5;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 100px;
`;

const Left = styled.div`
  img {
    width: 250px;
  }
  height: 180px;
`;

const Right = styled.div`
  display: flex;
  justify-content: end;
  height: 240px;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: 600;
    color: rgb(51, 51, 51);
  }
`;

const Mid = styled.div`
  width: 300px;
  margin: 0px 30px;
  height: 180px;
  h4 {
    font-size: 22px;
  }
  h6 {
    font-size: 14px;
    color: rgb(94, 94, 94);
    font-weight: 500;
  }
`;

const ReserveButton = styled.button`
  height: 40px;
  width: 100px;
  margin-left: 30px;
  border: none;
  background: rgb(200, 153, 117);
  font-size: 1.2rem;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
`;

export default FirstStep;
