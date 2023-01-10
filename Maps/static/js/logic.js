    // Create the map object the options
var myMap = L/map("map", {
    center: [],
    zoom: 12,
    layers: []
});

// Adding the tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);
// var url = "http://api.worldbank.org/v2/country/all/indicator/NY.GDP.MKTP.CD?format=json&date=2011:2022&per_page=3000"

//Create a function to determine the marker size based on the population
function markerSize(gdp) {
    return Math.sqrt(gdp) * 50;
}

//Create an array that contains all of the information to create the markers for country & info
var locations = [
    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };
    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };
    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };    { 
        coordinates: [,],
        country: {
            name:
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp:
            },
            2013: {
                gdp:
            },
            2014: {
                gdp:
            },
            2015: {
                gdp:
            },
            2016: {
                gdp:
            },
            2017: {
                gdp:
            },
            2018: {
                gdp:
            },
            2019: {
                gdp:
            },
            2020: {
                gdp:
            },
            2021: {
                gdp:
            }
        }
    };
];

// Define arrays to hold the country markers  for years
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
            fillOpacity: 0.75,
            color: "white",
            fillColor: "white",
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countryTwo.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpcaity:,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countryThree.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countryFour.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countryFive.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countrySix.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countrySeven.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countryEight.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countryNine.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );
    countryTen.push(
        L.circle(locations[i].coordinates, {
            stroke:false,
            fillOpacity: 0.75,
            color: ,
            fillColor: ,
            radius: markerSize(locations[i].country.gdp)
        }).bindPopup(`<h1>${locations[i].name}</h1> <hr> <h3> ${locations[i].year} </h3> <hr> </h3> ${locations[i].year.gdp}`)
    );    
}

// Create seperate layer groups for each year
var mapOne = L.layerGroup(countryOne);
var mapTwo = L.layerGroup(countryTwo);
var mapThree = L.layerGroup(countryThree);
var mapFour = L.layerGroup(countryFour);
var mapFive = L.layerGroup(countryFive);
var mapSix = L.layerGroup(countrySix);
var mapSeven = L.layerGroup(countrySeven);
var mapEight = L.layerGroup(countryEight);
var mapNine = L.layerGroup(countryNine);

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
    "2012": mapOne,
    "2013": mapTwo,
    "2014": mapThree,
    "2015": mapFour,
    "2016": mapFive,
    "2017": mapSix,
    "2018": mapEight,
    "2019": mapNine,
    "2020": mapTen
};

// Pass map layers to our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);







