export function getTotalCountries(countries) {
  return countries.length;
}

export function getWorldPopulation(countries) {
  return countries.reduce(
    (total, country) => total + (country.population || 0),
    0
  );
}

export function getUniqueContinents(countries) {
  const continents = countries
    .map(country => country.continents?.[0])
    .filter(Boolean);

  return [...new Set(continents)];
}

export function getTotalLanguages(countries) {
  const languages = new Set();

  countries.forEach(country => {
    if (country.languages) {
      Object.values(country.languages).forEach(lang =>
        languages.add(lang)
      );
    }
  });

  return languages.size;
}

export function getPopulationByContinent(countries) {
  return countries.reduce((acc, country) => {
    const continent = country.continents?.[0];
    if (!continent) return acc;

    acc[continent] = (acc[continent] || 0) + country.population;
    return acc;
  }, {});
}