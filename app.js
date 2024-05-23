document.addEventListener('DOMContentLoaded', () => {
    const apodContainer = document.getElementById('apod-container');

    const API_KEY = 'kCDyc5p60T0mtzhr5B3ypMd9kdOcDQY1SB7atxXf'

    fetchAPOD();

    async function fetchAPOD() {
        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
            const data = await response.json();
            displayAPOD(data);
        } catch (error) {
            console.error('Error fetching APOD:', error);
            apodContainer.innerHTML = '<p>Error fetching APOD. Please try again later.</p>';
        }
    }

    function displayAPOD(apod) {
        apodContainer.innerHTML = `
            <h2>${apod.title}</h2>
            <img src="${apod.url}" alt="${apod.title}">
            <p>${apod.explanation}</p>
        `;
    }
});
