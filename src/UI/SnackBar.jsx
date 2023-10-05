import { styled } from "styled-components";
import CallIcon from "@mui/icons-material/Call";
const SnackBar = ({ scrollByRoute, setIsShow }) => {

  const body = document.querySelector("body");

  const clickHandler = (route) => {
    scrollByRoute(route);
    setIsShow((prev) => !prev);
    body.style.overflow = "scroll"
  };
  const closeSnackbar = () => {
    setIsShow((prev) => !prev);
    body.style.overflow = "scroll"
  };
  return (
    <>
      <BackDrop onClick={closeSnackbar}></BackDrop>
      <GlobalDiv>
        <MainDivHeader>
          <p onClick={() => clickHandler("main")}>Главная</p>
          <p onClick={() => clickHandler("about-us")}>О компании </p>
          <p onClick={() => clickHandler("services")}>Услуги</p>
          <p onClick={() => clickHandler("faq")}>FAQ</p>
          <p onClick={() => clickHandler("contacts")}>Контакты</p>
          <NumberDiv>
            <div className="quarter">
              <CallIcon />
              <WrapperNumber>
                <span>+996 708 11-26-10</span>
                <span>+996 708 11-26-10</span>
              </WrapperNumber>
            </div>
          </NumberDiv>
        </MainDivHeader>
      </GlobalDiv>
    </>
  );
};
export default SnackBar;

const BackDrop = styled.div`
  border: 1px solid;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.2;
  z-index: 99;
  width: 100%;
  height: 100vh;
`;

const GlobalDiv = styled.div`
  border-radius: 10px;
  z-index: 100;
  position: fixed;
  left: 99%;
  transform: translate(-100%);
  background-color: white;
  color: #000000;
  width: 308px;
  top: 12.4vh;
  box-shadow: 0 0 8px 0.01px #b1b1b1;
  padding-bottom: 1em;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const MainDivHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  & > p {
    margin: 0.6em;
    cursor: pointer;
    transition: 200ms ease;
    &:hover {
      color: #bcbcbc;
    }
  }
`;
const NumberDiv = styled.div`
  display: none;
  & .quarter {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 6px;
    margin-top: 1em;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;
const WrapperNumber = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
`;
