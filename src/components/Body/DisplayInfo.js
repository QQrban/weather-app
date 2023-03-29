import { useEffect } from 'react';
import './DisplayInfo.scss';
import { ImArrowUp, ImArrowDown, ImDroplet } from 'react-icons/im';
import { TbWind, TbGauge } from 'react-icons/tb';

const DisplayInfo = ({ today }) => {





    useEffect(() => {
        const bg = {
            clouds: 'cloudy',
            clear: 'sunny',
            snow: 'snowy',
            mist: 'mist',
            drizzle: 'rainy',
            rain: 'rainy',
            thunderstorm: 'rainy',
        }

        if (today.length) {
            const body = document.querySelector('body');
            const weather = today[0].weather.main.toLowerCase()
            for (const icon in bg) {
                if (weather === icon) {
                    body.removeAttribute('class');
                    body.classList.add(`bg-${bg[icon]}`);
                }
            }

        }
    }, [today]);

    return (
        <>
            {today?.length ?

                <div className="display-wrapper">
                    <div className="display-primary-info">
                        <div className="display-icon">
                            <img src={today[0].icon} alt="weather" />
                            <p>{today[0].weather.description}</p>
                        </div>
                        <div className="display-temperature">{today[0].temperature.currTemperature}&#8451;</div>
                    </div>
                    <div className="display-secondary-info">
                        <div className="info-minmax">
                            <div className="info-feels">Feels like <span>{today[0].temperature.feelsLike} &#8451;</span></div>
                            <div className="info-minmax-temp">
                                <div className="min min-max">
                                    <ImArrowUp />
                                    <p>{today[0].temperature.maxTemperature} &#8451;</p>
                                </div>
                                <div className="max min-max">
                                    <ImArrowDown />
                                    <p>{today[0].temperature.minTemperature} &#8451;</p>
                                </div>
                            </div>
                        </div>
                        <div className="info-additional">
                            <div className="additional-item">
                                <ImDroplet />
                                <p className='additional-item-name'>Humidity </p>
                                <p className='additional-item-numbers'>{today[0].temperature.humidity} %</p>
                            </div>
                            <div className="additional-item">
                                <TbWind />
                                <p className='additional-item-name'>Wind </p>
                                <p className='additional-item-numbers'>{today[0].temperature.maxTemperature}m/s </p>
                            </div>
                            <div className="additional-item">
                                <TbGauge />
                                <p className='additional-item-name'>Pressure </p>
                                <p className='additional-item-numbers'>{today[0].temperature.pressure}hPa </p>
                            </div>

                        </div>
                    </div>
                </div> : <div>No data</div>}
        </>
    )
}

export default DisplayInfo;