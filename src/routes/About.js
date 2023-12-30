import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../component/Footer";
import Aboutus from "../component/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero
      cNme="hero-mid"
      heroImg={AboutImg} 
      title="About"
      text=""
      
      btnClass="hide" 
      />
      <Aboutus/>
      <Footer />
    </>
    
  );
}
export default About;

/*const AboutUs = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${aboutUsBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Set the minimum height to cover the viewport
  };

  return (
    <div className="about-us-container" style={backgroundImageStyle}>
      <div className="about-us-content">
        {/* Your about us content goes here 
        <h1>AboutUs</h1>}
      </div>
    </div>*/