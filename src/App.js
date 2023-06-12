
import './App.css';
import axios from "axios"
import {Component} from "react"
import WeatherDisplay from './Component/WeatherDisplay';


class App extends Component{

  constructor(){
    super();
    this.state = {data: '', temperature: '0', humidity: '0', windSpeed: '0', description: "-"}
  }
    
  getValue = (event) => {
    this.setState({data: event.target.value})
  }

  getData = () => {
    const {data} = this.state
    if(data===''){
      alert("please enter city name in search bar")
    }else{
    document.getElementById("refreshBtn").classList.remove('hide-show')
    document.getElementById("weatherContainer").classList.remove('hide-show')
    document.getElementById("searchValue").value = ""
    const apiKey = "c0d2725ca1673d2fed470e749f6d70ad";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${data}&APPID=${apiKey}`
    axios.get(url).then((response)=>{      
      const desc = response.data.weather.map(each=>{
        return each.description
      })
      this.setState({temperature: response.data.main.temp, description: desc[0], humidity: response.data.main.humidity, windSpeed: response.data.wind.speed})
      
    }).catch((error)=>{
      console.log("error", error)
    })
  }
  }

  refresh = () => {
    this.getData()
  }

  render(){
    const {windSpeed, description, humidity} = this.state
    let {temperature} = this.state
    temperature = Math.round(temperature - 273.15)
    return(
    <div className="main-container">
      <h1 className='main-heading'>Weather App</h1>
      <div className="input-btn-container">
        <input className="inputValue" onChange={this.getValue} placeholder='please enter city name...' id="searchValue"/>
        <button className="search-btn" onClick={this.getData}>Search</button>
      </div>
      <WeatherDisplay temperature={temperature} description={description} humidity={humidity} windSpeed={windSpeed}/>
      <button className='refresh-btn hide-show' id='refreshBtn'  onClick={this.refresh}>Refresh</button>
    </div>
    )
  }
}



export default App;
