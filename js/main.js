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
