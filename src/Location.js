import React from "react";
import Card from "react-bootstrap/Card";
import Weather from "./Weather.js"

class Location extends React.Component{

    render(){
        console.log(this.props.state)
        return(
            <div className="locationDisplay">
            <Card style={{width: '500px'}}>
                <Card.Title as="h2" > {this.props.state.city}</Card.Title>
                <Card.Img src={this.props.state.mapImage}
                alt={this.props.state.city}
                height={500}
                width={500} />
                <Card.Text> Lat: {this.props.state.cityData.lat}</Card.Text>
                <Card.Text> Lon: {this.props.state.cityData.lon}</Card.Text>
                
                {this.props.state.weatherData.length > 0 &&
                    <Weather weatherData = {this.props.state.weatherData}/>                    
                }
                
                
            </Card>
            </div>
        )
    };
}

export default Location;