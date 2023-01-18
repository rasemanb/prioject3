function pieChart() {
  const ctx = document.getElementById('myChart');
  
  let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Japan', 'Italy', 'United States', 'France', 'Canada', 'United Kingdom', 'Germany', 'China', 'S. Korea'],
      datasets: [{
        label: 'Debt to GDP Ratio',
        data: [237, 135, 107, 98.1, 89.7, 80.7, 69.62, 59.8, 50.5, 37.7],
        borderWidth: 1,
        backgroundColor: ['#9BD0F5','#FF3C33','#FFA533','#9CFF33','#33FFE9','#339CFF','#6833FF','#D733FF','#FF3383','#FFF933'],
      }]
    },
    options: {
    }
  });
  
  }
  