const MyFooter = () => {
  return (
    <footer className="container my-5 small">
      {/* Social */}
      <div className="mb-3 text-secondary">
        <i className="bi bi-facebook me-3 fs-3"></i>
        <i className="bi bi-instagram me-3 fs-3"></i>
        <i className="bi bi-twitter me-3 fs-3"></i>
        <i className="bi bi-youtube fs-3"></i>
      </div>

      {/* Links */}
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Audio and Subtitles
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Media Center
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Audio Description
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Cookie Preferences
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="text-secondary text-decoration-none">
                Corporate Information
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Credits */}
      <button className="bg-dark text-secondary py-1 px-2 border border-secondary">
        Service Code
      </button>
    </footer>
  )
}

export default MyFooter
