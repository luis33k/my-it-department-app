import data from "../../assessts/index.json";

export default function Programs() {
  return (
    <section className="programs-section" id="Programs">
      <div className="portfolio-container">
        <p className="section-title">IT Bachelors & Associates of Applied Science</p>
        <h2 className="programs-section-heading">Our Programs</h2>
      </div>
      <div className="programs-section-container">
        {data?.programs?.map((item, index) => (
          <div key={index} className="programs-section-card">
            <div className="programs-section-img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="programs-section-card-content">
              <h3 className="programs-section-title">{item.title}</h3>
              <p className="programs-section-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}