export default async function handler(request, response) {
    const city = request.query.city;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    
    return response.status(fetchResponse.status).json(data);
}