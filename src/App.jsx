import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyNavbar from "./components/MyNavbar"
import Header from "./components/Header"
import MoviesCarousel from "./components/MoviesCarousel"
import MyFooter from "./components/MyFooter"
import EditProfile from "./components/EditProfile"
import AccountSection from "./components/AccountSection"
import TVShows from "./components/TVShows"
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MoviesCarousel title="Film sugli Avengers" query="avengers" />
              <MoviesCarousel title="Film su Batman" query="batman" />
              <MoviesCarousel
                title="Film su Harry Potter"
                query="harry potter"
              />
            </>
          }
        />

        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>

      <MyFooter />
    </BrowserRouter>
  )
}

export default App
