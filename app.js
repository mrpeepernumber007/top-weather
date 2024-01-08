const searchButton = document.getElementById('s-btn')
searchButton.addEventListener('click', getWeather)



async function getWeather() {
    const searchInput = document.getElementById('s-input')
    const searchedCity = searchInput.value
    searchInput.value = ''

    const fetched = await fetch(`https://api.weatherapi.com/v1/current.json?key=0d3ee8d1bc504231976194308240401&q=${searchedCity}`, {mode: 'cors'})
    const rawCityInfo = await fetched.json()
    showWeather(rawCityInfo)
    // return rawCityInfo
}

function showWeather(info) {
    const cityName = document.getElementById('city-name')
    // const cityTime = document.getElementById('city-time')
    const cityCond = document.getElementById('city-cond')
    const cityHumid = document.getElementById('city-humid')
    const cityTemp = document.getElementById('city-temp')

    cityName.textContent = `${info.location.name}`
    // cityTime.textContent = `${info.location.localtime}`
    cityCond.textContent = `${info.current.condition.text}`
    cityHumid.textContent = `${info.current.humidity}%`
    cityTemp.textContent = `${info.current.temp_c}°C`
}