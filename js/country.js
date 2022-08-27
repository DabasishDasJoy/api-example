const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayData(data))
}

const displayData = counties => {
    counties.forEach(country => {
        console.log(country);
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <h5> Capital: ${country.capital? country.capital[0] : "No Capital"}</h5>
        `;

        document.getElementById('countries-container').appendChild(div);
    });
}

loadCountries();