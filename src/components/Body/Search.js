import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = ({ setTown }) => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const onEnter = (e) => {
        if (e.key === 'Enter' && message !== '') {
            return setTown(message);
        }
    };

    const handleClick = () => {
        if (message === '') return;
        setTown(message);
        setMessage('');
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="display-search"
                placeholder="Search for a city"
                value={message}
                onChange={handleChange}
                onKeyDown={onEnter}
            />
            <BsSearch onClick={handleClick} className="search-ico" size={35} />
        </div>
    );
};

export default Search;
