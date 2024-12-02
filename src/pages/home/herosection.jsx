export default function HeroSection(){
    return (
        <section id = "Home" className= "hero-section">
            <div className="hero-section-content-box">
                <div className="hero-section-content">
                    <p className="section-title">Welcome!</p>
                    <h1 className="hero-section-title">
                        <span className="hero-section-title-color">
                        IT & Engineering Department
                        </span>{""}
                        <br />
                        <br />
                        Learn As you Go!
                    </h1>
                    <p className="hero-section-description">
                        Our program prepares you for the workforce or further studies. 
                        <br />
                        Helping you succeed in today's tech-driven world.
                        <br />
                        Get in touch with our program advisors today!
                    </p>
                    <p className="hero-section-description2">
                        Computer Information Technology, Data Analytics & AI, and Software Development.
                        <br />
                        (computer-science@broward.edu)
                        <br /> +1 954-201-6723
                    </p>
                </div>
                <button className="btn btn-primary">Apply Now</button>
            </div>
            <div className="hero-section-img">
                <img src="./imgs/hero-img.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}