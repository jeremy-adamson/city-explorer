import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <ul class = "list-group">
                {this.props.weatherData.map(day => 
                <li class="list-group-item"> Date: {day.date}, Description: {day.description}</li>)}
            </ul>
        )
    }
}

export default Weather;