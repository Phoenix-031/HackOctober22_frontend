import React from 'react'

const Footer = () => {
  return (
    <>
    <section id="footer">
      <div className="col">
        <div className="col-container">
          <div className="col-text">
            <h4>QBank</h4>
            <h5>Kalyani Government Engineering College</h5>
            <p>
              One and Only of the most prestigious and sucessful club in our
              college
            </p>
            <p>Entrusted By Students & Teachers</p>
            <div className="follow">
              <h4>xyz@gmail.com</h4>
              <h4>Follow Us</h4>
              <div className="icons">
                <a href="/"><i className="fa-brands fa-facebook"></i></a>
                <a href="/"><i className="fa-brands fa-instagram"></i></a>
                <a href="/"><i className="fa-brands fa-twitter"></i></a>
                <a href="/"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col">
        <button className="col-btn">
          <a href="/"> <div className="btn">Support Us</div></a>
        </button>
        <div className="col-heading">
          <a href="../about/about.html"><h4>About Us</h4></a>
          <a href="../courses/courses.html"><h4>Courses</h4></a>

          <a href="./footer.html"><h4>Contact Us</h4></a>
          <a href="/"><h4>Help and Support</h4></a>
        </div>
      </div>
      <div className="line"></div>
    </section>
    <div className="copyright">
      <p className="p1">Designed and Developed by Cold Nerds</p>
      <p className="p2">@copyright 2022</p>
    </div>
    </>
  )
}

export default Footer