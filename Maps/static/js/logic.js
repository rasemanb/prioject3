    // Create the map object the options
var myMap = L.map("map", {
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
        coordinates: [49.815273, 6.129583],
        country: {
            name: Luxembourg
        },
        year: {
            2012: {
                gdp: 59776383527,
                gni: 45915520598
            },
            2013: {
                gdp: 65203276467,
                gni: 46779637636
            },
            2014: {
                gdp: 68804811898,
                gni: 49979926557
            },
            2015: {
                gdp: 60071584216,
                gni: 38657980989
            },
            2016: {
                gdp: 62216885436,
                gni: 41225831606
            },
            2017: {
                gdp: 65712180343,
                gni: 47031112675
            },
            2018: {
                gdp: 71000359760,
                gni: 50751283868
            },
            2019: {
                gdp: 69825641851,
                gni: 47012779829
            },
            2020: {
                gdp: 73992591285,
                gni: 51101739695
            },
            2021: {
                gdp: 85506243834,
                gni: 59692666902
            }
        }
    };
    { 
        coordinates: [53.41291,-8.24389],
        country: {
            name: Ireland
        },
        year: {
            2012: {
                gdp: 2.25629E+11,
                gni: 1.82483E+11
            },
            2013: {
                gdp: 2.38341E+11,
                gni: 2.01478E+11	
            },
            2014: {
                gdp: 2.59171E+11,
                gni: 2.19223E+11	
            },
            2015: {
                gdp: 2.91775E+11,
                gni: 2.24609E+11	
            },
            2016: {
                gdp: 2.99091E+11,
                gni: 2.43913E+11	
            },
            2017: {
                gdp: 3.36378E+11,
                gni: 2.67503E+11	
            },
            2018: {
                gdp: 3.85737E+11,
                gni: 2.99137E+11	
            },
            2019: {
                gdp: 3.99322E+11,
                gni: 3.10166E+11	
            },
            2020: {
                gdp: 4.25852E+11,
                gni: 3.2058E+11	
            },
            2021: {
                gdp: 5.04183E+11,
                gni: 3.82594E+11
            }
        }
    };
    { 
        coordinates: [60.472024,8.468946],
        country: {
            name: Norway
        },
        year: {
            2012: {
                gdp: 5.09506E+11,
                gni: 5.1383E+11	
            },
            2013: {
                gdp: 5.22762E+11,	
                gni: 5.28332E+11	
            },
            2014: {
                gdp: 4.9841E+11,	
                gni: 5.14173E+11	
            },
            2015: {
                gdp: 3.85802E+11,
                gni: 4.01834E+11		
            },
            2016: {
                gdp: 3.68827E+11,	
                gni: 3.84964E+11	
            },
            2017: {
                gdp: 3.98394E+11,	
                gni: 4.13028E+11	
            },
            2018: {
                gdp: 4.37E+11,	
                gni: 4.53417E+11	
            },
            2019: {
                gdp: 4.04941E+11,	
                gni: 4.17418E+11	
            },
            2020: {
                gdp: 3.62198E+11,
                gni: 3.76702E+11		
            },
            2021: {
                gdp: 4.82175E+11,
                gni: 5.03287E+11 
            }
        }
    };    { 
        coordinates: [46.818188,8.227512],
        country: {
            name: Switzerland
        },
        year: {
            2012: {
                gdp: 6.8642E+11,
                gni: 7.06067E+11	
            },
            2013: {
                gdp: 7.06235E+11,
                gni: 7.26595E+11	 
            },
            2014: {
                gdp: 7.26538E+11,
                gni: 7.3567E+11	
            },
            2015: {
                gdp: 6.94118E+11,
                gni: 7.10792E+11		
            },
            2016: {
                gdp: 6.87895E+11,
                gni: 6.92675E+11	
            },
            2017: {
                gdp: 6.95201E+11,
                gni: 6.94939E+11	
            },
            2018: {
                gdp: 7.25569E+11,
                gni: 7.0613E+11	
            },
            2019: {
                gdp: 7.21369E+11,
                gni: 7.05462E+11		
            },
            2020: {
                gdp: 7.39914E+11,
                gni: 7.25286E+11	
            },
            2021: {
                gdp: 8.0064E+11,
                gni: 7.97465E+11
            }
        }
    };    { 
        coordinates: [25.354826,51.183884],
        country: {
            name: Qatar
        },
        year: {
            2012: {
                gdp: 1.86834E+11,
                gni: 1.74709E+11	
            },
            2013: {
                gdp: 1.98728E+11,
                gni: 1.88364E+11	
            },
            2014: {
                gdp: 2.06225E+11,
                gni: 1.96924E+11
            },
            2015: {
                gdp: 1.6174E+11,
                gni: 1.58175E+11	
            },
            2016: {
                gdp: 1.51732E+11,
                gni: 1.50623E+11	
            },
            2017: {
                gdp: 1.61099E+11,
                gni: 1.6068E+11	
            },
            2018: {
                gdp: 1.83335E+11,
                gni: 1.7959E+11	 
            },
            2019: {
                gdp: 1.75838E+11,
                gni: 1.71428E+11	
            },
            2020: {
                gdp: 1.44411E+11,
                gni: 1.41367E+11	
            },
            2021: {
                gdp: 1.79677E+11,
                gni: 1.76914E+11
            }
        }
    };    { 
        coordinates: [4.535277,114.727669],
        country: {
            name: Brunei
        },
        year: {
            2012: {
                gdp: 19047940301,
                gni: 18590749040	
            },
            2013: {
                gdp: 18093829923,
                gni: 17893222506	
            },
            2014: {
                gdp: 17098342541,
                gni: 17082872928
            },
            2015: {
                gdp: 12930394938,
                gni: 13580987708
            },
            2016: {
                gdp: 11400854268,
                gni: 12235956707
            },
            2017: {
                gdp: 12128104859,
                gni: 12848520530
            },
            2018: {
                gdp: 13567351175,
                gni: 13651197272
            },
            2019: {
                gdp: 13469422959,
                gni: 13830513708
            },
            2020: {
                gdp: 12005825759,
                gni: 12367616148
            },
            2021: {
                gdp: 14006569576,
                gni: 14096219676
            }
        }
    };    { 
        coordinates: [1.352083,103.819836],
        country: {
            name: Singapore
        },
        year: {
            2011: {
                gdp:
            },
            2012: {
                gdp: 2.95087E+11,
                gni: 2.81965E+11	
            },
            2013: {
                gdp: 3.07576E+11, 
                gni: 2.9101E+11	
            },
            2014: {
                gdp: 3.14851E+11,
                gni: 3.03899E+11	
            },
            2015: {
                gdp: 3.08004E+11,
                gni: 2.86988E+11	
            },
            2016: {
                gdp: 3.18832E+11,
                gni: 2.99291E+11	
            },
            2017: {
                gdp: 3.43193E+11,
                gni: 3.17256E+11	
            },
            2018: {
                gdp: 3.76998E+11,
                gni: 3.31176E+11	
            },
            2019: {
                gdp: 3.75473E+11,
                gni: 3.28531E+11	
            },
            2020: {
                gdp: 3.45296E+11,
                gni: 2.99066E+11	
            },
            2021: {
                gdp: 3.96987E+11,
                gni: 3.49154E+11
            }
        }
    };    { 
        coordinates: [37.09024,-95.712891],
        country: {
            name: United States
        },
        year: {
            2012: {
                gdp: 1.6254E+13,
                gni: 1.66756E+13	
            },
            2013: {
                gdp: 1.68432E+13,
                gni: 1.71883E+13	
            },
            2014: {
                gdp: 1.75507E+13,
                gni: 1.80431E+13	
            },
            2015: {
                gdp: 1.8206E+13,
                gni: 1.86609E+13	
            },
            2016: {
                gdp: 1.86951E+13,
                gni: 1.90205E+13	
            },
            2017: {
                gdp: 1.94773E+13,
                gni: 1.98856E+13	
            },
            2018: {
                gdp: 2.05331E+13,
                gni: 2.09374E+13	
            },
            2019: {
                gdp: 2.1381E+13,
                gni: 2.17645E+13	
            },
            2020: {
                gdp: 2.10605E+13,
                gni: 2.14724E+13	
            },
            2021: {
                gdp: 2.33151E+13,
                gni: 2.36171E+13
            }
        }
    };    { 
        coordinates: [64.963051,-19.020835],
        country: {
            name: Iceland
        },
        year: {
            2012: {
                gdp: 14751508134,
                gni: 12884269290	
            },
            2013: {
                gdp: 16125060515,
                gni: 15287504222
            },
            2014: {
                gdp: 17867662178,
                gni: 16897076236
            },
            2015: {
                gdp: 17517210519,
                gni: 16543802058
            },
            2016: {
                gdp: 20793168031,
                gni: 19826589745
            },
            2017: {
                gdp: 24728285177,
                gni: 23965940756
            },
            2018: {
                gdp: 26264127687,
                gni: 24925636306
            },
            2019: {
                gdp: 24826102120,
                gni: 24634234578
            },
            2020: {
                gdp: 21694674810,
                gni: 21074087066
            },
            2021: {
                gdp: 25602419210,
                gni: 24377259095
            }
        }
    };    { 
        coordinates: [56.26392,9.501785],
        country: {
            name: Denmark
        },
        year: {
            2012: {
                gdp:  3.27149E+11,
                gni: 3.34536E+11	
            },
            2013: {
                gdp: 3.43584E+11,
                gni: 3.54464E+11
            },
            2014: {
                gdp: 3.52994E+11,
                gni: 3.65834E+11	
            },
            2015: {
                gdp: 3.02673E+11,
                gni: 3.11964E+11	
            },
            2016: {
                gdp: 3.13116E+11,
                gni: 3.20813E+11	
            },
            2017: {
                gdp: 3.32121E+11,
                gni: 3.39391E+11	
            },
            2018: {
                gdp: 3.56841E+11,
                gni: 3.66755E+11	
            },
            2019: {
                gdp: 3.46499E+11,
                gni: 3.5654E+11	
            },
            2020: {
                gdp: 3.55222E+11,
                gni: 3.66699E+11	
            },
            2021: {
                gdp: 3.98303E+11,
                gni: 4.1208E+11
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



