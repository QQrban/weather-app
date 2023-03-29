import './Otherdays.scss'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import sunnyrainy from '../../assets/icons/sunnyrainy.svg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const OtherDays = () => {
    return (
        <div className='display-future'>
            <Item className='future-day' sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.54)',
                color: 'black',
                padding: '15px 30px',
                borderRadius: '19px',
                width: '150px',
                height: '150px',
            }}>
                <div className="day">WED</div>
                <img src={sunnyrainy} alt="" />
                <div className="temp">21 &#8451;</div>
            </Item>
            <Item className='future-day' sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.54)',
                color: 'black',
                padding: '15px 30px',
                borderRadius: '19px',
                width: '150px',
                height: '150px',
            }}>
                <div className="day">WED</div>
                <img src={sunnyrainy} alt="" />
                <div className="temp">21 &#8451;</div>
            </Item>
            <Item className='future-day' sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.54)',
                color: 'black',
                padding: '15px 30px',
                borderRadius: '19px',
                width: '150px',
                height: '150px',
            }}>
                <div className="day">WED</div>
                <img src={sunnyrainy} alt="" />
                <div className="temp">21 &#8451;</div>
            </Item>
            <Item className='future-day' sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.54)',
                color: 'black',
                padding: '15px 30px',
                borderRadius: '19px',
                width: '150px',
                height: '150px',
            }}>
                <div className="day">WED</div>
                <img src={sunnyrainy} alt="" />
                <div className="temp">21 &#8451;</div>
            </Item>
            <Item className='future-day' sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.54)',
                color: 'black',
                padding: '15px 30px',
                borderRadius: '19px',
                width: '150px',
                height: '150px',
            }}>
                <div className="day">WED</div>
                <img src={sunnyrainy} alt="" />
                <div className="temp">21 &#8451;</div>
            </Item>
            <Item className='future-day' sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.54)',
                color: 'black',
                padding: '15px 30px',
                borderRadius: '19px',
                width: '150px',
                height: '150px',
            }}>
                <div className="day">WED</div>
                <img src={sunnyrainy} alt="" />
                <div className="temp">21 &#8451;</div>
            </Item>

        </div>
    )
}

export default OtherDays;