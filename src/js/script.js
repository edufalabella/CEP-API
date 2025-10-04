let nome = document.getElementById("name");
let cep = document.getElementById("cep");

// cep.addEventListener("input", () => {
//     fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
//     .then((res) => res.json())
//     .then((data) => console.log(data)) // mostra o JSON completo no console
//     .catch((error) => console.error("Erro ao buscar o CEP:", error));
// })

cep.addEventListener("input", () => {
  if (cep.value.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          console.error("CEP não encontrado!");
        } else {
          console.log(data); // Mostra o JSON completo no console

          // Exemplo: preenchendo automaticamente o campo nome da rua
          if (document.getElementById("rua")) {
            document.getElementById("rua").value = data.logradouro;
          }
          if (document.getElementById("bairro")) {
            document.getElementById("bairro").value = data.bairro;
          }
          if (document.getElementById("localidade")) {
            document.getElementById("localidade").value = data.localidade;
          }
          if (document.getElementById("estado")) {
            document.getElementById("estado").value = data.uf;
          }
        }
      })
      .catch((error) => console.error("Erro ao buscar o CEP:", error));
  }
});
