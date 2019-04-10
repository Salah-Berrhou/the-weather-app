
const request = new XMLHttpRequest()

let city = ''

document.querySelector('#cityName').addEventListener('input', (e) => {
    city = e.target.value
    getWeather(city)
})

let getWeather = function(city) {
    fetch(`https://api.apixu.com/v1/forecast.json?key=16394afabc39402891f145202190704&q=${city}`).then(response => {
        if(response.status === 200){
            return response.json()
        }
    }).then(data => {
        getWeatherStatus(data)
    }).catch(() => badRequest())
}

