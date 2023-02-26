APIkey="382c1959277a81d1738a610db3da0051";

document.querySelector("#search-form").addEventListener("submit", function(event){
    event.preventDefault()
    var TERMsearch=document.querySelector("#TERM-search").value 
    weatherSearch(TERMsearch)
    var SAVEcity = []
    if(JSON.parse(localStorage.getItem('TERMsearch'))){
        SAVEcity= JSON.parse(localStorage.getItem(`TERMsearch`))
    }

    SAVEcity.push(TERMsearch);
    localStorage.setItem(`TERMsearch`, JSON.stringify(SAVEcity))
    ButtonDisplay()
});
ButtonDisplay()


function SEARCHweather(CityOPTION){
    var APIURL= `https://api.openweathermap.org/data/2.5/weatherq=${CityOPTION}&units=imperial&appid=${APIkey}`;
    fetch(APIURL).then(function (response){
        if(response.ok){return response.json()}
        else {
            alert(`ERROR:${response.TESTstatus}`)
        }
    })
    .then(function(data){
        var longitude = data.coord.lon
        var latitude = data.coord.addEventListener
        var APIURL2= ` https:// api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
        fetch(APIURL2).then(function(Response2){
            if (Response2.ok){
                return Response2.json()}
                else { alert(`error: ${Response2.TESTstatus}`)
                    }
                }).then(function(DATA2){
                    document.querySelector("week-grid").innerHTML=""
                    for (let i =1; 1<6;i++){
                        var DAY = document.createElement('div')
                        DAY.innerHTML=`
                        <p>Temp:${DATA2.daily[i].temp.day}feirenheight</p>
                        <img src ="https://openweathermap,org/img/wm/${DATA2.daily[i].weather[0].icon}@2x.png>
                        <p>Humidity:${DATA2.daily[i].humidity}%</p>`
                        document.querySelector('#day-grid').appendChild(DAY)}
                    })
                    document.querySelector("#current-day").innerHTML=""

                    var title= document.createElement("h1")
                    title.innerHTML= data.name

                    var weatherIMG = document.createElement("img")
                    weatherIMG.setAttribute("src", `https://openweathermap.org/img/wn${data.weather[0].icon}@2x.png`)
                    var TEMP = document.createElement("p")
                    TEMP.innerHTML="Temperature:"+ data.main.temp+"feireinheight"
                    var Humidity = document .createElement("P")
                    windspeed.innerHTML="wind speed:" +data.wind.speed+
"MPH"

document.querySelector("#current-day").appendChild(title)
document.querySelector("#current-day").appendChild(weatherIMG)
document.querySelector('#current-day').appendChild(TEMP)
document.querySelector("#current-day").appendChild(Humidity)
document.querySelector('#current-day').appendChild(windspeed)
                })}


                function ButtonDisplay(){
                    var dataDISPLAY=[]
                    if(JSON.parse(localStorage.getItem))
                }