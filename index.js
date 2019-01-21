const _  = require('lodash')
const fs = require('fs')
const airports = require('./airports.json')

const majorAirports = _.filter(airports, function(a) { return a.iata != "" })

fs.writeFile("./major_airports.json", JSON.stringify(majorAirports, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
});



