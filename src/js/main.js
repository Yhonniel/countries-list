const app = document.getElementById("app");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    paises(data);
    formularioApp(data);
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
          <p class="footer-card">
            <a href="pais.html?name=${item.name.common}" class="link-card">Ver más</a>
          </p>
        </div>
      </article>
        `;
  });
  app.innerHTML = elementos;
};
