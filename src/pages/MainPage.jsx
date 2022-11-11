import React from "react";
import styled from "styled-components";
import hotel from "../assets/hotel.jpg";
import { BiHotel } from "react-icons/bi";
import { BsCalendar2Check } from "react-icons/bs";
import { useNavigate } from "react-router";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <MainPageContainer>
      <img src={hotel} alt={"hotel image"} />
      <ButtonContainer>
        <ButtonWrppaer onClick={() => navigate("/reserv/1")}>
          <HotelIcon />
          <p>객실 예약</p>
        </ButtonWrppaer>
        <ButtonWrppaer onClick={() => navigate("/login")}>
          <CheckIcon />
          <p>예약 확인</p>
        </ButtonWrppaer>
      </ButtonContainer>
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
`;

const HotelIcon = styled(BiHotel)`
  width: 30px;
  height: 30px;
  color: #616161;
`;

const CheckIcon = styled(BsCalendar2Check)`
  width: 30px;
  height: 30px;
  color: #616161;
`;

const ButtonWrppaer = styled.div`
  width: 270px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  p {
    color: #616161;
    font-size: 1rem;
    font-weight: 600;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transition: transform 0.5s;
  }
`;

export default MainPage;
