import { motion } from "framer-motion";
import { forwardRef } from "react";
import styled from "styled-components";

const Lines = forwardRef(({ top }, ref) => {
  return (
    <Wrapper top={top} ref={ref}>
      <FirstLine />
      <SecondLine />
      <ThirdLine />
    </Wrapper>
  );
});

export const MLines = motion(Lines)

const Wrapper = styled.div`
  width: 100%;
  margin-top: ${({ top }) => top || "0px"};
  display: flex;
  height: 2.5em;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const FirstLine = styled.div`
  width: 27%;
  height: 6px;
  background-color: rgba(33, 29, 112, 1);
  border-radius: 0 0 30px 0;
  @media (max-width: 1200px) {
    width: 22em;
  }
  @media (max-width: 600px) {
    width: 60%;
  }
`;
const SecondLine = styled.div`
  width: 23%;
  height: 6px;
  background-color: rgba(0, 137, 203, 1);
  border-radius: 0 0 30px 0;
  @media (max-width: 1200px) {
    width: 18em;
  }
  @media (max-width: 600px) {
    width: 50%;
  }
`;
const ThirdLine = styled.div`
  width: 19%;
  height: 6px;
  background-color: rgba(33, 29, 112, 1);
  border-radius: 0 0 30px 0;
  @media (max-width: 1200px) {
    width: 14em;
  }
  @media (max-width: 600px) {
    width: 40%;
  }
`;
