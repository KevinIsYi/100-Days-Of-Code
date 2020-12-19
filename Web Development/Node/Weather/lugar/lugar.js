const axios = require('axios');

const getLugar = async ({ direccion }) => {
    const key = '6e2da1554fb38c75b246eaa0ec5972c2';
    const encodedUrl = encodeURI(direccion);
    
    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${ encodedUrl }&appid=${ key }`,
        headers: { 'x-rapidapi-key': '0c7218db81mshd02bdceba0b5483p132502jsn10baff1c3613' }
    });
    
    const res = await instance.get();

    if (res.statusText === 'OK') {
        const { data:{ coord:{ lon, lat } } } = res;

        return {
            lon,
            lat
        }
    }
}

const getTemperatura = async ({ lon, lat }) => {
    const key = '6e2da1554fb38c75b246eaa0ec5972c2';
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ key }&units=metric`);
    if (res.statusText === 'OK') {
        const { data } = res;
        const { main, weather } = data;

        const description = weather[0].description;
        const { temp, feels_like, temp_min, temp_max, humidity } = main;
        
        return {
            description,
            temp, 
            feels_like,
            temp_min,
            temp_max,
            humidity
        }
    }
}

module.exports = {
    getLugar,
    getTemperatura
};
