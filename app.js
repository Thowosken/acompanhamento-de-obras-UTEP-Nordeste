const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", lerArquivo);

function numero(valor) {
    if (valor === undefined || valor === null) return 0;

    const n = parseFloat(valor);

    return isNaN(n) ? 0 : n;
}

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function lerArquivo(event) {

    const arquivo = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {

        const workbook = XLSX.read(
            e.target.result,
            { type: "binary" }
        );

        const primeiraAba = workbook.SheetNames[0];

        const worksheet = workbook.Sheets[primeiraAba];

        const dados = XLSX.utils.sheet_to_json(worksheet);

        gerarKPIs(dados);
    };

    reader.readAsBinaryString(arquivo);
}

function gerarKPIs(dados) {

    const totalObras = dados.length;

    let valorTotal = 0;
    let percentualTotal = 0;
    let quantidadePercentual = 0;

    dados.forEach(item => {

        if (item["VL. PROJ"]) {
            valorTotal += numero(item["VL. PROJ"]);
        }

        if (item["% REAL"]) {
            percentualTotal += numero(item["% REAL"]);
            quantidadePercentual++;
        }
    });

    const percentualMedio =
        quantidadePercentual > 0
            ? (percentualTotal / quantidadePercentual) * 100
            : 0;

    document.getElementById("resultado").innerHTML = `

        <div class="cards">

            <div class="card">
                <h3>Total Obras</h3>
                <h2>${totalObras}</h2>
            </div>

            <div class="card">
                <h3>Valor Carteira</h3>
                <h2>${formatarMoeda(valorTotal)}</h2>
            </div>

            <div class="card">
                <h3>% Real Médio</h3>
                <h2>${percentualMedio.toFixed(2)}%</h2>
            </div>

        </div>

    `;
}
