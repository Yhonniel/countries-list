const pais = document.getElementById("pais");
query = new URLSearchParams(window.location.search);
const params = query.get("name");
console.log(params);

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const filtroData = data.filter((item) => item.name.common === params);
    paises(filtroData);
  } catch (err) {
    console.log(err);
  }
};

const paises = (data) => {
  let elementos = "";
  data.forEach((item) => {
    elementos += `
          <article class="card">
        <img src="${item.flags.png}" alt="" class="img-fluid" />
        <div class="card-content">
          <h3>Pais:
          ${item.name.common}
          </h3>
          <p>
            <b>Capital: ${item.capital} </b>
          </p>
          <p>
            <b>Región:
             ${item.region}
            </b>
          </p>
            <p>
            <b>Sub-Región:
            ${item.subregion}
            </b>
          </p>  
        </div>
      </article>
        `;
  });
  pais.innerHTML = elementos;
};
