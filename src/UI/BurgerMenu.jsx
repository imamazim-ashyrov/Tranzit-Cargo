import styled from "styled-components";

const BurgerMenu = ({ isShow, setIsShow }) => {
  const body = document.querySelector("body");
  const clickHandle = () => {
    setIsShow((prev) => !prev);
    body.style.overflow = "hidden";
  };
  return (
    <Wrapper onClick={clickHandle}>
      <BurgerMenuStyled isShow={isShow} className={!isShow ? "open" : ""}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </BurgerMenuStyled>
    </Wrapper>
  );
};

export default BurgerMenu;

const Wrapper = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
`;
const BurgerMenuStyled = styled.div`
  cursor: pointer;
  width: 2em;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .line {
    width: 2em;
    height: ${({ isShow }) => (isShow ? "2.55px" : "3.4px")};
    background-color: black;
    border-radius: 5px;
    transition: transform 0.2s;
  }
  &.open .line:nth-child(1) {
    transform: translateY(10px) rotate(45deg);
  }
  &.open .line:nth-child(2) {
    opacity: 0;
  }
  &.open .line:nth-child(3) {
    transform: translateY(-10.4px) rotate(-45deg);
  }
`;
