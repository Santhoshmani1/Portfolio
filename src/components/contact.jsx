/* eslint-disable no-undef */
const Contact = () => {
  return (
    <>
      <div id="contact-container">
        <h2>Contact</h2>
        <form action="post" id="contact-form">
          <div className="form-group">
            <input type="hidden" name="contact_number" />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="from_name"
              placeholder="Enter your name"
              required
              minLength={5}
              autoComplete="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="from_email"
              placeholder="enter Email address"
              minLength={10}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              minLength={10}
              rows="10"
              cols="40"
            ></textarea>
          </div>
          <div className="button-container">
            <button
              type="submit"
              className="btn primary-btn"
              value="Send"
              onClick={sendMail}
            >
              Submit
            </button>
          </div>{" "}
        </form>
      </div>
    </>
  );
};

(function () {
  emailjs.init("0jOAbCBLw9Ymv5HK8");
})();

function sendMail() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs
        .sendForm("service_portfolio_sandev", "template_f6l14fj", this)
        .then(
          function () {
            alert("success");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
}
export default Contact;
