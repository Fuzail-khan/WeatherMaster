import React, { useEffect } from 'react'

const Weathercard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = React.useState("");

    const {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("wi-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-fog");
                    break;
                case "Thunderstorm":
                    setWeatherState("wi-thunderstorm");
                    break;
                case "Drizzle":
                    setWeatherState("wi-sprinkle");
                    break;
                case "Rain":
                    setWeatherState("wi-raindrops");
                    break;
                case "Snow":
                    setWeatherState("wi-snow");
                    break;
                case "Dust":
                    setWeatherState("wi-dust");
                    break;
                case "Tornado":
                    setWeatherState("wi-tornado");
                    break;
                    case "Smoke":
                    setWeatherState("wi-smoke");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood])

    // convert time from seconds
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}`;

    return (
        <>
            <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
            </div>
            <div className="tempTime">
                <div className="temp">
                    <span>{temp}&#8451;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">{name}, {country}</div>
                </div>
                <div className="time">
                    <div className="date">{new Date().toLocaleString()}</div>
                </div>
            </div>
            {/* Bottom 4 columns */}
            <div className="otherdetails">
                <div className="sunset">
                    <p><i className={"wi wi-sunset"}></i></p>
                    <p className="sunsetInfo btmInfo">Sunset <br /> {timeStr} PM</p>
                </div>
                <div className="humidity">
                    <p><i className={"wi wi-humidity"}></i></p>
                    <p className="humidityInfo btmInfo">Humidity <br /> {humidity}</p>
                </div>
                <div className="pressure">
                    <p><i className={"wi wi-barometer"}></i></p>
                    <p className="pressureInfo btmInfo">Pressure <br /> {pressure} MM</p>
                </div>
                <div className="wind">
                    <p><i className={"wi wi-strong-wind"}></i></p>
                    <p className="windInfo btmInfo">Wind <br /> {speed}</p>
                </div>
            </div>
        </>
    )
}

export default Weathercard
