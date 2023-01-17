d3.select("#year").on("change", mapUpdate)
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var myMap = L.map("map", {
    center: [
        40.4637, -3.7492
    ],
    zoom: 3,
    layers: [street]
});


var baseMaps = {
    "Street Map": street
};

var gdp = new L.LayerGroup();

var overlayMaps = {
    "Gdp": gdp
};

L.control.layers(baseMaps, overlayMaps).addTo(myMap);

d3.json(url).then(function (data) {

    function styleInfo(feature) {
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2021),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties.gdp_2021) * 0.000007,
            weight: 0.5
        }
        
    }

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

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng)
        },
        style: styleInfo,
        onEachFeature: function (feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties.gdp_2021}</p>`);
        }

    }).addTo(gdp)
    gdp.addTo(myMap)
})

function mapUpdate(year) {d3.json(url).then(data => {

    if(myMap != 'undefined' || myMap != null) {
        myMap.remove(); 
       } 

    // function buildMap()  {
    //     document.getElementById('map').innerHTML = "<div id='newmap' style='width: 100%; height: 100%;'></div>";
    //     var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //                     osmAttribution = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
    //                         ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    //     osmLayer = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttribution});
    //     var map = new L.Map('newmap');
    //     map.setView(new L.LatLng([40.4637, -3.7492]), 3 );
    //     map.addLayer(osmLayer);
    //     var validatorsLayer = new OsmJs.Weather.LeafletLayer({lang: 'en'});
    //     map.addLayer(validatorsLayer);
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

    function styleInfo(feature) {
        console.log(Math.sqrt(feature.properties[`gdp_${year}`]) * 0.00007)
        console.log(year)
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties[`gdp_${year}`]),
            color: "#8B0000",
            radius: Math.sqrt(feature.properties[`gdp_${year}`]) * 0.000007,
            weight: 0.5
        }
    }

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

    var layer1 = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
     
    var map = L.map("map", {
        center: [
            40.4637, -3.7492
        ],
        zoom: 3,
        layers: [layer1]
    });

    var base = {
        "Street":layer1
    }

    var newgdp = new L.LayerGroup();

    var overlay = {
        "Gdp": newgdp
    };

    L.control.layers(base, overlay).addTo(map);

    setTimeout(function () { map.invalidateSize() }, 1200);

    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng)
        },
        style: styleInfo,
        onEachFeature: function (feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.country_name}</h3><hr><p>${feature.properties[`gdp_${year}`]}</p>`);
        }

    }).addTo(newgdp)
    newgdp.addTo(map)

})
}

function optionChanged(event) {
    const update = event.target.value
    mapUpdate(update)
}