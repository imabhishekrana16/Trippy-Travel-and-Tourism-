import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../component/Footer";
import Trip from "../component/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
      cNme="hero-mid"
      heroImg={AboutImg} 
      title="Service"
      text="Choose Your Favourite Destination."
      
      btnClass="hide" 
      />
      <Trip/>
<Footer/>
    </>
  );
}

export default Service;
