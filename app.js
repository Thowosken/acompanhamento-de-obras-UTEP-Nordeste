console.log("App carregado");
console.log(XLSX);

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function(event){

    const arquivo = event.target.files[0];

    console.log("Arquivo:", arquivo);
});
