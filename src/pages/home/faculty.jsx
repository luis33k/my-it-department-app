import data from "../../assessts/index.json";

export default function Faculty() {
  return (
    <section className="faculty-section" id="Faculty">
      <div className="faculty-container-box">
        <div className="faculty-container">
          <p className="sub-title">Academic</p>
          <h2 className="section-heading">Faculty & Advisors</h2>
        </div>
        <div>
          <button className="btn btn-advisor">
            Schedule Advising Appointment
          </button>
        </div>
      </div>
      <div className="faculty-section-container">
        {data?.faculty?.map((item, index) => (
          <div key={index} className="faculty-section-card">
            <div className="faculty-section-card-content">
              <div>
                <h3 className="faculty-section-title">{item.name}</h3>
                <p className="text-sm">{item.title}</p>
                <p className="text-md">{item.email}</p>
                <p className="text-md">{item.phone}</p>
                <p className="text-md">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}