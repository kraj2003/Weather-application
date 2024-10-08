//import "./app.css"
//import axios from "axios"

//console.log('ajghj')
const API_KEY= 'd7e0a1e009da64f86ea345fe22d97042'
let city
//const  city="Tokyo"
//console.log('ghadsbhj')

//console.log(API_URL)
// const getdata= async()=>{
//     const API_URL='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric'
//     const data=await axios.get(API_URL)
//     console.log(data)
    
//     const res=data.data
//     console.log(data.data)
//     const temp=res.main.temp
//     const humidity=res.main.humidity
//     const info=res.weather[0].description
//     const wind_speed=res.wind.speed
//     if(data){
//         const weatherData={
//         temp,
//         humidity,
//         wind_speed,
//         info
//     }
//     return weatherData
//     }
    
// }
function getData() {
        city = document.getElementById("city-name").value
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(API_URL)
            .then(res => res.json())
            .then(apiData => {
                if (apiData.name == undefined) {
                    //alert(`This city is not found :(`)
                    
                }
                else {
                    
                    const res=apiData
                    if(res){
                        const  place = document.getElementById('place')
                        place.innerHTML = `Weather in ${apiData.name}`;
                        const temp=document.getElementById('temp')
                    temp.innerHTML=`${apiData.main.temp}°C`;
                    const windSpeed=document.getElementById('wind-speed')
                    windSpeed.innerHTML=`Wind Speed: ${apiData.wind.speed}km/h`
                    
                    //windSpeed.innerHTML='km/h'
                    console.log(windSpeed)
                    const humidity=document.getElementById('humidity')
                    humidity.innerHTML=`Humidity: ${apiData.main.humidity}%`
                    const info=document.getElementById('info')
                    info.innerHTML=res.weather[0].description

                    const  Icon = document.getElementById('icon')
                    Icon.innerHTML = `<img src="http://openweathermap.org/img/w/${apiData.weather[0].icon}.png"/>`
                    }
                    
                
                }
            })
            .catch("Server has some problem")
    }
getData()



// let city 

// const API_KEY = config.WEATHER_API_KEY 

// //To get the weather data ...
// function getData() {
//     city = document.getElementById("city-name").value
// const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// fetch(API_URL)
//         .then(res => res.json())
//         .then(apiData => {
//             if (apiData.name == undefined) {
//                 alert(`This city is not found :(`)
//             }
//             else {
//                 weather(apiData)
//             }
//         })
//         .catch("Server has some problem")
// }
// //To get the city background image...
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': config.CITY_BACKGROUND_KEY ,
// 		'X-RapidAPI-Host': 'joj-image-search.p.rapidapi.com'
// 	}
// };
// function getImage() {
//     fetch(`https://joj-image-search.p.rapidapi.com/v2/?q=${city}&hl=en`, options)
// 	.then(response => response.json())
//         .then(imageData => {
//             if (city == undefined) {
//                 alert(`This image is not found :(`)
//             }
//             else {
//                 image(imageData);
//             }
//         })
//         .catch(err => console.error(err));
// }

// function image ( imageData) {
//     let image_url = imageData.response.images[0].image.url
//     document.getElementById("cont-bg").style.backgroundImage =`url(${image_url})`;
// }

// function weather(apiData) {
//     let place = document.getElementById('place')
//     place.innerHTML = `Weather in ${apiData.name}`;

//     let temperature = document.getElementById('temp')
//     temperature.innerHTML = `${apiData.main.temp}°C`;

//     let weatherIcon = document.querySelector('.weather-icon')
//     weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/w/${apiData.weather[0].icon}.png"/>`

//     const smallCase = apiData.weather[0].description;
//     const upperCase = smallCase.charAt(0).toUpperCase() + smallCase.slice(1);
//     let info = document.querySelector('.info')
//     info.innerHTML = `${upperCase}`;

//     let cityHumidity = document.getElementById('humidity')
//     cityHumidity.innerHTML = `Humidity: ${apiData.main.humidity}%`;

//     let cityWindSpeed = document.getElementById('wind-speed')
//     cityWindSpeed.innerHTML = `Wind Speed: ${apiData.wind.speed}km/h`;
// }


