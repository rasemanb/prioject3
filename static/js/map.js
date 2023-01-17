
d3.json(url).then(function (data) {

    function color(gdp) {
        if (gdp >= 23315080560000.0) {
            return "#00FF00"

        }

        else if (gdp >= 17734062645371.4) {
            return "#66ff00"
        }

        else if (gdp >= 4940877780755.33) {
            return "#99ff00"
        }

        else if (gdp >= 4259934911821.64) {
            return "#ccff00"
        }

        else if (gdp >= 3176295065497.24) {
            return "#FFFF00"
        }

        else if (gdp >= 3131377762925.95) {
            return "#FFCC00"
        }

        else if (gdp >= 2957879759263.52) {
            return "#ff9900"
        }

        else if (gdp >= 2107702842669.73) {
            return "#ff6600"
        }

        else if (gdp >= 1988336331717.42) {
            return "#FF3300"
        }

        else if (gdp >= 1810955871380.98) {
            return "#FF0000"
        }
    }

    function style12(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2012),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2012) * 0.000007,
            weight: 0.5
        }

    }

    function style13(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style14(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style15(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style16(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style17(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style18(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style19(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style20(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    function style21(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2013),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2013) * 0.000007,
            weight: 0.5
        }
    }

    var layers = {
        GDP_2012: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style12,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2012}</p>`);
            }
        }),

        GDP_2013: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style13,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2013}</p>`);
            }
        }),
        GDP_2014: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style14,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2014}</p>`);
            }
        }),
        GDP_2015: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style15,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2015}</p>`);
            }
        }),
        GDP_2016: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style16,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2016}</p>`);
            }
        }),
        GDP_2017: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style17,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2017}</p>`);
            }
        }),
        GDP_2018: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style18,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2018}</p>`);
            }
        }),
        GDP_2019: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style19,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2019}</p>`);
            }
        }),
        GDP_2020: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style20,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2020}</p>`);
            }
        }),
        GDP_2021: L.geoJSON(data, {
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng)
            },
            style: style21,
            onEachFeature: function (feature, layer) {
                layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2021}</p>`);
            }
        })
    }

    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
    
        var overlays = {
            "Gdp for 2012": layers.GDP_2012,
            "Gdp for 2013": layers.GDP_2013,
            "Gdp for 2014": layers.GDP_2014,
            "Gdp for 2015": layers.GDP_2015,
            "Gdp for 2016": layers.GDP_2016,
            "Gdp for 2017": layers.GDP_2017,
            "Gdp for 2018": layers.GDP_2018,
            "Gdp for 2019": layers.GDP_2019,
            "Gdp for 2020": layers.GDP_2020,
            "Gdp for 2021": layers.GDP_2021
        
        };
    
        var baseMaps = {
            "OpenStreetMap": street
        };
    
        var map = L.map("map", {
            center: [
                40.4637, -3.7492
            ],
            zoom: 3,
            layers: [street, layers.GDP_2012]
        })
    
        L.control.layers(baseMaps, overlays).addTo(map);


})


































// d3.select("#year").on("change", mapUpdate)

// var myMap = L.map("map", {
//     center: [
//         40.4637, -3.7492
//     ],
//     zoom: 3,
//     layers: [street]
// });


// var baseMaps = {
//     "Street Map": street
// };

// var gdp = new L.LayerGroup();

// var overlayMaps = {
//     "Gdp": gdp
// };

// L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// d3.json(url).then(function (data) {

//     function styleInfo(feature) {
//         return {
//             opacity: 0.9,
//             fillOpacity: 0.8,
//             fillColor: color(feature.properties.gdp_2021),
//             color: "#8B0000",
//             radius: Math.sqrt(feature.properties.gdp_2021) * 0.000007,
//             weight: 0.5
//         }

//     }

//     function styleInfo(feature) {
//         return {
//             opacity: 0.9,
//             fillOpacity: 0.8,
//             fillColor: color(feature.properties.gdp_2021),
//             color: "#8B0000",
//             radius: Math.sqrt(feature.properties.gdp_2021) * 0.000007,
//             weight: 0.5
//         }

//         function color(gdp) {
//             if (gdp >= 23315080560000.0) {
//                 return "#00FF00"

//             }

//             else if (gdp >= 17734062645371.4) {
//                 return "#66ff00"
//             }

//             else if (gdp >= 4940877780755.33) {
//                 return "#99ff00"
//             }

//             else if (gdp >= 4259934911821.64) {
//                 return "#ccff00"
//             }

//             else if (gdp >= 3176295065497.24) {
//                 return "#FFFF00"
//             }

//             else if (gdp >= 3131377762925.95) {
//                 return "#FFCC00"
//             }

//             else if (gdp >= 2957879759263.52) {
//                 return "#ff9900"
//             }

//             else if (gdp >= 2107702842669.73) {
//                 return "#ff6600"
//             }

//             else if (gdp >= 1988336331717.42) {
//                 return "#FF3300"
//             }

//             else if (gdp >= 1810955871380.98) {
//                 return "#FF0000"
//             }
//         }

//         L.geoJSON(data, {
//             pointToLayer: function (feature, latlng) {
//                 return L.circleMarker(latlng)
//             },
//             style: styleInfo,
//             onEachFeature: function (feature, layer) {
//                 layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2021}</p>`);
//             }

//         }).addTo(gdp)
//         gdp.addTo(myMap)
//     }

// function mapUpdate(year) {
//     d3.json(url).then(data => {

//         function styleInfo(feature) {
//             console.log(Math.sqrt(feature.properties[`gdp_${year}`]) * 0.00007)
//             console.log(year)
//             return {
//                 opacity: 0.9,
//                 fillOpacity: 0.8,
//                 fillColor: color(feature.properties[`gdp_${year}`]),
//                 color: "#8B0000",
//                 radius: Math.sqrt(feature.properties[`gdp_${year}`]) * 0.000007,
//                 weight: 0.5
//             }
//         }

//         function color(gdp) {
//             if (gdp >= 23315080560000.0) {
//                 return "#00FF00"

//             }

//             else if (gdp >= 17734062645371.4) {
//                 return "#66ff00"
//             }

//             else if (gdp >= 4940877780755.33) {
//                 return "#99ff00"
//             }

//             else if (gdp >= 4259934911821.64) {
//                 return "#ccff00"
//             }

//             else if (gdp >= 3176295065497.24) {
//                 return "#FFFF00"
//             }

//             else if (gdp >= 3131377762925.95) {
//                 return "#FFCC00"
//             }

//             else if (gdp >= 2957879759263.52) {
//                 return "#ff9900"
//             }

//             else if (gdp >= 2107702842669.73) {
//                 return "#ff6600"
//             }

//             else if (gdp >= 1988336331717.42) {
//                 return "#FF3300"
//             }

//             else if (gdp >= 1810955871380.98) {
//                 return "#FF0000"
//             }
//         }



        // function buildMap(lat, lng)  {

        //     function styleInfo(feature) {
        //         console.log(Math.sqrt(feature.properties[`gdp_${year}`]) * 0.00007)
        //         console.log(year)
        //         return {
        //             opacity: 0.9,
        //             fillOpacity: 0.8,
        //             fillColor: color(feature.properties[`gdp_${year}`]),
        //             color: "#8B0000",
        //             radius: Math.sqrt(feature.properties[`gdp_${year}`]) * 0.000007,
        //             weight: 0.5
        //         }
        //     }

        //     function color(gdp) {
        //         if (gdp >= 23315080560000.0) {
        //             return "#00FF00"

        //         }

        //         else if (gdp >= 17734062645371.4) {
        //             return "#66ff00"
        //         }

        //         else if (gdp >= 4940877780755.33) {
        //             return "#99ff00"
        //         }

        //         else if (gdp >= 4259934911821.64) {
        //             return "#ccff00"
        //         }

        //         else if (gdp >= 3176295065497.24) {
        //             return "#FFFF00"
        //         }

        //         else if (gdp >= 3131377762925.95) {
        //             return "#FFCC00"
        //         }

        //         else if (gdp >= 2957879759263.52) {
        //             return "#ff9900"
        //         }

        //         else if (gdp >= 2107702842669.73) {
        //             return "#ff6600"
        //         }

        //         else if (gdp >= 1988336331717.42) {
        //             return "#FF3300"
        //         }

        //         else if (gdp >= 1810955871380.98) {
        //             return "#FF0000"
        //         }
        //     }

        //     document.getElementById('map').innerHTML = "<div id='newmap' style='width: 100%; height: 100%;'></div>";
        //     var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        //                     osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
        //                         ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        //     osmLayer = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});
        //     var map = new L.Map('newmap');
        //     map.setView(new L.LatLng(lat, lng), 3 );
        //     map.addLayer(osmLayer);
        //     map.addLayer(L.geoJSON(data, {
        //         pointToLayer: function (feature, latlng) {
        //             return L.circleMarker(latlng)
        //         },
        //         style: styleInfo,
        //         onEachFeature: function (feature, layer) {
        //         layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties[`gdp_${year}`]}</p>`);
        //         }

        //     }))
        // }


        // var map = L.map("map", {
        //     center: [
        //         40.4637, -3.7492
        //     ],
        //     zoom: 3,
        //     layers: [layer1]
        // });

        // var base = {
        //     "Street":layer1
        // }

        // var newgdp = new L.LayerGroup();

        // var overlay = {
        //     "Gdp": newgdp
        // };

        // L.control.layers(base, overlay).addTo(map);

//         var geo12 = L.geoJSON(data, {
//             pointToLayer: function (feature, latlng) {
//                 return L.circleMarker(latlng)
//             },
//             style: styleInfo,
//             onEachFeature: function (feature, layer) {
//                 layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2012}</p>`);
//             }
    
//         $("#2012").click(function () {
//                 if (this.checked) {
//                     console.log("checked!");
//                     geo.addTo(newMap);
//                 }

//                 else {
//                     console.log("unchecked");
//                     newMap.removeLayer(geo12);
//                 };
//             });

//         $("#2013").click(function () {
//             if (this.checked) {
//                 console.log("checked!");
//                 var places = topojson.feature(uk, uk.objects.places);
//                 geoP = L.geoJSON(places).addTo(newMap);
//             }

//             else {
//                 console.log("unchecked");
//                 newMap.removeLayer(geoP);
//             };
//         });



//             // }).addTo(newgdp)
//             // newgdp.addTo(map)

//         })
//     })
// }



// function optionChanged(event) {
//     const update = event.target.value
//     mapUpdate(update)
// }