    // Create the map object the options

// Adding the tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);
// var url = "http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&date=2011:2022&per_page=3000"

//Create a function to determine the marker size based on the population
function markerSize(gdp) {
    return Math.sqrt(gdp) * .5;
};

//An array that contains all of the top 10 country's GDP & GNI information for the past 10 years
var locations = [
    { 
        coordinates: [37.09024	, -95.712891],
        country: {
            name: "United States"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 16254000000000,
                gni: 52790000
            },
            thirteen: {
                year: 2013,
                gdp: 16843200000000,
                gni: 53990000
            },
            fourteen: {
                year: 2014,
                gdp: 17550700000000,
                gni: 55800000
            },
            fifteen: {
                year: 2015,
                gdp: 18206000000000,
                gni: 56620000
            },
            sixteen: {
                year: 2016,
                gdp: 18695100000000,
                gni: 57140000
            },
            seventeen: {
                year: 2017,
                gdp: 19477300000000,
                gni: 59220000
            },
            eighteen: {
                year: 2018,
                gdp: 20533100000000,
                gni: 63460000
            },
            nine: {
                year: 2019,
                gdp: 21381000000000,
                gni: 66130000
            },
            twenty: {
                year: 2020,
                gdp: 21060500000000,
                gni: 64650000
            },
            twentyone: {
                year: 2021,
                gdp: 23315100000000,
                gni: 70930000

            }
        }
    },
    { 
        coordinates: [35.86166,104.195397],
        country: {
            name: "China"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 8532230000000,
                gni: 5910000
            },
            thirteen: {
                year: 2013, 
                gdp: 9570410000000,
                gni: 6740000
            },
            fourteen: {
                year: 2014,
                gdp: 10475700000000,
                gni: 7470000
            },
            fifteen: {
                year: 2015,
                gdp: 11061600000000,
                gni: 7890000
            },
            sixteen: {
                year: 2016,
                gdp: 11233300000000,
                gni: 8210000
            },
            seventeen: {
                year: 2017,
                gdp: 12310400000000,
                gni: 8670000
            },
            eighteen: {
                year: 2018,
                gdp: 13894800000000,
                gni: 9540000
            },
            nine: {
                year: 2019,
                gdp: 14279900000000,
                gni: 10310000
            },
            twenty: {
                year: 2020,
                gdp: 14687700000000,
                gni: 10520000
            },
            twentyone: {
                year: 2021,
                gdp: 17734100000000,
                gni: 11880000
            }
        }
    },
    { 
        coordinates: [36.204824,	138.252924],
        country: {
            name: "Japan"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 6272360000000,
                gni: 50060000
            },
            thirteen: {
                year: 2013,
                gdp: 5212330000000,
                gni: 48850000
            },
            fourteen: {
                year: 2014, 
                gdp: 4896990000000,	
                gni: 44440000
            },
            fifteen: {
                year: 2015,
                gdp: 4444930000000,
                gni: 39380000
            },
            sixteen: {
                year: 2016,
                gdp: 5003680000000,
                gni: 38460000
            },
            seventeen: {
                year: 2017,
                gdp: 4930840000000,
                gni: 38930000
            },
            eighteen: {
                year: 2018,
                gdp: 5037840000000,	
                gni: 41770000
            },
            nine: {
                year: 2019,
                gdp: 5123320000000,	
                gni: 42010000
            },
            twenty: {
                year: 2020,
                gdp: 5040110000000,
                gni: 40810000
            },
            twentyone: {
                year: 2021,
                gdp: 4940880000000,
                gni: 42650000
            }
        }
    },
    { 
        coordinates: [51.165691,	10.451526],
        country: {
            name: "Germany"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 3527143188785,
                gni: 46560000
            },
            thirteen: {
                year: 2013,
                gdp: 3733804649549,
                gni: 47220000
            },
            fourteen: {
                year: 2014,
                gdp: 3889093051024,
                gni: 47640000
            },
            fifteen: {
                year: 2015,
                gdp: 3357585719352,
                gni: 45780000
            },
            sixteen: {
                year: 2016,
                gdp: 3469853463946,
                gni: 44280000
            },
            seventeen: {
                year: 2017,
                gdp: 3690849152518,
                gni: 43760000
            },
            eighteen: {
                year: 2018,
                gdp: 3974443355020,
                gni: 47490000
            },
            nine: {
                year: 2019,
                gdp: 3888226035922,
                gni: 49220000
            },
            twenty: {
                year: 2020,
                gdp: 3889668895300,
                gni: 48050000
            },
            twentyone: {
                year: 2021,
                gdp: 20214259934,
                gni: 51660000
            }
        }
    },
    { 
        coordinates: [20.593684,78.96288],
        country: {
            name: "India"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 1827637859506,
                gni: 1470000
            },
            thirteen: {
                year: 2013,
                gdp: 1856722121394,
                gni: 1500000
            },
            fourteen: {
                year: 2014,
                gdp: 2039127446299,
                gni: 1550000
            },
            fifteen: {
                year: 2015,
                gdp: 2103587813813,
                gni: 1590000
            },
            sixteen: {
                year: 2016,
                gdp: 2294797980509,
                gni: 1660000
            },
            seventeen: {
                year: 2017,
                gdp: 2651472946375,
                gni: 1800000
            },
            eighteen: {
                year: 2018,
                gdp: 2702929718960,
                gni: 1980000
            },
            nine: {
                year: 2019,
                gdp: 2831552222520,
                gni: 2080000
            },
            twenty: {
                year: 2020,
                gdp: 2667687951797,
                gni: 1890000
            },
            twentyone: {
                year: 2021,
                gdp: 3176295065497,
                gni: 2150000
            }
        }
    },
    { 
        coordinates: [55.378051,-3.435973],
        country: {
            name: "United Kingdom"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 2706340967031,
                gni: 41810000
            },
            thirteen: {
                year: 2013,
                gdp: 2786315215250,
                gni: 42800000
            },
            fourteen: {
                year: 2014,
                gdp: 3065223279584,
                gni: 44590000
            },
            fifteen: {
                year: 2015,
                gdp: 2934857946213,
                gni: 44480000
            },
            sixteen: {
                year: 2016,
                gdp: 2699659680997,
                gni: 43150000
            },
            seventeen: {
                year: 2017,
                gdp: 2683399006716,
                gni: 41740000
            },
            eighteen: {
                year: 2018,
                gdp: 2878152147316,
                gni: 42180000
            },
            nine: {
                year: 2019,
                gdp: 2857057847953,
                gni: 43380000
            },
            twenty: {
                year: 2020,
                gdp: 2704609160088,
                gni: 38590000
            },
            twentyone: {
                year: 2021,
                gdp: 3131377762926,
                gni: 44480000
            }
        }
    },
    { 
        coordinates: [46.227638,2.213749],
        country: {
            name: "France"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 2683671716967,
                gni: 43410000
            },
            thirteen: {
                year: 2013,
                gdp: 2811876903329,
                gni: 43800000
            },
            fourteen: {
                year: 2014,
                gdp: 2855964488590,
                gni: 43340000
            },
            fifteen: {
                year: 2015,
                gdp: 2439188643163,
                gni: 41130000
            },
            sixteen: {
                year: 2016,
                gdp: 2472964344587,
                gni: 39100000
            },
            seventeen: {
                year: 2017,
                gdp: 2595151045198,
                gni: 38320000
            },
            eighteen: {
                year: 2018,
                gdp: 2790956878747,
                gni: 41170000
            },
            nine: {
                year: 2019,
                gdp: 2728870246706,
                gni: 42460000
            },
            twenty: {
                year: 2020,
                gdp: 2639008701648,
                gni: 39440000
            },
            twentyone: {
                year: 2021,
                gdp: 2957879759264,
                gni: 44160000
            }
        }
    },    
    { 
        coordinates: [41.87194,12.56738	],
        country: {
            name: "Italy"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 2086957656822, 
                gni: 36220000
            },
            thirteen: {
                year: 2013,
                gdp: 2141924094299,
                gni: 35570000
            },
            fourteen: {
                year: 2014,
                gdp: 2162009615997,
                gni: 34910000
            },
            fifteen: {
                year: 2015,
                gdp: 1836637711061,
                gni: 33000000
            },
            sixteen: {
                year: 2016,
                gdp: 1877071687634,
                gni: 31970000
            },
            seventeen: {
                year: 2017,
                gdp: 1961796197354,
                gni: 31380000
            },
            eighteen: {
                year: 2018,
                gdp: 2091932426267,
                gni: 33850000
            },
            nine: {
                year: 2019,
                gdp: 2011302198827,
                gni: 34930000
            },
            twenty: {
                year: 2020,
                gdp: 1896755301518,
                gni: 32410000
            },
            twentyone: {
                year: 2021,
                gdp: 2107702842670,
                gni: 35990000
            }
        }
    },
    { 
        coordinates: [56.130366,-106.346771],
        country: {
            name: "Canada"
        },
        year: {
            twelve: {
                year: 2012,
                gdp: 1828366481522,
                gni: 51080000
            },
            thirteen: {
                year: 2013,
                gdp: 1846597421835,
                gni: 52800000
            },
            fourteen: {
                year: 2014,
                gdp: 1805749878440,
                gni: 52200000
            },
            fifteen: {
                year: 2015,
                gdp: 1556508816217,
                gni: 47590000
            },
            sixteen: {
                year: 2016,
                gdp: 1527994741907,
                gni: 43890000

            },
            seventeen: {
                year: 2017,
                gdp: 1649265644244,
                gni: 42900000
            },
            eighteen: {
                year: 2018,
                gdp: 1725329192783,
                gni: 45080000
            },
            nine: {
                year: 2019,
                gdp: 1742015045482,
                gni: 46540000
            },
            twenty: {
                year: 2020,
                gdp: 1645423407568,
                gni: 43540000
            },
            twentyone: {
                year: 2021,
                gdp: 1988336331717,
                gni: 48310000
            }
        }
    },    
    { 
        coordinates: [35.907757,127.766922],
        country: {
            name: "Korea"
        },
        year: {
            twelve: {
                year: 2012,
                gdp:  1278427634343,
                gni: 25660000
            },
            thirteen: {
                year: 2013,
                gdp: 1370795199976,
                gni: 26980000
            },
            fourteen: {
                year: 2014,
                gdp: 1484318219634,
                gni: 28160000
            },
            fifteen: {
                year: 2015,
                gdp: 1465773245547,
                gni: 28720000
            },
            sixteen: {
                year: 2016,
                gdp: 1500111596236,
                gni: 29330000
            },
            seventeen: {
                year: 2017,
                gdp: 1623901496836,
                gni: 30300000
            },
            eighteen: {
                year: 2018,
                gdp: 1724845615629,
                gni: 32750000
            },
            nine: {
                year: 2019,
                gdp: 1651422932448,
                gni: 33830000
            },
            twenty: {
                year: 2020,
                gdp: 1644312831906,
                gni: 33040000
            },
            twentyone: {
                year: 2021,
                gdp: 1810955871381,
                gni: 35110000

            }
        }
    }
];

// Define arrays to hold the country markers for years
var countryOne = [];
var countryTwo = [];
var countryThree = [];
var countryFour = [];
var countryFive = [];
var countrySix = [];
var countrySeven = [];
var countryEight = [];
var countryNine = [];
var countryTen = [];


// Loop through the locations and create the country markers per year
for (var i = 0; i < locations.length; i++ ) {
    countryOne.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "white",
            fillColor: "white",
            radius: markerSize(locations[i].year.twelve.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.twelve.year} </h3> <hr> </h3> ${locations[i].year.twelve.gdp}`)
    );
    countryTwo.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpcaity: 0.5,
            color: "purple",
            fillColor: "purple",
            radius: markerSize(locations[i].year.thirteen.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.thirteen.year} </h3> <hr> </h3> ${locations[i].year.thirteen.gdp}`)
    );
    countryThree.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "red",
            fillColor: "red",
            radius: markerSize(locations[i].year.fourteen.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.fourteen.year} </h3> <hr> </h3> ${locations[i].year.fourteen.gdp}`)
    );
    countryFour.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "blue",
            fillColor: "blue",
            radius: markerSize(locations[i].year.fifteen.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.fifteen.year} </h3> <hr> </h3> ${locations[i].year.fifteen.gdp}`)
    );
    countryFive.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "green",
            fillColor: "green",
            radius: markerSize(locations[i].year.sixteen.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.sixteen.year} </h3> <hr> </h3> ${locations[i].year.sixteen.gdp}`)
    );
    countrySix.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "orange",
            fillColor: "orange",
            radius: markerSize(locations[i].year.seventeen.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.seventeen.year} </h3> <hr> </h3> ${locations[i].year.seventeen.gdp}`)
    );
    countrySeven.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "yellow",
            fillColor: "yellow",
            radius: markerSize(locations[i].year.eighteen.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.eighteen.year} </h3> <hr> </h3> ${locations[i].year.eighteen.gdp}`)
    );
    countryEight.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "brown",
            fillColor: "brown",
            radius: markerSize(locations[i].year.nine.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.nine.year} </h3> <hr> </h3> ${locations[i].year.nine.gdp}`)
    );
    countryNine.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "black",
            fillColor: "black",
            radius: markerSize(locations[i].year.twenty.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.twenty.year} </h3> <hr> </h3> ${locations[i].year.twenty.gdp}`)
    );
    countryTen.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.5,
            color: "white",
            fillColor: "white",
            radius: markerSize(locations[i].year.twentyone.gdp)
        }).bindPopup(`<h1>${locations[i].country.name}</h1> <hr> <h3> ${locations[i].year.twenty.year} </h3> <hr> </h3> ${locations[i].year.twentyone.gdp}`)
    );    
}

// Create seperate layer groups for each year
var mapTwelve = L.layerGroup(countryOne);
var mapThirteen = L.layerGroup(countryTwo);
var mapFourteen = L.layerGroup(countryThree);
var mapFifteen = L.layerGroup(countryFour);
var mapSixteen = L.layerGroup(countryFive);
var mapSeventeen = L.layerGroup(countrySix);
var mapEighteen = L.layerGroup(countrySeven);
var mapNine = L.layerGroup(countryEight);
var mapTwenty = L.layerGroup(countryNine);
var mapTwentyone = L.layerGroup(countryTen);

//Create base layers
var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create baseMaps to hold the basemap layer
var baseMaps = {
    "Street Map": streetmap,
    "Topographic Map": topo
};

// Create an overlay object
var overlayMaps = {
    "2012": mapTwelve,
    "2013": mapThirteen,
    "2014": mapFourteen,
    "2015": mapFifteen,
    "2016": mapSixteen,
    "2017": mapSeventeen,
    "2018": mapEighteen,
    "2019": mapNine,
    "2020": mapTwenty,
    "2021": mapTwentyone
};

var myMap = L.map("map", {
    center: [32.30368, 64.77691],
    zoom: 2,
    layers: [streetmap, mapTwelve]
});


// Pass map layers to our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);

L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);

