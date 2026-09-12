export default async function handler(request, response) {
    const city = request.query.city;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    response.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    
    return response.status(fetchResponse.status).json(data);
}