let populationChart = null;

export function renderPopulationByContinentChart(data) {
  const ctx = document
    .getElementById('populationByContinent')
    .getContext('2d');

  if (populationChart) {
    populationChart.destroy();
  }

  populationChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          label: 'Población',
          data: Object.values(data)
        }
      ]
    },
    options: {
      responsive: true
    }
  });
}
