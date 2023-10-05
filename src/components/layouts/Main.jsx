import styled from "styled-components";
import LeftBanner from "../../assets/images/LeftBanner.png";
import RightBanner from "../../assets/images/RightBanner.png";
import BannerPlane from "../../assets/images/BannerPlane.png";
import BannerTrain from "../../assets/images/BannerTrain.png";
import BannerTruck from "../../assets/images/BannerTruck.png";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  AnimatedText,
  ApparatAnimated,
  animateOnAxis_X,
  animateOnAxis_Y,
  animateOnAxis_Y_ToDown,
} from "../animation/AnimationGroup";
const Main = () => {
  return (
    <>
      {/* <Helmet>
        <title>Tranzit Cargo - Main Page</title>
        <meta name="description" content="" />
      </Helmet> */}
      <Wrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
      >
        <Banners>
          <ApparatAnimated>
            <img className="left-image" src={LeftBanner} alt="Banner" />
          </ApparatAnimated>
          <ApparatAnimated>
            <img className="right-image" src={RightBanner} alt="Banner" />
          </ApparatAnimated>
        </Banners>
        <motion.img
          variants={animateOnAxis_X}
          custom={2}
          className="truck"
          src={BannerTruck}
          alt="Truck"
        />
        <motion.img
          variants={animateOnAxis_Y_ToDown}
          custom={2}
          className="plane"
          src={BannerPlane}
          alt="Plane"
        />
        <motion.img
          variants={animateOnAxis_Y}
          custom={2}
          className="train"
          src={BannerTrain}
          alt="Train"
        />
        <Text>
          <ContainerTitle>
            <AnimatedText duration="0.2">
              <H1>
                Доставим товар <br /> Быстро и безопасно!{" "}
              </H1>
            </AnimatedText>
          </ContainerTitle>
          <br />
          <div>
            <AnimatedText duration="0.5">
              <H3>
                Доставка, хранение, складирование грузов любой сложности и
                объема!{" "}
              </H3>
            </AnimatedText>
          </div>
        </Text>
      </Wrapper>
    </>
  );
};
export default Main;
const Wrapper = styled(motion.main)`
  overflow: hidden;
  width: 100%;
  height: 91vh;
  perspective: 1000px;
  @media (max-width: 375px) {
  }
  & .plane {
    width: 21%;
    position: absolute;
    left: 63%;
    top: 3em;
    @media (max-width: 1200px) {
      width: 25%;
    }
    @media (max-width: 1050px) {
      width: 27%;
    }
    @media (max-width: 950px) {
      top: 4em;
    }
    @media (max-width: 870px) {
      top: 6em;
      left: 64%;
    }
    @media (max-width: 650px) {
      top: 4em;
      left: 64%;
    }
    @media (max-width: 550px) {
      top: 4em;
      left: 68%;
      width: 24%;
    }
    @media (max-width: 400px) {
      top: 10.7em;
      left: 60%;
      width: 130px;
      height: 130px;
    }
    @media (max-width: 375px) {
      top: 10.7em;
      left: 60%;
      width: 130px;
      height: 130px;
    }
  }
  & .truck {
    width: 19%;
    position: absolute;
    top: 14.5em;
    left: 53%;
    @media (max-width: 1200px) {
      width: 21.4%;
      left: 52%;
    }
    @media (max-width: 950px) {
      width: 23%;
    }
    @media (max-width: 650px) {
      width: 23%;
      top: 11em;
    }
    @media (max-width: 550px) {
      width: 24%;
      top: 9.5em;
      left: 54%;
    }
    @media (max-width: 450px) {
      width: 24%;
      top: 8.4em;
      left: 54%;
    }
    @media (max-width: 400px) {
      top: 15.8em;
      left: 38%;
      width: 8.5em;
      height: 8.5em;
    }
    @media (max-width: 375px) {
      top: 15.8em;
      left: 38%;
      width: 8.5em;
      height: 8.5em;
    }
  }
  & .train {
    width: 19%;
    position: absolute;
    top: 18em;
    left: 71%;
    @media (max-width: 1200px) {
      width: 21.4%;
      left: 72%;
    }
    @media (max-width: 950px) {
      width: 23%;
    }
    @media (max-width: 650px) {
      width: 23%;
      top: 14em;
    }
    @media (max-width: 550px) {
      width: 24%;
      top: 15em;
      left: 68%;
    }
    @media (max-width: 450px) {
      width: 24%;
      top: 12.5em;
      left: 68%;
    }
    @media (max-width: 400px) {
      top: 21em;
      left: 60%;
      width: 8.5em;
      height: 8.5em;
    }
    @media (max-width: 375px) {
      top: 21em;
      left: 60%;
      width: 8.5em;
      height: 8.5em;
    }
  }
`;
const Banners = styled.div`
  & .left-image {
    position: absolute;
    width: 30%;
    top: 2em;
    @media (max-width: 950px) {
      top: 4em;
      width: 35%;
    }
    @media (max-width: 375px) {
      width: 150px;
    }
  }
  & .right-image {
    position: absolute;
    width: 50%;
    height: 88vh;
    left: 109%;
    top: 0;
    transform: translateX(-100%);
    @media (max-width: 650px) {
      transform: translateX(-90%);
      height: 70vh;
      top: 0;
    }
    @media (max-width: 450px) {
      transform: translateX(-90%);
      height: 60vh;
      top: 0;
    }
    @media (max-width: 400px) {
      transform: translateX(-90%);
      height: 252px;
      top: 10em;
    }
    @media (max-width: 375px) {
      transform: translateX(-90%);
      height: 252px;
      top: 10em;
    }
  }
`;
const ContainerTitle = styled.div`
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
const Text = styled.div`
  margin-left: 8%;
  margin-top: 7%;
`;
const H1 = styled.h1`
  margin: 5px 0;
  color: rgba(33, 29, 112, 1);
  @media (max-width: 1050px) {
    font-size: 30px;
  }
  @media (max-width: 900px) {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 22px;
    font-weight: 700;
  }
  @media (max-width: 450px) {
    font-size: 22px;
    font-weight: 700;
  }
  @media (max-width: 400px) {
    font-size: 20px;
    /* width:200px; */
    font-weight: 700;
  }
  @media (max-width: 375px) {
    font-size: 18px;
    width: 200px;
    font-weight: 700;
  }
`;
const H3 = styled.h2`
  color: rgba(33, 29, 112, 1);
  margin: 5px 0;
  width: 500px;
  @media (max-width: 1050px) {
    font-size: 20px;
  }
  @media (max-width: 950px) {
    font-size: 18px;
  }
  @media (max-width: 850px) {
    width: 420px;
    font-size: 18px;
  }
  @media (max-width: 700px) {
    width: 400px;
    font-size: 18px;
  }
  @media (max-width: 650px) {
    width: 330px;
    font-size: 17px;
  }
  @media (max-width: 550px) {
    width: 250px;
    font-size: 16px;
  }
  @media (max-width: 450px) {
    width: 205px;
    font-weight: 600;
    font-size: 17px;
  }
  @media (max-width: 400px) {
    width: 230px;
    font-weight: 600;
    font-size: 16px;
  }
  @media (max-width: 375px) {
    width: 220px;
    font-weight: 600;
    font-size: 15px;
  }
`;
