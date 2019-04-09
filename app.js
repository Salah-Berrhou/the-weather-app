const request = new XMLHttpRequest()

let city = ''

document.querySelector('#cityName').addEventListener('input', (e) => {
    city = e.target.value
    getWeather(city)
})

let getWeather = function(city) {
    fetch(`http://api.apixu.com/v1/forecast.json?key=16394afabc39402891f145202190704&q=${city}`).then(response => {
        if(response.status === 200){
            return response.json()
        }
    }).then(data => {
            document.querySelector('div').innerHTML = ''
            let p = document.createElement('p')
            p.textContent = `The weather in ${city} is: ${data.forecast.forecastday[0].day.maxtemp_c}C`
           return document.querySelector('div').appendChild(p)
    }).catch(() => badRequest())
}

const badRequest = () => {
    document.querySelector('div').innerHTML = ''
    let p = document.createElement('p')
    p.textContent = `There is no info`
    document.querySelector('div').appendChild(p)
}

