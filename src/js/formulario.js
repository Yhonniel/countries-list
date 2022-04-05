const formulario = document.getElementById("formulario");

const inputFormulario = document.getElementById("inputFormulario");

const formularioApp = (data) => {
  formulario.addEventListener("keyup", (e) => {
    e.preventDefault();
    const buscadorInput = inputFormulario.value.toLowerCase();
    // console.log(buscadorInput);
    const arrayFiltrado = data.filter((item) => {
      const letraApi = item.name.common.toLowerCase();
      if (letraApi.indexOf(buscadorInput) !== -1) {
        return item;
      }
    });
    paises(arrayFiltrado);
  });
};
