import MyNavbar from "./MyNavbar"

const EditProfile = () => {
  return (
    <section className="bg-dark text-secondary py-5">
      <MyNavbar />

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <h2 className="text-light">Edit Profile</h2>
            <hr className="border-secondary opacity-50 mt-0" />

            {/* Avatar */}
            <div className="row align-items-start">
              <div className="col-12 col-md-3 text-center text-md-start">
                <img
                  src="public\avatar.png"
                  className="rounded-0 img-thumbnail p-0"
                  alt="profile"
                  width="100"
                  height="100"
                />
              </div>

              <div className="col-12 col-md-9 mt-3 mt-md-0">
                {/* Name */}
                <input
                  type="text"
                  className="form-control bg-secondary text-light border-0 mb-3"
                />

                {/* Language */}
                <label className="text-secondary small">Language:</label>
                <select className="form-select bg-black text-light border-secondary w-auto mb-4">
                  <option>English</option>
                  <option>Italiano</option>
                  <option>Spanish</option>
                </select>

                <hr className="border-secondary opacity-50" />

                {/* Maturity Settings */}
                <p className="small text-secondary my-2">Maturity Settings:</p>
                <button className="btn bg-secondary text-light fw-semibold border-secondary mb-2 rounded-0">
                  ALL MATURITY RATINGS
                </button>

                <p className="small text-light">
                  Show titles for <strong>all maturity levels</strong> for this
                  profile.
                </p>

                <button className="btn btn-outline-secondary small px-4 py-1 rounded-0">
                  EDIT
                </button>

                <hr className="border-secondary opacity-50" />

                {/* Autoplay */}
                <p className="fw-semibold mt-3 text-light">Autoplay controls</p>

                <div className="form-check mt-0">
                  <input
                    className="form-check-input bg-dark border-secondary rounded-0"
                    type="checkbox"
                    defaultChecked
                  />
                  <label className="form-check-label text-light small ms-1">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>

                <div className="form-check mt-2 mb-4">
                  <input
                    className="form-check-input bg-dark border-secondary rounded-0"
                    type="checkbox"
                    defaultChecked
                  />
                  <label className="form-check-label text-light small ms-1">
                    Autoplay previews while browsing on all devices.
                  </label>
                </div>
              </div>
            </div>

            <hr className="border-secondary opacity-50 w-100" />

            {/* Buttons */}
            <div className="d-flex flex-column flex-md-row gap-3 mt-4 w-100">
              <button className="btn btn-light text-dark fw-semibold px-4 rounded-0">
                SAVE
              </button>
              <button className="btn btn-outline-secondary fw-semibold px-4 rounded-0">
                CANCEL
              </button>
              <button className="btn btn-outline-secondary fw-semibold px-4 rounded-0">
                DELETE PROFILE
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default EditProfile
