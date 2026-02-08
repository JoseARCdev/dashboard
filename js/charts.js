let populationChart = null;
let topCountriesChart = null;

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

export function renderTopCountriesChart(data) {
  const ctx = document
    .getElementById('topCountriesPopulation')
    .getContext('2d');

  if (topCountriesChart) {
    topCountriesChart.destroy();
  }

  topCountriesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(c => c.name),
      datasets: [
        {
          label: 'Población',
          data: data.map(c => c.population)
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true
    }
  });
}
