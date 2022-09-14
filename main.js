

function grab()
{   
    var input = document.getElementById('search-input').value
    console.log(input)
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9b0d3f9c88mshfd7b6445f1813e1p1aed44jsn0793638afda0',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + input, options)
    .then(response => response.json())
    .then(response => {
        var data_location = (response.location.name + " " +  response.location.region)
        var wind_mph = (response.current.wind_mph)
        var temp_f = (response.current.temp_f)
        var feelslike_f = (response.current.feelslike_f)
        var precip_in = (response.current.precip_in)
        var humidity = (response.current.humidity)
        var maxtemp_f = response.forecast.forecastday[0].day.maxtemp_f
        var mintemp_f = response.forecast.forecastday[0].day.mintemp_f
        var kind = (response.current.condition.text)
        var list = [data_location, wind_mph, temp_f, feelslike_f, precip_in, humidity, kind, maxtemp_f, mintemp_f]
        console.log(list)
        show(list)
    })

    .catch(err => console.error(err));
}

function show(list){
    var city = document.getElementById('city');
    var temp = document.getElementById('temp');
    var kind = document.getElementById('kind');
    var high_low = document.getElementById('high-low');
    var others = document.getElementById('others');

    city.innerHTML = "";
    kind.innerHTML = "";
    temp.innerHTML = "";
    high_low.innerHTML = "";
    others.innerHTML = "";

    city.append(list[0])
    
    kind.append(list[6])
    
    temp.append(list[2] + " feels like " + list[3])

    high_low.append("high: "+ list[7])
    high_low.append(document.createElement('br'));
    high_low.append("low: " + list[8])

    others.append("windspeed: " + list[1] + "mph   precipitation: " + list[4] + "in. humidity: " + list[5] + "%") 



    
}



   

 