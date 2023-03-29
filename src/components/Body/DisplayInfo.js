import './DisplayInfo.scss';

import sunny from '../../assets/icons/sunny.svg';
import { ImArrowUp, ImArrowDown, ImDroplet } from 'react-icons/im';
import { TbWind, TbGauge } from 'react-icons/tb';

const DisplayInfo = () => {
    return (
        <div className="display-wrapper">
            <div className="display-primary-info">
                <div className="display-icon">
                    <img src={sunny} alt="sunny" />
                    <p>clear sky</p>
                </div>
                <div className="display-temperature">36&#8451;</div>
            </div>
            <div className="display-secondary-info">
                <div className="info-minmax">
                    <div className="info-feels">Feels like 10 &#8451;</div>
                    <div className="info-minmax-temp">
                        <div className="min min-max">
                            <ImArrowUp />
                            <p>8 &#8451;</p>
                        </div>
                        <div className="max min-max">
                            <ImArrowDown />
                            <p>1 &#8451;</p>
                        </div>
                    </div>
                </div>
                <div className="info-additional">
                    <div className="additional-item">
                        <ImDroplet />
                        <p className='additional-item-name'>Humidity </p>
                        <p className='additional-item-numbers'>23% </p>
                    </div>
                    <div className="additional-item">
                        <TbWind />
                        <p className='additional-item-name'>Wind </p>
                        <p className='additional-item-numbers'>9km/h </p>
                    </div>
                    <div className="additional-item">
                        <TbGauge />
                        <p className='additional-item-name'>Pressure </p>
                        <p className='additional-item-numbers'>1012 </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DisplayInfo;