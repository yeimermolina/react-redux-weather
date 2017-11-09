import React, {Component} from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component{
  
  renderWeather(cityData){
    return (
      <tr key={city.city.name}>
        <td>
          {cityData.city.name}
        </td>
      </tr>
    )
  }
  
  render(){
    console.log(this.props)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather
  };
}

//Another way to do it with es6
// function mapStateToProps({weather}){
//   return {
//     weather
//   };
// }

export default connect(mapStateToProps)(WeatherList);