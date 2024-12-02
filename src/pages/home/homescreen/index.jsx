import HeroSection from "../herosection"
import Programs from "../programs";
import About from "../about";
import Faculty from "../faculty";
import Contact from "../contact";
import Footer from "../footer";

export default function Home(){
    return  (     
        <>
            <HeroSection />
            <About />
            <Programs />
            <Faculty />
            <Contact />
            <Footer />
        </>
     );

}