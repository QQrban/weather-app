import './Body.scss';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import DisplayInfo from './DisplayInfo';
import OtherDays from './OtherDays';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };


const Body = () => {

    return (
        <main className='display'>
            <input type="text" className='display-search' />
            <Item sx={{
                mt: '20px',
                bgcolor: 'hsla(0, 0%, 100%, 0.364)',
                color: 'black',
                padding: '30px 50px',
                borderRadius: '19px'
            }}>
                <div className="display-header">
                    <h1>Current Weather</h1>
                    <p>29.03.2023</p>
                </div>
                <h3 className='display-city'>Tallinn</h3>
                <DisplayInfo />
            </Item>
            <OtherDays />
        </main>
    )
}

export default Body;