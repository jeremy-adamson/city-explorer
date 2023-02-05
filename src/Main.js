import React from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import Location from "./Location.js";

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfo: false,
            city: '',
            cityData: {},
            mapImage: '',
            restaurantData: [],
            locationData: [],
            weatherData: []
        }
    }

    processSearchInput = event => {
        let cityName = event.target.value;
        this.setState({
            city: cityName
        },
        )
    }

    getWeather = async () => {
        try {
            const url = `http://localhost:3001/weather/?city=${this.state.city}`;
            const response = await axios.get(url);
            this.setState({
                weatherData: response.data
            });
        }
        catch (error) {
            console.log(error)
        }
    }

    displaySearch = async (event) => {
        event.preventDefault();

        let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ}&q=${this.state.city}&format=json`;
            
        try {
            let response = await axios.get(url);
            let urlMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ}&center=${response.data[0].lat},${response.data[0].lon}&zoom=15`

            await this.getWeather();

            this.setState({
                displayInfo: true,
                cityData: response.data[0],
                mapImage: urlMap
            })

        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter City</Form.Label>
                            <Form.Control type="text" onInput={this.processSearchInput} />
                        </Form.Group>
                        <Button onClick={this.displaySearch}>Explore!</Button>
                    </Form>
                </Container>

                {this.state.displayInfo &&
                    <>
                        <Location state={this.state} />
                    </>
                }



            </>
        )
    }
}

export default Main;