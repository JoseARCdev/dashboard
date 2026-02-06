import { getCountries } from './api.js';
import {
  getTotalCountries,
  getWorldPopulation,
  getUniqueContinents,
  getTotalLanguages
} from './stats.js';

document.addEventListener('DOMContentLoaded', async () => {
  const countries = await getCountries();

  console.log('Total países:', getTotalCountries(countries));
  console.log(
    'Población mundial:',
    getWorldPopulation(countries).toLocaleString()
  );
  console.log(
    'Continentes:',
    getUniqueContinents(countries)
  );
  console.log(
    'Total idiomas:',
    getTotalLanguages(countries)
  );
});

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
