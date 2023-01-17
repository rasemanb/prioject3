d3.select("#selDataset").on("change", optionChanged)
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
    console.log("data");
    console.log(data)

    function styleInfo(feature) {
        console.log(Math.sqrt(feature.properties.gdp_2021) * 0.00001)
        return {
            opacity: 0.9,
            fillOpacity: 0.8,
            fillColor: color(feature.properties.gdp_2021),
            color: "ffffff",
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
    
    const years = [
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
    ]

    let rad = data.map(_ => ({
        radius: years.map(y => _[`gdp_${y}`])
    }))

})

}

function optionChanged(event) {
    const chart = event.target.value
    plotCharts(chart)
}