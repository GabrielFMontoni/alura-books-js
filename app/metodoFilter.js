const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() :filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
   
        const valorTotal = calcularValorTotalLivro(livrosFiltrados)
        exibirValorTotal(valorTotal)
    
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal(valor){
    sectionDoPrecoTotal.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros mostrados por R$ <span id="valor">${valor}</span></p>
  </div>
    `

}