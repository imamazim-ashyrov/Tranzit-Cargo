import styled from "styled-components";
import { forwardRef } from "react";
import { ServicesData } from "./ServicesData";
import { MServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import {
  animateOnAxis_X_ToLeft,
  animateOnAxis_Y,
} from "../../animation/AnimationGroup";
import SliderContent from "./SliderContent";
import { Helmet } from "react-helmet";

const Services = forwardRef((props, ref) => {
  return (
    <>
      {/* <Helmet>
        <title>Наши услуги</title>
        <meta name="description" content="" />
      </Helmet> */}
      <Container
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        ref={ref}
      >
        <Lines variants={animateOnAxis_X_ToLeft} custom={1}>
          <FirstLine />
          <SecondLine />
          <ThirdLine />
        </Lines>
        <Service>
          <ServiceH1 variants={animateOnAxis_Y} custom={2}>
            Наши услуги
          </ServiceH1>
          <CargoService1
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 1, once: true }}
            style={{ overflow: "hidden" }}
          >
            {ServicesData.map((service, index) => (
              <MServiceCard
                variants={animateOnAxis_Y}
                custom={index + 1.5}
                {...service}
                key={service.id}
              />
            ))}
          </CargoService1>
          <SliderContent />
        </Service>
      </Container>
    </>
  );
});

export default Services;

const CargoService1 = styled(motion.div)`
  display: block;
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Container = styled(motion.section)`
  background: rgba(88, 137, 246, 0.7);
  height: 91vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Service = styled.div`
  max-width: 1200px;
  width: 85%;
`;
const Lines = styled(motion.div)`
  width: 100%;
  padding: 30px 0;
  display: flex;
  align-items: end;
  flex-direction: column;
`;
const FirstLine = styled.div`
  width: 27%;
  height: 4.71px;
  background: #211d70;
  border-radius: 0 0 0 30px;
  @media (max-width: 1200px) {
    width: 22em;
  }
  @media (max-width: 600px) {
    width: 60%;
  }
`;
const SecondLine = styled.div`
  width: 23.2%;
  height: 4.71px;
  background: white;
  border-radius: 0 0 0 30px;
  margin: 13px 0;
  @media (max-width: 1200px) {
    width: 18em;
  }
  @media (max-width: 600px) {
    width: 50%;
  }
`;
const ThirdLine = styled.div`
  width: 19.4%;
  height: 4.71px;
  background: #211d70;
  border-radius: 0 0 0 30px;
  @media (max-width: 1200px) {
    width: 14em;
  }
  @media (max-width: 600px) {
    width: 40%;
  }
`;
const ServiceH1 = styled(motion.h1)`
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  color: #ffffff;
`;
