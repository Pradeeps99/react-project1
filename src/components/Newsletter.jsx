function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h3>Sign up to our newsletter</h3>
          <h2>& get a 10% off voucher</h2>
        </div>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter Your Email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
