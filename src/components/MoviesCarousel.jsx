import { Component } from "react"
import Carousel from "react-bootstrap/Carousel"
import { Container, Row, Col, Spinner } from "react-bootstrap"

const API_KEY = "6772201a"

class TrendingCarousel extends Component {
  state = {
    movies: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${this.props.query}&apikey=${API_KEY}`
      )

      const data = await response.json()

      this.setState({
        movies: (data.Search || []).slice(0, 9),
        isLoading: false,
      })
    } catch (error) {
      console.error("Errore fetch:", error)
      this.setState({ isLoading: false })
    }
  }

  chunkArray = (array, size) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  render() {
    const { movies, isLoading } = this.state

    if (isLoading)
      return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
          <Spinner animation="border" variant="light" />
        </div>
      )

    const validMovies = movies.filter(
      (movie) => movie.Poster && movie.Poster !== "N/A"
    )

    const slides = this.chunkArray(validMovies, 3)

    return (
      <>
        <Container className="px-4 my-4">
          <h3 className="text-light">{this.props.title}</h3>

          <Carousel className=" my-5">
            {slides.map((group, index) => (
              <Carousel.Item key={index}>
                <Row className="g-2">
                  {group.map((movie) => (
                    <Col
                      key={movie.imdbID}
                      xs={12}
                      sm={6}
                      md={4}
                      className={
                        group.indexOf(movie) === 1
                          ? "d-none d-sm-block"
                          : group.indexOf(movie) === 2
                          ? "d-none d-md-block"
                          : ""
                      }
                    >
                      <img
                        src={movie.Poster}
                        className="d-block w-100 rounded"
                        alt={movie.Title}
                        style={{ height: "18rem", objectFit: "cover" }}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </>
    )
  }
}

export default TrendingCarousel
