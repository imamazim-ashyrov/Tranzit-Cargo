import { useRef } from "react";
import Header from "../layouts/Header";
import Main from "../layouts/Main";
import AboutCompany from "../pages/AboutCompany";
import Footer from "../pages/Contacts";
import FAQ from "../pages/faq/FAQ";
import Services from "../pages/servisec/Services";
import WhatsApp from "../../UI/WhatsApp";

const Index = () => {
  const mainRef = useRef(null);
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const faqRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <>
      <Header
        ref={mainRef}
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        faqRef={faqRef}
        contactsRef={contactsRef}
      />
      <Main />
      <AboutCompany ref={aboutUsRef} />
      <Services ref={servicesRef} />
      <FAQ ref={faqRef} />
      <Footer ref={contactsRef} />
      <WhatsApp />
    </>
  );
};

export default Index;
