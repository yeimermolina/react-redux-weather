import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat} = cityData.city.coord;
    
    return (
      <tr key={name} >
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td> <Chart data={temps} color="red" units="K"/> </td>
        <td> <Chart data={pressures} color="green" units="hPa" /> </td>
        <td> <Chart data={humidity} color="blue" units="%"/> </td>
      </tr>
    );
  }
  
  render(){
    console.log(this.props)
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody styleName="vertical-align: bottom;">
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