import Step from "../../components/Step";
import styled from "styled-components";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";

const FirstStep = () => {
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(tomorrow);
  const [day, setDay] = useState(1);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

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

  const handleSearch = () => {
    navigate("/reserv/2");
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
              dateFormat="yyyy.mm.dd (E)"
              onChange={(date) => setStartDate(date)}
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
              dateFormat="yyyy.mm.dd (E)"
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
`;

export default FirstStep;
