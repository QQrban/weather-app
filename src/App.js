import { Container } from '@mui/system';
import './App.scss';
import Body from './components/Body/Body';
import Header from './components/Header/Header';


function App() {
    return (
        <div className="App">
            <Header />
            <Container>
                <Body />
            </Container>
        </div>
    );
}

export default App;
