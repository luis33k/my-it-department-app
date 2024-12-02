export default function Contact() {
    return (
      <section id="Contact" className="contact-section">
        <div>
          <p className="sub-title">Reach Out</p>
          <h2>Contact Us</h2>
          <p className="text-lg">
           We are excited to hear from you! Please feel free to reach out below.
          </p>
          <br />
          <p className="text-md">
          computer-science@broward.edu
          <br />
          Central Campus: 954-201-6723
          <br />
          North Campus: 954-201-2324
          </p>
          <br />
          <h2>Visit Us</h2>
          <br />
          <p className="text-sm">
          Central Campus, Building 13, 3501 Davie Road, Davie, FL 33314
          <br />
          North Campus, Building 48, 1000 Coconut Creek Blvd., Coconut Creek, FL 33066
          </p>
        </div>
        <form className="contact-form-container">
          <div className="container">
            <label htmlFor="first-name" className="contact-label">
              <span className="text-md">First Name:</span>
              <input
                type="text"
                className="contact-input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact-label">
              <span className="text-md">Last Name:</span>
              <input
                type="text"
                className="contact-input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact-label">
              <span className="text-md">Email:</span>
              <input
                type="email"
                className="contact-input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact-label">
              <span className="text-md">Phone Number:</span>
              <input
                type="number"
                className="contact-input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
          <label htmlFor="choode-topic" className="contact-label">
            <span className="text-md">Choose a reason</span>
            <select id="choose-topic" className="contact-input text-md">
              <option>Select one...</option>
              <option>Broward Advising Appointment</option>
              <option>Tutoring Appointment</option>
              <option>Generel Consulting</option>
            </select>
          </label>
          <label htmlFor="message" className="contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkboc" className="checkbox-label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms & conditions</span>
          </label>
          <div>
            <button className="btn btn-primary contact-form-btn">Submit</button>
          </div>
        </form>
        <div>
 
        </div>
      </section>
    );
  }