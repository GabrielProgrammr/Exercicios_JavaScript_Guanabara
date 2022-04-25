function Atualizar() {
    let tab = document.getElementById('add')
    
    let item = document.createElement('option')
    tab.text = `${n} x ${c} = ${n*c}`
    tab.value = 'tab${c}'
    tab.appendChild(item)
}