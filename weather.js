// input
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const error = document.getElementById('error')
// results
const city = document.getElementById('city')
// tempurature details
const tempDetail = document.getElementById('tempdetail')
const temp = document.getElementById('temp')
const feelsLike = document.getElementById('feelslike')
const mintemp = document.getElementById('mintemp')

// default city
let searchCity = 'kolkata';

// manual search result
const manualSearch = () => {
    if (input.value != "") {
        searchCity = input.value;
        main()
    }
}
document.addEventListener('keydown', (key) => {
    if (key.key == 'Enter') manualSearch();
})

// main function
const main = () => {
    let data;
    fetch(`http://api.weatherstack.com/current?access_key=9e1c75b9ab20a418381c6570d2518c71&query=${searchCity}`)
        .then(response => response.json())
        .then(response => {
            error.style.display = 'none'
            setdata(response)
        })
        .catch(err => {
            error.style.display = 'block'
        });

};
main();

// add data to DOM
const setdata = (data) => {
    city.innerText = data.request.query;
    tempDetail.innerHTML = `<img id="tempimg" src="${data.current.weather_icons[0]}" alt="">${data.current.weather_descriptions[0]}`;
    temp.innerText = `Temp: ${data.current.temperature}°c`;
    feelsLike.innerText = `Feels like: ${data.current.feelslike}°c`;
    mintemp.innerText = `Humidity: ${data.current.humidity}%`
}

