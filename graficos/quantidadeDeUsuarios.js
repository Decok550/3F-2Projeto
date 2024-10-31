import { getCSS,tickfont } from "./comum.js";
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

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            x:0,
            font:{
                color: getCSS('--cor-primaria'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis:{
            tickfont: tickfont,
            title:{
                text: 'Nome das redes sociais',
                font:{
                    color: getCSS('--cor-secundaia')
                }
            }
        },
        yaxis:{
        tickfont: tickfont,
        title:{
            text: 'Milhões de usuários ativos',
            font:{
                color: getCSS('--cor-secundaia')
            }
         }
        }
    }

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico,infos,layout);


}

quantidadDeUsuarios();


