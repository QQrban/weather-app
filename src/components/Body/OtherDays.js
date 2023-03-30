import './Otherdays.scss';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const OtherDays = ({ futureDate }) => {
    return (
        <div className="display-future">
            {futureDate?.length ? (
                futureDate.map((date, i) => (
                    <Item
                        key={i}
                        className="future-day"
                        sx={{
                            mt: '20px',
                            bgcolor: 'hsla(0, 0%, 100%, 0.364)',
                            color: 'black',
                            padding: '15px 30px',
                            borderRadius: '19px',
                            width: '150px',
                            height: '150px',
                        }}
                    >
                        <div className="day">{date.day}</div>
                        <img src={date.icon} alt="weather" />
                        <div className="temp">{date.currTemperature} &#8451;</div>
                    </Item>
                ))
            ) : (
                <div>Yo</div>
            )}
        </div>
    );
};

export default OtherDays;
