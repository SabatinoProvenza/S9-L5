import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container, Row, Col, Spinner } from "react-bootstrap"

const API_KEY = "6772201a"

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWQzY2Y0YmQ0NzAwMTU4NWIxZDciLCJpYXQiOjE3NjQxNjk1ODksImV4cCI6MTc2NTM3OTE4OX0.4Xglzmq8-hJGUmFr-Kct_J10Mo995ydYDSVX7nNMt8o"

const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${params.movieId}&apikey=${API_KEY}`
        )
        const data = await response.json()

        setMovie(data)
        //  fetch commenti
        const commentsResponse = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )

        const commentsData = await commentsResponse.json()
        setComments(commentsData)
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
    <Container className="text-light py-5">
      <Row className="align-items-start">
        {/* POSTER */}
        <Col md={4}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid rounded shadow"
          />
        </Col>

        {/* DETTAGLI + COMMENTI */}
        <Col md={8}>
          <h1 className="mb-3">{movie.Title}</h1>

          <p>
            <strong>Anno:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genere:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Durata:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Trama:</strong> {movie.Plot}
          </p>

          <hr className="my-4" />

          <h3>Commenti</h3>

          {comments.length === 0 ? (
            <p className="text-secondary">Nessun commento disponibile</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment._id}
                className="bg-secondary bg-opacity-10 p-3 rounded mb-3"
              >
                <p className="mb-1">
                  <strong>{comment.author}</strong>
                </p>
                <p className="mb-1">{comment.comment}</p>
                <small className="text-light">Voto: {comment.rate}/5</small>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
