import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <p>D Hotel</p>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  border-bottom: 1px solid #f8f9fa;
  padding: 5px 20px;
  background-color: rgb(241, 230, 214);
  text-align: center;
  p {
    width: 100%;
    color: rgb(97, 66, 66);
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export default Header;
