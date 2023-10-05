import { MdWhatsapp } from "react-icons/md";
import styled, { keyframes } from "styled-components";

const WhatsApp = () => {
  return (
    <WrapperWhatsapp href="https://wa.me/message/XKQCUMUPJWQGI1" target="blank">
      <IconWhatsApp />
    </WrapperWhatsapp>
  );
};

export default WhatsApp;

const Pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const WrapperWhatsapp = styled.a`
  position: fixed;
  top: 100%;
  left: 100%;
  transform: translate(-190%, -160%);
  display: flex;
  border-radius: 50%;
  padding: 1em;
  justify-content: center;
  align-items: center;
  background-color: #00e676;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #00e676;
    animation: ${Pulse} 2s infinite;
    z-index: -1;
  }
  @media (max-width: 1000px) {
    transform: translate(-155%, -145%);
  }
  @media (max-width: 900px) {
    padding: 0.8em;
  }
  @media (max-width: 700px) {
    padding: 0.7em;
    transform: translate(-145%, -135%);
  }
  @media (max-width: 600px) {
    padding: 0.6em;
    transform: translate(-140%, -130%);
  }
  @media (max-width: 500px) {
    padding: 0.5em;
    transform: translate(-135%, -125%);
  }
`;
const IconWhatsApp = styled(MdWhatsapp)`
  color: #ffffff;
  width: 3em;
  height: 3em;
  @media (max-width: 900px) {
    width: 3.8em;
    height: 3.8em;
  }
  @media (max-width: 700px) {
    width: 3.6em;
    height: 3.6em;
  }
  @media (max-width: 600px) {
    width: 3.4em;
    height: 3.4em;
  }
  @media (max-width: 500px) {
    width: 3.2em;
    height: 3.2em;
  }
`;
