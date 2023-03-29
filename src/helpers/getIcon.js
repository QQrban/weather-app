
export const getIcon = (main) => {
    let weather = main.toLowerCase();
    let icon = '';
    const icons = {
        clouds: 'https://i.ibb.co/SNTjRm0/cloudy.png',
        clear: 'https://i.ibb.co/1s46vkS/sunny.png',
        snow: 'https://i.ibb.co/6N20Gsx/snowy.png',
        mist: 'https://i.ibb.co/qyJGVQJ/mist.png',
        drizzle: 'https://i.ibb.co/yXszmSx/rainy.png',
        rain: 'https://i.ibb.co/yXszmSx/rainy.png',
        thunderstorm: 'https://i.ibb.co/bXnKFc8/storm.png',
    }
    for (const key in icons) {
        if (weather === key) {
            return icon = icons[key];
        } else {
            icon = 'mist';
        }
    }
    return icon;
}







