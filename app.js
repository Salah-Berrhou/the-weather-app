const request = new XMLHttpRequest()

let city = ''

document.querySelector('#cityName').addEventListener('input', (e) => {
    country = e.target.value
    getWeather(country)
})

let getWeather = function(city) {
    // request.open('GET', `http://api.apixu.com/v1/forecast.json?key=16394afabc39402891f145202190704&q=${city}`)
    // request.send()
    // request.addEventListener('readystatechange', (e) => {
    //     if(e.target.readyState === 4 && e.target.status === 200){
    //         const data = JSON.parse(e.target.responseText)
    //         showWeather(country, data)
    //     }else if(e.target.readyState === 4 && e.target.status !== 200){
    //         badRequest()
    //     }
    // })

    fetch(`http://api.apixu.com/v1/forecast.json?key=16394afabc39402891f145202190704&q=${country}`).then(response => {
        if(response.status === 200){
            return response.json()
        }
    }).then(data => {
            document.querySelector('div').innerHTML = ''
            let p = document.createElement('p')
            p.textContent = `The weather in ${country} is: ${data.current.feelslike_c}`
           return document.querySelector('div').appendChild(p)
    }).catch(() => badRequest())
}

const badRequest = () => {
    document.querySelector('div').innerHTML = ''
    let p = document.createElement('p')
    p.textContent = `There is no info`
    document.querySelector('div').appendChild(p)
}

// const showWeather = (country, data) => {
//     document.querySelector('div').innerHTML = ''
//     let p = document.createElement('p')
//     p.textContent = `The weather in ${country} is: ${data.current.feelslike_c}`
//     document.querySelector('div').appendChild(p)
// }