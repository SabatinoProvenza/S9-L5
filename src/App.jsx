import "./App.css"

import MyNavbar from "./components/MyNavbar"
import Header from "./components/Header"
import MoviesCarousel from "./components/MoviesCarousel"
import MyFooter from "./components/MyFooter"
import EditProfile from "./components/EditProfile"

function App() {
  return (
    <>
      <MyNavbar />
      <Header />
      <MoviesCarousel title="Film sugli Avengers" query="avengers" />
      <MoviesCarousel title="Film su Batman" query="batman" />
      <MoviesCarousel title="Film su Harry Potter" query="harry potter" />
      <MyFooter />

      <EditProfile />
    </>
  )
}

export default App
