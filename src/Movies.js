import {Component} from "react";
import Card from 'react-bootstrap/Card';

class Movies extends Component {
    render() {
        return (
            <section>
                <h2>Movies!</h2>
                {this.props.moviesData.map((element, idx) =>
                    <Movie key={idx} movieData={element} />
                )}
            </section>
        );
    }
}

class Movie extends Component{
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.movieData.poster_url} />
                <Card.Body>
                    <Card.Title>{this.props.movieData.title}</Card.Title>
                    <Card.Text>
                        {this.props.movieData.overview}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Movies;