

export async function fetchData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/?q=${city},&appid=f834b47452647c8005b567596ef7f942&units=metric`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.log(err);
    }

}