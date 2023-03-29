import './Body.scss';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DisplayInfo from './DisplayInfo';
import OtherDays from './OtherDays';
import { fetchData } from '../../services/apiService';
import { getIcon } from '../../helpers/getIcon';
import Search from './Search';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Body = () => {
    const [town, setTown] = useState('Tallinn');
    const [today, setToday] = useState([]);
    const [futureDate, setFutureDate] = useState([]);

    useEffect(() => {

        fetchData(town)
            .then(data => {
                const todayInfo = [];
                const futureInfo = [];
                const itemTemp = data.list[0].main;
                const itemWeather = data.list[0].weather[0];
                const dayOfTheWeek = data.list[0].dt_txt;
                const dates = dayOfTheWeek.split(' ').splice(0, 1).join('');
                for (let i = 8; i < data.list.length; i += 8) {
                    futureInfo.push({
                        currTemperature: Math.round(data.list[i].main.temp),
                        day: moment(data.list[i].dt_txt.split(' ').splice(0, 1).join('')).format('ddd'),
                        icon: getIcon(data.list[i].weather[0].main),
                    });
                    setFutureDate(futureInfo);
                }
                todayInfo.push({
                    temperature: {
                        feelsLike: Math.round(itemTemp.feels_like),
                        maxTemperature: Math.round(itemTemp.temp_max),
                        minTemperature: Math.round(itemTemp.temp_min),
                        currTemperature: Math.round(itemTemp.temp),
                        humidity: itemTemp.humidity,
                        wind: Math.round(data.list[0].wind.speed),
                        pressure: itemTemp.pressure,
                    },
                    country: data.city.country,
                    weather: {
                        main: itemWeather.main,
                        description: itemWeather.description,
                    },
                    day: moment(dates).format('ddd'),
                    icon: getIcon(data.list[0].weather[0].main),
                });
                setToday(todayInfo)
            })
            .catch(err => {
                console.log(err);
            })
    }, [town])

    return (
        <main className='display'>
            <Search setTown={setTown} />
            <Item sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.364)',
                color: 'black',
                padding: '30px 50px',
                borderRadius: '19px'
            }}>
                <div className="display-header">
                    <h1>Current Weather</h1>
                    <p>{moment().format('DD.MM.YYYY')}</p>
                </div>
                <h3 className='display-city'>{town}</h3>
                <DisplayInfo today={today} />
            </Item>
            <OtherDays futureDate={futureDate} />
        </main>
    )
}

export default Body;