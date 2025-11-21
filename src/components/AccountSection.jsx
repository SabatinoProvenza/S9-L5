import MyNavbar from "./MyNavbar"
import MyFooter from "./MyFooter"

const AccountSection = () => {
  return (
    <section className="bg-light text-secondary ">
      <MyNavbar />
      <main className="container py-5">
        <h3 className="mb-4 fw-semibold">Account</h3>
        <hr />

        {/* MEMBERSHIP & BILLING */}
        <div className="row gy-3 py-3 align-items-start">
          <div className="col-12 col-md-4 text-uppercase small text-secondary fw-semibold">
            Membership & Billing
            <button className="btn bg-dark text-light border-0 small mt-2 d-block">
              Cancel Membership
            </button>
          </div>

          <div className="col-12 col-md-4 small">
            <p className="fw-semibold mb-1">student@strive.school</p>
            <p className="text-secondary mb-1">Password: ********</p>
            <p className="text-secondary mb-0">Phone: 321 044 1279</p>
          </div>

          <div className="col-12 col-md-4 small text-md-end">
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Change account email
            </a>
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Change password
            </a>
            <a
              href="#"
              className="d-block mb-0 text-primary text-decoration-none"
            >
              Change phone number
            </a>
          </div>
        </div>

        <hr className="col-12 col-md-8 ms-md-auto my-2" />

        <div className="row gy-3">
          <div className="col-12 col-md-4 offset-md-4 small d-flex align-items-center">
            <span>
              <i className="bi bi-paypal"></i> PayPal
            </span>
            <span className="fw-semibold ms-2">admin@strive.school</span>
          </div>

          <div className="col-12 col-md-4 small text-md-end">
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Update payment info
            </a>
            <a
              href="#"
              className="d-block mb-3 text-primary text-decoration-none"
            >
              Billing details
            </a>
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Redeem gift card or promo code
            </a>
            <a href="#" className="d-block text-primary text-decoration-none">
              Where to buy gift cards
            </a>
          </div>
        </div>

        <hr className="col-12 col-md-8 ms-md-auto my-2" />

        {/* PLAN DETAILS */}
        <div className="row py-3 gy-3">
          <div className="col-12 col-md-4 text-uppercase small text-secondary fw-semibold">
            Plan Details
          </div>

          <div className="col-12 col-md-4 small fw-semibold">
            Premium{" "}
            <span className="badge bg-light text-dark border">ULTRA HD</span>
          </div>

          <div className="col-12 col-md-4 small text-md-end">
            <a href="#" className="text-primary text-decoration-none">
              Change plan
            </a>
          </div>
        </div>

        <hr />

        {/* SETTINGS */}
        <div className="row py-3 gy-3">
          <div className="col-12 col-md-4 text-uppercase small text-secondary fw-semibold">
            Settings
          </div>

          <div className="col-12 col-md-4 small">
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Parental controls
            </a>
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Test participation
            </a>
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Manage download devices
            </a>
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Activate a device
            </a>
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Recent device streaming activity
            </a>
            <a href="#" className="d-block text-primary text-decoration-none">
              Sign out of all devices
            </a>
          </div>
        </div>

        <hr />

        {/* MY PROFILE */}
        <div className="row py-3 gy-3 align-items-center">
          <div className="col-12 col-md-4 text-uppercase small text-secondary fw-semibold">
            My Profile
          </div>

          <div className="col-12 col-md-4 small d-flex align-items-center">
            <img
              src="public/avatar.png"
              width="45"
              className="me-2"
              alt="avatar"
            />
            <span className="fw-semibold">Strive Student</span>
          </div>

          <div className="col-12 col-md-4 small text-md-end">
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Manage profiles
            </a>
            <a href="#" className="d-block text-primary text-decoration-none">
              Add profile email
            </a>
          </div>

          <div className="col-12 col-md-4 offset-md-4 small">
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Language
            </a>
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Playback settings
            </a>
            <a href="#" className="d-block text-primary text-decoration-none">
              Subtitle appearance
            </a>
          </div>

          <div className="col-12 col-md-4 small text-md-end">
            <a
              href="#"
              className="d-block mb-1 text-primary text-decoration-none"
            >
              Viewing activity
            </a>
            <a href="#" className="d-block text-primary text-decoration-none">
              Ratings
            </a>
          </div>
        </div>
        <MyFooter />
      </main>
    </section>
  )
}

export default AccountSection
