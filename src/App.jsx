import "./App.css"

import MyNavbar from "./components/MyNavbar"
import Header from "./components/Header"
import MoviesCarousel from "./components/MoviesCarousel"

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <MoviesCarousel title="Film sugli Avengers" query="avengers" />
      <MoviesCarousel title="Film su Batman" query="batman" />
      <MoviesCarousel title="Film su Harry Potter" query="harry potter" />
    </>
  )
}

export default App
