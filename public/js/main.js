// const async = require("hbs/lib/async");

const submitBtn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp')
const temp_status = document.getElementById('temp_status')

const datahide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
    event.preventDefault();
    
    let cityVal = cityName.value
    if (cityVal === "") {
        city_name.innerHTML = `Plz enter the city name before search`;
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=808a7d278b8668c8b7ecaf33754936f7`
            const response = await fetch(url)
            const data = await response.json()
            // console.log(response);
            const arrData = [data]

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp.innerText = arrData[0].main.temp

            const tempMood = arrData[0].weather[0].main

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide');
            cityVal = "";

        } catch (error) {
            cityVal = "";
            datahide.classList.add("data_hide");
            city_name.innerText = `Plz enter the valid city name before search`;

        }
    }
}

submitBtn.addEventListener('click', getInfo)
