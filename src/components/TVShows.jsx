import MoviesCarousel from "../components/MoviesCarousel"

const TVShows = () => {
  return (
    <>
      <div className="bg-dark text-light text-center  mt-4">
        <h1>TV Shows</h1>
        <p>Qui potrai visualizzare le serie TV disponibili.</p>
      </div>

      <MoviesCarousel query="lucifer" />
    </>
  )
}

export default TVShows
