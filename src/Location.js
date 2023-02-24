import React from "react";
import Card from "react-bootstrap/Card";
import Weather from "./Weather.js";
import Movies from "./Movies.js";

class Location extends React.Component{

    render() {
        return (
            <div className="locationDisplay">
                <div>
                    <Card style={{ width: '500px' }}>
                        <Card.Title as="h2" > {this.props.state.city}</Card.Title>
                        <Card.Img src={this.props.state.mapImage}
                            alt={this.props.state.city}
                            height={500}
                            width={500} />
                        <Card.Text> Lat: {this.props.state.cityData.lat}</Card.Text>
                        <Card.Text> Lon: {this.props.state.cityData.lon}</Card.Text>

                        {this.props.state.weatherData.length > 0 &&
                            <Weather weatherData={this.props.state.weatherData} />
                        }
                    </Card>
                </div>

                {this.props.state.moviesData.length > 0 &&
                    <Movies moviesData={this.props.state.moviesData} />
                }

            </div>
        )
    };
}

export default Location;