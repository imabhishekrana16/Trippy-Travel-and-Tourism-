import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../component/Footer";
import ContactForms from "../component/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
      cNme="hero-mid"
      heroImg={AboutImg} 
      title="Contact"
      text="Choose Your Favourite Destination."
      
      btnClass="hide" 
      />
      <ContactForms/>
      <Footer />
    </>
  );
}

export default Contact;
