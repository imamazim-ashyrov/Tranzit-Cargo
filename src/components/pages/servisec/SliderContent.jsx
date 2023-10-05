import { useState } from "react";
import Slider from "react-slick";
import { ServicesData } from "./ServicesData";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <RightArrow onClick={onClick}>
      <AiFillCaretRight />
    </RightArrow>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <LeftArrow onClick={onClick}>
      <AiFillCaretLeft />
    </LeftArrow>
  );
}

const SliderContent = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    centerPadding: "0px",
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {ServicesData.map((el, index) => (
          <Container
            className={imageIndex === index ? "slide activeSlide" : "slide"}
          >
            <ImageWrapper>
              <img src={el.imageFront} alt={el.title} />
            </ImageWrapper>
            <ServiceCars>
              <Circle>
                <ServiceIcon src={el.icon} alt="icon" />
              </Circle>
              <StyleSpan>
                <ServiceH2>{el.title}</ServiceH2>
                <ServiceP>{el.duration}</ServiceP>
              </StyleSpan>
            </ServiceCars>
          </Container>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default SliderContent;

const Wrapper = styled.div`
  display: none;
  position: relative;
  width: 100%;
  margin: auto;
  & .slide {
    transform: scale(0.2);
    transition: transform 300ms;
    opacity: 0.5;
  }
  & .activeSlide {
    transform: scale(1.1);
    opacity: 1;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

const Container = styled.div`
  width: 60%;
`;
const ImageWrapper = styled.div`
  & img {
    width: 60%;
    margin: 0 auto;
    padding: 0;
    border-radius: 10px;
    @media (max-width: 650px) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
const BottomArrow = styled.div`
  z-index: 1;
  cursor: pointer;
  position: absolute;
  bottom: 13em;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 700px) {
    bottom: 12em;
  }
  @media (max-width: 650px) {
    bottom: -1.8em;
  }
`;
const LeftArrow = styled(BottomArrow)`
  left: 0em;
  @media (max-width: 650px) {
    left: 6em;
  }
  @media (max-width: 500px) {
    left: 4em;
  }
  @media (max-width: 400px) {
    left: 2em;
  }
`;

const RightArrow = styled(BottomArrow)`
  right: 0em;
  @media (max-width: 650px) {
    right: 6em;
  }
  @media (max-width: 500px) {
    right: 4em;
  }
  @media (max-width: 400px) {
    right: 2em;
  }
`;

const ServiceCars = styled.div`
  position: relative;
  width: 40%;
  z-index: 10;
  padding-bottom: 10px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 9px 5px 0 #00000040;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -2em;
  transition: 0.3s ease;
  left: 30%;
  @media (max-width: 650px) {
      width: 60%;
      left: 20%;
    }
  @media (max-width: 500px) {
      width: 75%;
      left: 12.5%;
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
