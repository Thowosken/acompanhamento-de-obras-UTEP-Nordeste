const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", lerArquivo);

function lerArquivo(event){

    const arquivo = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function(e){

        const workbook = XLSX.read(
            e.target.result,
            { type: "binary" }
        );

        const primeiraAba = workbook.SheetNames[0];

        const worksheet =
            workbook.Sheets[primeiraAba];

        const dados =
            XLSX.utils.sheet_to_json(worksheet);

        console.log(dados);

        document.getElementById("resultado")
        .innerHTML = `
            <h2>Arquivo carregado</h2>
            <p>${dados.length} registros encontrados</p>
        `;
    };

    reader.readAsBinaryString(arquivo);
}
