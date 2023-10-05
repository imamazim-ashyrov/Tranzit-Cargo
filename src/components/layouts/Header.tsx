import React from "react";
import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logotip from "../../assets/images/Logotip.svg";
import BurgerMenu from "../../UI/BurgerMenu";
import SnackBar from "../../UI/SnackBar";
type HeaderProps = {
  aboutUsRef: React.RefObject<HTMLElement>;
  servicesRef: React.RefObject<HTMLElement>;
  faqRef: React.RefObject<HTMLElement>;
  contactsRef: React.RefObject<HTMLElement>;
};
const Header: React.ForwardRefRenderFunction<HTMLElement, HeaderProps> = (
  props,
  ref
) => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const isTop = scrollY === 0;
  const [isShow, setIsShow] = useState(true);
  const handleScroll = () => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  };
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      const headerHeight: number = 66;
      const yOffset =
        ref.current.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
  };
  const handleClick = (path: string) => {
    switch (path) {
      case "main":
        document.title = "Tranzit Cargo - Главная";
        scrollToRef(ref as React.RefObject<HTMLElement>);
        break;
      case "about-us":
        document.title = "О компании";
        scrollToRef(props.aboutUsRef);
        break;
      case "services":
        document.title = "Наши услуги";
        scrollToRef(props.servicesRef);
        break;
      case "faq":
        document.title = "Популярные вопросы";
        scrollToRef(props.faqRef);
        break;
      case "contacts":
        scrollToRef(props.contactsRef);
        break;
      default:
        break;
    }
    navigate(`${"/"}${path}`);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!isShow && (
        <SnackBar scrollByRoute={handleClick} setIsShow={setIsShow} />
      )}
      <Wrapper isTop={isTop}>
        <Container>
          <ContLogo>
            <img onClick={() => handleClick("main")} src={Logotip} alt="Logotip" />
          </ContLogo>
          <Navigations>
            <span onClick={() => handleClick("main")}>Главная</span>
            <span onClick={() => handleClick("about-us")}>О нас</span>
            <span onClick={() => handleClick("services")}>Услуги</span>
            <span onClick={() => handleClick("faq")}>Вопросы</span>
            <span onClick={() => handleClick("contacts")}>Контакты</span>
          </Navigations>
          <NumberWithBurgerMenu>
            <Number>
              <div>
                <CallIcon />
              </div>
              <div className="numbers">
                <span>+996 708 11-26-01</span>
                <span>+996 708 11-26-01</span>
              </div>
            </Number>
            <BurgerMenu isShow={isShow} setIsShow={setIsShow} />
          </NumberWithBurgerMenu>
        </Container>
      </Wrapper>
      <Div ref={ref as React.RefObject<HTMLDivElement>}></Div>
    </>
  );
};
export default React.forwardRef(Header);
const Wrapper = styled.div<{ isTop: boolean }>`
  padding: 5px 0 5px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: #ffffff;
  z-index: 2;
  box-shadow: ${({ isTop }) =>
    isTop ? "none" : "rgba(93, 87, 87, 0.24) 0px 3px 8px;"};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;
const Container = styled.div`
  height: 11vh;
  width: 85%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumberWithBurgerMenu = styled.div`
  @media (max-width: 950px) {
    width: 13em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 600px) {
    width: auto;
  }
`;
const Navigations = styled.nav`
  width: 35em;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  @media (max-width: 1100px) {
    width: 30em;
  }
  @media (max-width: 1050px) {
    width: 27em;
    font-size: 14px;
    letter-spacing: 0;
  }
  @media (max-width: 950px) {
    display: none;
  }
  & span {
    text-align: center;
    cursor: pointer;
  }
`;
const Number = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.3s ease;
  & .numbers {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
const Div = styled.div`
  margin: 0;
  height: 9vh;
`;

const ContLogo = styled.div`
  width: 11em;
  & img {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    width: 10em;
  }
`;
