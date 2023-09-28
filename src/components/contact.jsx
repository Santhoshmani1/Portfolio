
const Contact = () => {
  return (
    <>
    <div id="contact-container">
      <h2>Contact</h2>
      <form action="post" id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" required minLength={5} autoComplete="true"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="enter Email address" minLength={10}required/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" minLength={10}  rows="10" cols="40"></textarea>
        </div>
        <button type="submit" className="btn primary-btn">Submit</button>
      </form>
      
    </div>
    </>
  )
}

export default Contact