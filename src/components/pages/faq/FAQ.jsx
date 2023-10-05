import { motion } from "framer-motion";
import { forwardRef, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import { MLines } from "../../../UI/Lines";
import { animateOnAxis_X } from "../../animation/AnimationGroup";
import { faqData } from "./FAQData";
import { Helmet } from "react-helmet";

const FAQ = forwardRef((props, ref) => {
  const [activeText, setActiveText] = useState(null);

  const activeTextHandle = (textNumber) => {
    setActiveText(activeText === textNumber ? null : textNumber);
  };

  return (
    <>
      {/* <Helmet>
        <title>Часто задаваемые вопросы</title>
        <meta name="description" content="" />
      </Helmet> */}
      <Wrapper
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        ref={ref}
      >
        <MLines variants={animateOnAxis_X} custom={1} top="2em" />
        <Container>
          <Title variants={animateOnAxis_X} custom={2}>
            Популярные вопросы
          </Title>
          <GeneralDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                variants={animateOnAxis_X}
                custom={index + 3.5}
                key={index}
              >
                <Question
                  style={{
                    backgroundColor: `${activeText === index ? "#f1f1f1" : ""}`,
                  }}
                  onClick={() => activeTextHandle(index)}
                >
                  <P>{faq.question}</P>
                  <MdOutlineArrowForwardIos
                    style={{
                      transition: "0.3s ease",
                      transform: `${
                        activeText === index ? "rotate(90deg)" : "none"
                      }`,
                    }}
                  />
                </Question>
                <WrapperAnswer show={activeText === index}>
                  <Answer>
                    {faq.answer.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </Answer>
                </WrapperAnswer>
                <Line />
              </motion.div>
            ))}
          </GeneralDiv>
        </Container>
      </Wrapper>
    </>
  );
});

export default FAQ;

const Wrapper = styled(motion.section)`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled(motion.h1)`
  margin-top: 2em;
  font-size: 36px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GeneralDiv = styled(motion.div)`
  width: 55%;
  padding-bottom: 20vh;
  @media (max-width: 1200px) {
    width: 40em;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Question = styled(motion.div)`
  margin-top: 1em;
  text-align: start;
  padding: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  background-color: white;
  &:hover {
    background-color: #f1f1f1;
    transition: 0.1s ease;
    cursor: pointer;
  }
`;

const P = styled.span`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 500;
  color: rgba(33, 29, 112, 1);
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const WrapperAnswer = styled.div`
  max-height: ${({ show }) => (show ? "500px" : "0")};
  overflow: hidden;
  padding-left: 20px;
  transition: max-height 0.5s ease;
`;

const Answer = styled.span`
  font-size: 18px;
  color: rgba(88, 137, 246, 1);
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;
const Line = styled.div`
  border: 1px solid rgba(88, 137, 246, 1);
  width: 103%;
`;
