let input = document.querySelector('input');
let btn = document.querySelector('button');
let output = document.querySelector('.output');
let body = document.body;

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');


function changeWeadether(reponse,temp) {
    if (temp<=0) {
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1478719059408-592965723cbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80')";
    }
    else if (reponse=='overcast clouds'|| reponse=='few clouds'||reponse=='broken clouds') {
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1483977399921-6cf94f6fdc3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=793&q=80')";

    }
    else if (reponse=='light rain'||reponse=='heavy rain'||reponse=='rain'||reponse=='moderate rain') {
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixid=MnwxMjA3fDB8MHxzZWFy[…]bnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    else if (reponse=='haze') {
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=813&q=80')";
    }
    // else if (reponse==''||reponse==''||reponse=='') {
        
    // }
    else{
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1553901753-215db344677a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80')";
    }
    
}

btn.addEventListener('click',function(){
    let cityName = input.value;

    if (cityName != '') {
        output.style.display='block';
        let desc;
        let temp;
        let tempMIn;
        let tempMax;
        let tempAll;
        let humidity;
        let time = new Date();

        const API =` https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=304c9fa04421a2cc94aa2bc78e9b4d4e`;
        let xhr =new XMLHttpRequest();
        xhr.open('GET',API);
        xhr.onload=function(){
            let data=JSON.parse(xhr.responseText);
            console.log(data);
            desc=data.weather[0].description;
            console.log(desc);
            temp=data.main.temp;
            tempMIn=data.main.temp_min;
            tempMax=data.main.temp_max;
            humidity=data.main.humidity;

            temp = temp - 273.15;
            temp = Math.round(temp);
            console.log(temp);

            changeWeadether(desc,temp);
 
        }
        xhr.send();
    }
})