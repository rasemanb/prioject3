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

    const config = data.map(_ => ({
        type: 'pie',
        data: _.debt_to_gdp_ratio,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Chart.js Pie Chart'
            }
          }
        },
      }));
      // </block:config>

    })
}
plotCharts()

