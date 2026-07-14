console.log("App carregado");

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", (e) => {
    console.log(e.target.files[0]);
    alert("Arquivo selecionado!");
});
