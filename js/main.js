import { getCountries } from './api.js';
import {
  getTotalCountries,
  getWorldPopulation,
  getUniqueContinents,
  getTotalLanguages,
  getPopulationByContinent
} from './stats.js';

import { renderPopulationByContinentChart } from './charts.js';

document.addEventListener('DOMContentLoaded', async () => {
  const countries = await getCountries();

  renderOverview(countries);

  const populationByContinent =
    getPopulationByContinent(countries);

  renderPopulationByContinentChart(populationByContinent);
});

function renderOverview(countries) {
  document.getElementById('totalCountries').textContent =
    getTotalCountries(countries);

  document.getElementById('worldPopulation').textContent =
    getWorldPopulation(countries).toLocaleString();

  document.getElementById('totalContinents').textContent =
    getUniqueContinents(countries).length;

  document.getElementById('totalLanguages').textContent =
    getTotalLanguages(countries);
}

const navLinks = document.querySelectorAll('.nav-link');
const views = document.querySelectorAll('.view');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    switchView(link.dataset.view);
  });
});

function switchView(viewName) {
  views.forEach(view => {
    view.classList.toggle(
      'active-view',
      view.dataset.view === viewName
    );
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.dataset.view === viewName
    );
  });
}

// Vista inicial
switchView('overview');
