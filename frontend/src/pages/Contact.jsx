export default function Contact() {
  return (
    <>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form>
                  <fieldset>
                    <input type="text" placeholder="Enter your full name" required />
                    <input type="email" placeholder="Enter your email address" required />
                    <input type="text" placeholder="Enter subject" required />
                    <textarea placeholder="Enter your message" required></textarea>
                    <input type="submit" value="Submit" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
