import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-wrap">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <div className="address">
          <i className="bi bi-geo-alt"></i>
          <p>1B St Bottles Street, Bar Beach Avenue</p>
        </div>
        <div>
          <i className="bi bi-telephone"></i>
          <a href="tel:+2348063300569">+234 (0) 806 330 0569</a>
        </div>
        <div>
          <i className="bi bi-envelope"></i>
          <a href="mailto:mail@test.com">mail@test.com</a>
        </div>
      </div>
      <div className="form-wrap">
        <h1>Get in Touch</h1>
        <p className="copy">Got a special request or need some information? Reach out to us and we’ll respond as soon as possible</p>
        <form action="">
          <div>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <input type="email" placeholder="Your email" name="" id="" />
          </div>
          <div>
            <input type="tel" placeholder="Your phone number" name="" id="" />
          </div>
          <div>
            <textarea name="" id="" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
