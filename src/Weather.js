import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <ul class = "list-group">
                {this.props.weatherData.map(day => 
                <WeatherDay key={day.date} date={day.date} description={day.description}/>
                )}
            </ul>
        )
    }
}

class WeatherDay extends React.Component{
    render(){
        return(
            <li class="list-group-item"> Date: {this.props.date}, Description: {this.props.description}</li>
        )
    }
}

export default Weather;