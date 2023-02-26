APIkey="";

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
    })
}