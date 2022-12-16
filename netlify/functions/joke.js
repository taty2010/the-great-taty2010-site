// Jokes provided from the lovely folks at https://icanhazdadjoke.com
import jokes from './jokes.json';
import fetch from 'node-fetch';

export const handler = async (event) => {
    // Generates a random index based on the length of the jokes array
    const res = await fetch('https://api.tvmaze.com/shows/169', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
    
    // Netlify Functions need to return an object with a statusCode
    // Other properties such as headers or body can also be included.
    return {
        statusCode: 200,
        body: JSON.stringify(res)
    }
}
