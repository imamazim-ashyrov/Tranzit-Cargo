import { forwardRef } from "react";
import styled from "styled-components";
import Instagram from "../../assets/icons/Vector (1).svg";
import Facebook from "../../assets/icons/Vector (3).svg";
import Whatsap from "../../assets/icons/Vector.svg";
import GoogleMaps from "../map/GoogleMaps";

const Contacts = forwardRef((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Title>
        Приезжайте к нам в офис, и мы поможем
        <br />
        определиться с выбором
      </Title>
      <Container>
        <ContactInformation>
          <span>Контакная информация</span>
          <Contact>
            <span className="firstChild">Время работы:</span>
            <span>Пн-Вс 24/7</span>
          </Contact>
          <Contact>
            <span className="firstChild">Адрес:</span>
            <span>г.Бишкек,ул.Абдырахманова,д.86</span>
          </Contact>
          <Contact>
            <span className="firstChild">Телефон:</span>
            <span>+996 778-116-886</span>
          </Contact>
          <Contact>
            <span className="firstChild">Email:</span>
            <span>tranzit_cargo@gmail.com</span>
          </Contact>
          <Icons>
            <a href="#" aria-label="WhatsApp Link">
              <img src={Whatsap} alt="WhatsApp Icon" />
            </a>
            <a
              href="http://instagram.com/tranzit_cargo"
              aria-label="Instagram Link"
            >
              <img src={Instagram} alt="Instagram Icon" />
            </a>
            <a href="#" aria-label="Facebook Link">
              <img src={Facebook} alt="Facebook Icon" />
            </a>
          </Icons>
        </ContactInformation>
        <GoogleMaps/>
      </Container>
    </Wrapper>
  );
});

export default Contacts;

const Wrapper = styled.footer`
  background: rgba(88, 137, 246, 0.7);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2em;
`;

const Title = styled.p`
padding: 0 3em 0 3em;
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  @media (max-width: 650px) {
    font-size: 25px;
  }
`;

const ContactInformation = styled.address`
  & span {
    font-size: 25px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    @media (max-width: 650px) {
      font-size: 20px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  max-width: 1200px;
  width: 85%;
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Contact = styled.div`
  margin-top: 0.5em;
  display: flex;
  flex-direction: column;
  & span {
    font-size: 18px;
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
  & .firstChild {
    font-weight: 400;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin-top: 1em;
`;
