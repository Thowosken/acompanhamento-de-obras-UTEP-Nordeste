console.log("App carregado");

console.log(XLSX);

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", lerArquivo);

function lerArquivo(event){

    const file = event.target.files[0];

    if(!file) return;

    document.getElementById("resultado")
    .innerHTML = `

    <div class="cards">

        <div class="card">
            <h3>Arquivo</h3>
            <h2>${file.name}</h2>
        </div>

    </div>

    `;
}
