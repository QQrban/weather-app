import './Header.scss';
import { Container } from '@mui/system';
import { TiWeatherStormy } from 'react-icons/ti';
import { BsGithub } from 'react-icons/bs'

const Header = () => {

    return (
        <header className='header'>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <div className="header-logo">
                    <h1>ReactWeather</h1>
                    <TiWeatherStormy size={60} />
                </div>
                <div onClick={() => window.open('https://github.com/QQrban')} className="header-link">
                    <BsGithub size={60} />
                </div>
            </Container>
        </header>
    )
}

export default Header;