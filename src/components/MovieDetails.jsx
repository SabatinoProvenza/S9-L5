import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"

const API_KEY = "6772201a"

const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${params.movieId}&apikey=${API_KEY}`
        )
        const data = await response.json()

        setMovie(data)
        setIsLoading(false)
      } catch (error) {
        console.log("Errore:", error)
      }
    }

    fetchMovie()
  }, [params.movieId])

  if (isLoading)
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark">
        <Spinner animation="border" variant="light" />
      </div>
    )

  return (
    <Container className="text-light text-center py-5">
      <Row>
        <Col>
          <img src={movie.Poster} alt={movie.Title} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{movie.Title}</h1>
          <h3>Anno:</h3> {movie.Year}
          <h3>Genere:</h3> {movie.Genre}
          <h3>Trama:</h3> {movie.Plot}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
