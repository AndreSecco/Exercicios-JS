let pessoa = []
let tab = document.querySelector("select#tab")

//Função verificar os valores e inserir na tabela
function verificar() {
    // Seleção de valores
    let var_nome = document.querySelector("input#txtnome").value
    let var_idade = document.querySelector("input#txtidade").value
    let var_peso = document.querySelector("input#txtpeso").value
    if (var_nome.length == 0 || var_idade.length == 0 || var_peso.length == 0) {
        alert("Insira as informações em todos os campos")
    } else {

        // Inserir informações na última posição na array
        pessoa.push({
            nome: var_nome,
            idade: var_idade,
            peso: var_peso
        })

        // Inserir na tabela o último registro inserido
        let num = pessoa.length - 1
        for (let i = num; i < pessoa.length; i++) {
            let item = document.createElement("option")
            item.text = `Foi adicionado ${pessoa[i].nome} com idade ${pessoa[i].idade} com o peso ${pessoa[i].peso}`
            tab.appendChild(item)
        }
        document.querySelector("input#txtnome").value = ''
        document.querySelector("input#txtidade").value = ''
        document.querySelector("input#txtpeso").value = ''
        //  alert(pessoa)
    }
}
// Função para filtrar
function filtrar() {
    let tab_filtro = document.getElementById("sel_filtro")
    let opt_filtro = tab_filtro.options[tab_filtro.selectedIndex].text

    if (opt_filtro == "Nome") {
        tab.options.length = 0
        let filtro = document.querySelector("input#txtfiltro")

        for (let i = 0; i < pessoa.length; i++) {
            if (pessoa[i].nome == filtro.value) {
                let item = document.createElement("option")
                item.text = `Foi adicionado ${pessoa[i].nome} com idade ${pessoa[i].idade} com o peso ${pessoa[i].peso}`
                tab.appendChild(item)
            }
        }
    } else if (opt_filtro == "Idade") {
        tab.options.length = 0
        let filtro = document.querySelector("input#txtfiltro")
        for (let i = 0; i < pessoa.length; i++) {
            if (pessoa[i].idade == filtro.value) {
                let item = document.createElement("option")
                item.text = `Foi adicionado ${pessoa[i].nome} com idade ${pessoa[i].idade} com o peso ${pessoa[i].peso}`
                tab.appendChild(item)
            }
        }
    }

}

// Função para Limpar Filtro
function limparFiltro() {
    tab.options.length = 0
    document.querySelector("input#txtfiltro").value = ''
    for (let i = 0; i < pessoa.length; i++) {
        let item = document.createElement("option")
        item.text = `Foi adicionado ${pessoa[i].nome} com idade ${pessoa[i].idade} com o peso ${pessoa[i].peso}`
        tab.appendChild(item)
    }
}