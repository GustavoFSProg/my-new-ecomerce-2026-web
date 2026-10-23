import{ Produto} from './ProdutoInterfase'

export default class FiltrarProdutos {
    executar(pesquisa: string, produto: Produto[]): Produto[] {
        const palavras = pesquisa.toLowerCase().split(' ')
        return produto.filter((produto) => {
            const texto = `
                ${produto.nome}
                ${produto.descricao}
                ${Object.values(produto.nome).join(' ')}
                ${produto.marca}
            `.toLowerCase()
            return palavras.every((palavra) => texto.includes(palavra))
        })
    }
}


