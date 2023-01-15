// // d3.select("#selDataset").on("change", optionChanged)

// d3.json(url).then(function (data) {
//     // createFeatures(data.features)
//     console.log(data);
//     function color(gdp) {
//         if (gdp > 1810955871380.98) {
//             return "#E2CDFF"
//         }

//         else if (gdp > 1988336331717.42) {
//             return "#D0AEFF"
//         }

//         else if (gdp > 2107702842669.73) {
//             return "#B47CFF"
//         }

//         else if (gdp > 2957879759263.52) {
//             return "#9B51FF"
//         }

//         else if (gdp > 3131377762925.95) {
//             return "#7712FF"
//         }

//         else if (gdp > 3176295065497.24) {
//             return "#6200E7"
//         }

//         else if (gdp > 4259934911821.64) {
//             return "#4D00B6"
//         }

//         else if (gdp > 4940877780755.33) {
//             return "#35007D"
//         }

//         else if (gdp > 17734062645371.4) {
//             return "#21004D"
//         }

//         else if (gdp > 23315080560000.0) {
//             return "#070013"
//         }
//     }
//     function circle(feature) {
//         return {
//             opacity: 0.9,
//             fillOpacity: 0.5,
//             fillColor: color(feature.properties.gdp_2021),
//             color: "ffffff",
//             radius: Math.sqrt(feature.properties.gdp_2021) * 0.5,
//             weight: 0.5
//         }
//     }

//     function createFeatures(gdpData) {
//         console.log(gdpData)
//         function onEachFeature(feature, layer) {
//             layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2021}</p>`);
//         }

//         var gdp = L.geoJSON(gdpData, {
//             onEachFeature: onEachFeature,
//             pointToLayer: function (feature, latlng) {
//                 return L.circleMarker(latlng)
//             },
//             style: circle
//         });

//         console.log(gdp)

//         createMap(gdp)

//         function createMap(gdp) {


//             var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             })

//             var baseMaps = {
//                 "Street Map": street
//             };

//             var overlayMaps = {
//                 "Gdp": gdp
//             };

//             var myMap = L.map("map", {
//                 center: [
//                     37.09, -95.71
//                 ],
//                 zoom: 5
//                 // layers: [street, gdp]
//             });


//             street.addTo(myMap)



//             L.control.layers(baseMaps, overlayMaps, {
//                 collapsed: false
//             }).addTo(myMap);
//         }
//     }
// })

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

var el = document.createElement("div")

var content = document.createTextNode("Hello")

el.appendChild(content)

document.body.appendChild(el)