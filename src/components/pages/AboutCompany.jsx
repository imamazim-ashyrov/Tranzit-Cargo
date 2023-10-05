import styled from "styled-components";
import man from "../../assets/images/CargoMan.png";
import truck from "../../assets/images/CargoTruck.png";
import { forwardRef } from "react";
import { MLines } from "../../UI/Lines";
import { animateOnAxis_X } from "../animation/AnimationGroup";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutCompany = forwardRef((props, ref) => {
  return (
    <>
      {/* <Helmet>
        <title>О компании</title>
        <meta name="description" content=""/>
      </Helmet> */}
      <Wrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        ref={ref}
      >
        <MLines variants={animateOnAxis_X} custom={1} />
        <AboutH1 variants={animateOnAxis_X} custom={2}>
          О компании
        </AboutH1>
        <AboutUs>
          <TextWrapper variants={animateOnAxis_X} custom={3}>
            Транспортная компания «Transit Cargo» предлагает оптимальные и
            комплексные решения для перевозок сборных грузов и отдельными
            машинами из Бишкека во все города России и обратно. <br />
            <br />
            Если Вам требуется доставить крупную партию груза - мы выделим под
            Ваш груз персональный транспорт в любое удобное для Вас время.{" "}
            <br /> <br />
            Наша компания специализируется на доставке грузов из Китая, включая
            услуги по таможенной очистке на территории стран Таможенного Союза и
            доставке до склада заказчика по принципу «от двери к двери».
          </TextWrapper>

          <ImagesPosition>
            <CargoMan
              variants={animateOnAxis_X}
              custom={4}
              src={man}
              alt="CargoMan"
            />
            <ImgTruck
              variants={animateOnAxis_X}
              custom={5}
              src={truck}
              alt="Truck"
            />
          </ImagesPosition>
        </AboutUs>
      </Wrapper>
    </>
  );
});

export default AboutCompany;

const Wrapper = styled(motion.section)`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 3em;
`;

const ImagesPosition = styled.div`
  display: flex;
  width: 47%;
  @media (max-width: 800px) {
    width: 60%;
    margin-left: -40%;
    margin-top: 3em;
  }
`;
const CargoMan = styled(motion.img)`
  width: 54%;
  height: 90%;
  @media (max-width: 1000px) {
    width: 62%;
  }
  @media (max-width: 900px) {
    height: 80%;
  }
  @media (max-width: 800px) {
    width: 16em;
  }
  @media (max-width: 540px) {
    width: 95%;
  }
`;
const ImgTruck = styled(motion.img)`
  height: 90%;
  width: 58%;
  padding: 0;
  margin-left: -4em;
  margin-top: 4em;
  @media (max-width: 1000px) {
    width: 65%;
  }
  @media (max-width: 900px) {
    height: 80%;
  }
  @media (max-width: 800px) {
    width: 17em;
  }
  @media (max-width: 540px) {
    width: 99%;
  }
`;
const AboutUs = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 85%;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
const TextWrapper = styled(motion.div)`
  overflow-y: scroll !important;
  width: 43%;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  font-size: 23px;
  font-weight: 400;
  box-shadow: 0 14px 10px rgba(232, 232, 232, 0.4);
  @media (max-width: 800px) {
    width: 100%;
    font-size: 16px;
    text-align: start;
    overflow-y: hidden !important;
    box-shadow: none;
  }
  @media (max-width: 500px) {
    overflow-y: scroll !important;
    max-height: 20em;
  }
`;

const AboutH1 = styled(motion.h1)`
  max-width: 1200px;
  width: 85%;
  text-align: start;
  font-size: 38px;
  font-weight: 500;
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;
