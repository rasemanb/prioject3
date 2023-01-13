d3.select("#selDataset").on("change", optionChanged)

function plotCharts() {d3.json(url).then(data => {
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

    const traces = data.map(_ => ({
        x: years,
        y: years.map(y => _[`gdp_${y}`]),
        type: "scatter",
        name: _.country_name
    }))

    const gdpLinePlotLay = {
        title: `Top 10 GDP over the last 10 years`,
        xaxis: {
            title: "Year"
        },
        yaxis: {
            title: "GDP in Trillions (USD)"
        }
    }

    Plotly.newPlot("gdp-line-plot", traces, gdpLinePlotLay, {responsive:true})

    const gniLinePlotTrace = data.map(_ => ({
        x: years,
        y: years.map(y => _[`gni_${y}`]),
        type: "scatter",
        name: _.country_name

    }))

    const gniLinePlotLay = {
        title: `Top 10 GNI over the last 10 years`,
        xaxis: {
            title: "Year"
        },
        yaxis: {
            title: "GNI in Trillions (USD)"
        }
    }

    Plotly.newPlot("gni-line-plot", gniLinePlotTrace, gniLinePlotLay, {responsive:true})




}) 
//     console.log(data)

//     var menu = d3.select("#selDataset");
//     var names = data.country.map(n => n.name);
//     names.forEach(function(name){
//         menu.append("option").text(name);
//     });

//     let vals = data.country.map(v => v.gdp)
}

function optionChanged(event) {
    const chart = event.target.value
    plotCharts(chart)
}

plotCharts()

