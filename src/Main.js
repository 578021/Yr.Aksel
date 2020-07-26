    function vaerOverByNo(bynavn, latitude, longitude){
    const  apiData = {
        url: "https://api.met.no/weatherapi/locationforecast/2.0/compact?",
        lat: "lat=" + latitude,
        lon: "lon=" + longitude
    }


    const {url, lat, lon} = apiData
    const apiUrl = `${url}${lat}&${lon}`
    console.log(apiUrl)

    fetch(apiUrl)
        .then( (data) => data.json())
        .then( (vaer) => htmlkode(vaer))

    const htmlkode = (data) => {
        console.log(data)
        const html = `
        
            <div class="Vaer">
            <div class="name">${bynavn}</div>
            <img src="web/img/weathericon/png/${data.properties.timeseries[2].data.next_1_hours.summary.symbol_code}.png"></img>
            <div class="air_temperature"> ${data.properties.timeseries[2].data.instant.details.air_temperature} </div>
            </div>
         `
        const vaerDiv = document.querySelector('.vaerno')
        vaerDiv.innerHTML += html
    }
    }
    function vaerOverByImorgen(bynavn, latitude, longitude){
        const  apiData = {
            url: "https://api.met.no/weatherapi/locationforecast/2.0/compact?",
            lat: "lat=" + latitude,
            lon: "lon=" + longitude
        }


        const {url, lat, lon} = apiData
        const apiUrl = `${url}${lat}&${lon}`
        console.log(apiUrl)

        fetch(apiUrl)
            .then( (data) => data.json())
            .then( (vaer) => htmlkode(vaer))

        const htmlkode = (data) => {
            console.log(data)
            const html = `
            <div class="Vaer">
            <div class="name">${bynavn}</div>
            <img src="web/img/weathericon/png/${data.properties.timeseries[26].data.next_1_hours.summary.symbol_code}.png"></img>
            <div class="air_temperature"> ${data.properties.timeseries[26].data.instant.details.air_temperature} </div>
            </div>
            `
            const vaerDiv = document.querySelector('.vaerimorgen')
            vaerDiv.innerHTML += html
        }
    }
        vaerOverByNo("Bergen", 60.4,5.32)
        vaerOverByNo("Oslo", 60.10, 9.58)
        vaerOverByNo("Rubbestadneset", 59.815825, 5.256159)
        vaerOverByNo("Stavanger", 58.9485777, 5.5402552)
        vaerOverByNo("Sandnes", 58.8490922,5.6667627)
        vaerOverByNo("Trodheim",  63.4187191,10.368723)
        vaerOverByImorgen("Bergen", 60.4,5.32)
        vaerOverByImorgen("Oslo", 60.10, 9.58)
        vaerOverByImorgen("Rubbestadneset", 59.815825, 5.256159)
        vaerOverByImorgen("Stavanger", 58.9485777, 5.5402552)
        vaerOverByImorgen("Sandnes", 58.8490922,5.6667627)
        vaerOverByImorgen("Trodheim",  63.4187191,10.368723)


    function sleep() {
       return new Promise(resolve => setTimeout(resolve,ms))
    }