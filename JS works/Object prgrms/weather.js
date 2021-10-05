var weather_data = [
    { district: "tvm", temp: 30 },
    { district: "apy", temp: 24 },
    { district: "ktm", temp: 20 },
    { district: "idu", temp: 19 },
    { district: "koc", temp: 31 },
    { district: "tvm", temp: 29 },
    { district: "mpm", temp: 30 },
    { district: "apy", temp: 25 },
    { district: "ktm", temp: 21 },
    { district: "idk", temp: 18 },
    { district: "ekm", temp: 30 },
    { district: "tsr", temp: 20 },
    { district: "mpm", temp: 31 },
    { district: "tvm", temp: 40 },
]

var forecast=[]
for (let data of weather_data) {
    let dist_name = data.district;
    let cur_temp = data.temp;
    if (dist_name in forecast) {
        let old_temp = forecast[dist_name]
        if (cur_temp > old_temp) {
            forecast[dist_name] = cur_temp;
        }
    }
    else {
        forecast[dist_name] = cur_temp;
    }
}
console.log(forecast);

//sort forecast wrt temp
Object.entries(forecast).sort((temp1,temp2)=>temp2[1]-temp1[1]).forEach((temp)=>console.log(temp)); 
//Object.entries( ) used to convert objects into array so that array methods can be applied
