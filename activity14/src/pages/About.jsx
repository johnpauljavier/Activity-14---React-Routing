function About(){
    return(
        <>
        <section id="about" className="container">
        <h2 className="text-center section-title pb-4">About Us</h2>
        <div className="row gx-5">
          <br />
          <div className="col-md-6 aos-init aos-animate" data-aos="fade-up">
            <img src="https://facts.net/wp-content/uploads/2023/07/19-facts-about-samsung-group-1689431532.jpg"
              className="img-fluid rounded"
              alt="Samsung" 
            />
          </div>
          <div className="col-md-6 aos-init aos-animate" data-aos="fade-left">
            <p>
              <strong>Samsung</strong> is committed to complying with local laws and regulations as well as applying a strict global code of conduct to all employees. 
                It believes that ethical management is not only a tool for responding to the rapid changes in the global business environment, 
                but also a vehicle for building trust with its various stakeholders including customers, shareholders, employees, business partners and local communities. 
                With an aim to become one of the most ethical companies In the world, Samsung continues to train its employees and operate monitoring systems, 
                while practicing fair and transparent corporate management.
            </p>
            <p><strong>Our mission & approach</strong>
            <br/>
              Samsung follows a simple business philosophy: to devote its talent and technology to creating superior products and services that contribute to a better global society. 
              To achieve this, Samsung sets a high value on its people and technologies.
            </p>
            <p><strong>The values that define Samsung's spirit</strong>
            <br/>
              Samsung believes that living by strong values is the key to good business. That’s why these core values, along with a rigorous code of conduct, are at the heart of every decision the company makes.
            </p>
          </div>
        </div>
      </section>
        </>
    )
}

export default About;
