import { motion } from "framer-motion";
import { forwardRef } from "react";
import styled from "styled-components";

const ServiceCard = forwardRef(
  ({ title, duration, imageFront, imageBack, icon }, ref) => (
    <Wrapper>
      <FlipCard ref={ref}>
        <FlipCardInner>
          <FlipCardFront src={imageFront} alt="Передняя сторона" />
          <FlipCardBack src={imageBack} alt="Задняя сторона" />
        </FlipCardInner>
      </FlipCard>
      <ServiceCars>
        <Circle>
          <ServiceIcon src={icon} alt="icon" />
        </Circle>
        <StyleSpan>
          <ServiceH2>{title}</ServiceH2>
          <ServiceP>{duration}</ServiceP>
        </StyleSpan>
      </ServiceCars>
    </Wrapper>
  )
);

export const MServiceCard = motion(ServiceCard);

const FlipCard = styled.div`
  width: 100%;
  height: 18em;
  perspective: 1000px;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;

  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  @media (max-width: 900px) {
    height: 90%;
  }
`;

const FlipCardBack = styled.img`
  border-radius: 8px;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  @media (max-width: 900px) {
    height: 90%;
  }
`;

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
    width: 100%;
  }
`;
const ServiceCars = styled.div`
  z-index: 1;
  width: 90%;
  padding-bottom: 10px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 9px 5px 0 #00000040;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2em;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-10px) scale(0.9);
  }
  @media (max-width: 900px) {
    margin-top: -3em;
  }
`;
const ServiceIcon = styled.img`
  margin: 13px 11px;
`;
const StyleSpan = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 23.7px;
`;
const ServiceH2 = styled.span`
  margin-top: -2em;
  font-size: 15px;
  font-weight: 600;
  color: #211d70;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;
const ServiceP = styled.span`
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  color: #000000;
  text-align: center;
  @media (max-width: 1000px) {
    font-size: 13px;
  }
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2em;
`;
