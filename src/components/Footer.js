import React from "react"

export default () => (
  <div className="footer">
    <div className="footer__links">
      <a
        href="https://github.com/sparkyyc"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <i className="footer__links-icon icon fab fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/christa-sparks/"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <i className="footer__links-icon icon fab fa-linkedin-in" />
      </a>
      <a href="mailto:christa.sparks.k@gmail.com" className="link">
        <i className="footer__links-icon icon far fa-envelope" />
      </a>
    </div>
    <div className="footer__resume"><a href="https://drive.google.com/open?id=14YU6JldF_TyHgnxtsmnvzh5nWb2y7qWANQOR8AdLHeM" className="footer__resume-link">Checkout my resume<i className="footer__resume-icon icon far fa-file"></i></a></div>
    <div className="footer__copy">Copyright &copy; by Christa Sparks.</div>
  </div>
)
