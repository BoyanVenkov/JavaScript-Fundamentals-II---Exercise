function towns(inputArray){
    class Town{
        constructor(town, lat, long){
            this.town = town
            this.latitude = Number(lat)
            this.longitude = Number(long)
        }
    }        

    for(const element of inputArray){
        let [town, latitude, longitude] = element.split(" | ")

        let city = new Town(town, latitude, longitude)
        console.log(`{ town: '${city.town}', latitude: '${city.latitude.toFixed(2)}', longitude: '${city.longitude.toFixed(2)}' }`)
    }


}