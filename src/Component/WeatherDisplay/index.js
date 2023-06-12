
import './index.css'

const WeatherDisplay = (props) => {
    const {temperature, humidity, windSpeed, description} = props
    return (
    <div className="weather-container hide-show" id='weatherContainer'>
        <div className='weather-sub-container'>
          <p className='result-topic'>Temperature</p>
          <p className='result-sub-container'>{temperature}<span> ° Celcius</span></p>
        </div>
        <div className='weather-sub-container'>
          <p className='result-topic'>Weather description</p>
          <p className='result-sub-container'>{description}</p>
        </div>
        <div className='weather-sub-container'>
          <p className='result-topic'>Humidity</p>
          <p className='result-sub-container'>{humidity}<span>  km/hr</span></p>
        </div>
        <div className='weather-sub-container'>
          <p className='result-topic'>Wind Speed</p>
          <p className='result-sub-container'>{windSpeed}<span>  km/hr</span></p>
        </div>
      </div>
    )
}

export default WeatherDisplay