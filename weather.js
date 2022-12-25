// input
const input = document.getElementById('input')
const btn = document.getElementById('btn')
const error = document.getElementById('error')
// results
const city = document.getElementById('city')
// tempurature details
const tempDetail = document.getElementById('tempdetail')
const temp = document.getElementById('temp')
const maxtemp = document.getElementById('maxtemp')
const mintemp = document.getElementById('mintemp')
const feelsLike = document.getElementById('feelslike')
const humidity = document.getElementById('humidity')

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
const accessKey = 'a8e71c9932b20c4ceb0aed183e6a83bb'
const url = `https://api.openweathermap.org/data/2.5/weather?q=`

const main = () => {
    fetch(`${url}${searchCity}&appid=${accessKey}&units=metric`)
        .then(response => response.json())
        .then(response => {
            error.style.display = 'none'
            setdata(response)
        })
        .catch(err => {
            error.style.display = 'block'
            console.log(err);
        });
};
main();

// add data to DOM
const setdata = (data) => {
    // city
    city.innerText = `${data.name}, ${data.sys.country}`
    // temperature details
    tempDetail.innerHTML = `${data.weather[0].description}`;
    temp.innerText = `Temp: ${data.main.temp}°c`;
    maxtemp.innerText = `Max-Temp: ${data.main.temp_max}°c`;
    mintemp.innerText = `Min-Temp: ${data.main.temp_min}°c`;
    feelsLike.innerText = `Feels like: ${data.main.feels_like}°c`;
    // humidity
    humidity.innerText = `Humidity: ${data.main.humidity}%`
}
