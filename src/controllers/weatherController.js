const axios = require('axios')

const getweather = async function(req, res){
try{ 
  let  cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    //    let q = req.query.q;
    // let appid = req.query.appid;
    let sortedarr = []
    for (let i = 0; i < cities.length; i++) {
        let ele = cities[i];
        let citytempPair = {city:ele}
        let details = {
            method: "get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${ele}&appid=7e99e45e1b424d5deebc4316cc86ac6d`
        }
        let result = await axios(details)
        let temp = result.data.main.temp
        citytempPair.temp = temp
        sortedarr.push(citytempPair)
    }
    let result = sortedarr.sort(function(a, b){return a.temp-b.temp})
    res.status(200).send({msg:result})
}catch(err){
    res.status(500).send({err:err})
}
}

module.exports.getweather = getweather;