var myMap = L.map("map", {
    center: [32.30368, 64.77691],
    zoom: 2,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json(url).then((data => { 

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

    // Create a new choropleth layer.
    geojson = L.choropleth(data, {
  
      // Define which property in the features to use.
        valueProperty: "gdp_2012",
    
        // Set the color scale.
        scale: ["#ffffb2", "#b10026"],
    
        // The number of breaks in the step range
        steps: 10,
    
        // q for quartile, e for equidistant, k for k-means
        mode: "q",
        style: {
            // Border color
            color: "#fff",
            weight: 1,
            fillOpacity: 0.8
        },
    
        // Binding a popup to each layer
        onEachFeature: function(data, layer) {
            layer.bindPopup("<strong>" + feature.properties.country_name + "</strong><br /><br />Estimated employed population with children age 6-17: " +
            data.gdp_2012 + "<br /><br />GDP $" + data.gdp_2012);
        }
    })
    })).addTo(myMap)














})