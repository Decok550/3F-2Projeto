import { getCSS } from "./comum";
async function quantidadDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDasReds = Object.keys(dados);
    const quantidadDeUsuarios = Object.values(dados);

    const infos = [
        {
            x: nomeDasReds,
            y: quantidadDeUsuarios,
            type: 'bar', 
            marker: {
                color: getCSS('--cor-primaria')
            }
        }
    ]

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico,infos);


}

quantidadDeUsuarios();


