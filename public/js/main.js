const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const dataHide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === "") {
        city_name.innerText = `Please write the name before search`;
        dataHide.classList.add('data_hide');
    }else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=07e0c89e2023d503837ecced289bb2fb`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;

             //condition check sunny or cloudy
            if (tempStatus == "Clear") {
                temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>';
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud" style="color: #ffffff;"></i>';
            }else if (tempStatus == "Rainy") {
                temp_status.innerHTML = '<i class="fa-solid fa-cloud-rain" style="color: #ffffff;"></i>';
            } else {
                '<i class="fa-solid fa-cloud-sun" style="color: #f39c12;"></i>';
            }


            dataHide.classList.remove('data_hide');

        }catch {
            city_name.innerText = `Please enter the city name properly`;
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);