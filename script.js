console.log("Hello World");
const apikeys='1aefc165c3f9a47f825d726978d628e2';
async function getWeather()
{
    // let lon=15.99;
    // let lat=44.54;
    try{
        let city="abc";
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeys}`);
        if(!response.ok)
        {
            throw new Error(`weather fetching data for city ${city} is not found`)
        }

        let data=await response.json();

        console.log(data);
        let newPara=document.createElement('p');
        newPara.textContent=`${data?.main?.temp.toFixed(2)}°C`;
        document.body.appendChild(newPara);
    }
    catch(err){
console.log("Error Found",err);
    }
    
}
