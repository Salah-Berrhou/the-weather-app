// @ts-check
const badRequest = () => {
    document.querySelector('div').innerHTML = ''
    let p = document.createElement('p')
    p.textContent = `There is no info`
    document.querySelector('div').appendChild(p)
}

const getWeatherStatus = (data) => {

    let city = document.createElement('h1')
    city.textContent = data.location.name
    document.querySelector('#city').innerHTML = ''
    document.querySelector('#city').appendChild(city)

    let tempCelsius = document.createElement('p')
    tempCelsius.textContent = `${data.current.temp_c}C`
    document.querySelector('#weather-celcius').innerHTML = ''
    document.querySelector('#weather-celcius').appendChild(tempCelsius)

    let weatherCondition = document.createElement('span')
    weatherCondition.textContent = `${data.forecast.forecastday[0].day.condition.text}`
    document.querySelector('#weather-condition').innerHTML = ''
    document.querySelector('#weather-condition').appendChild(weatherCondition)

    let weatherConditionIcon = document.createElement('img')
    weatherConditionIcon.setAttribute('src', `${data.forecast.forecastday[0].day.condition.icon}`)
    document.querySelector('#weather-icon').innerHTML = ''
    document.querySelector('#weather-icon').appendChild(weatherConditionIcon)

    document.querySelector('#sunrise').innerHTML = ''
    let sunrise = document.createElement('p')
    sunrise.textContent = data.forecast.forecastday[0].astro.sunrise
    document.querySelector('#sunrise').appendChild(sunrise)

    document.querySelector('#sunset').innerHTML = ''
    let sunset = document.createElement('p')
    sunset.textContent = data.forecast.forecastday[0].astro.sunset
    document.querySelector('#sunset').appendChild(sunset)

}
