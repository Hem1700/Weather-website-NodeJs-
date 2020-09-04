const request = require('postman-request')


const forecast = (latitude , longitude, callback )=>{
    const  url = 'http://api.weatherstack.com/current?access_key=a126168c9a0788ee27300f872447799b&query='+latitude+',' +longitude+'&units=m'
 
    request({
       url,
       json:true,
    }, (error , {body})=>{
       if(error){
          callback('Unable to connect to location services' , undefined)
       }else if(body.error){
                console.log('Unable to find location' , undefined)
       }else {
          callback(undefined ,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +  ' degrees out. There is ' + body.current.precip + ' % chance of rain'
          
          )
       }
    })
 }

 module.exports = forecast