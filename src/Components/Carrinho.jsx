import { useState } from "react";

const produtosIniciais = [
  { id: 1, nome: "Camiseta", preco: 49.9 },
  { id: 2, nome: "Tênis", preco: 199.9 },
  { id: 3, nome: "Boné", preco: 29.9 },
];

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  // Adicionar produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.id === produto.id);
      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item,
        );
      }
      return [...prevCarrinho, { ...produto, quantidade: 1 }];
    });
  };

  // Remover produto do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item,
        )
        .filter((item) => item.quantidade > 0),
    );
  };

  // Calcular o preço total
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0,
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Loja React + Vite</h1>

      <h2>Produtos</h2>
      <div style={{ display: "flex", gap: "15px" }}>
        {produtosIniciais.map((prod) => (
          <div
            key={prod.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h3>{prod.nome}</h3>
            <p>R$ {prod.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(prod)}>Adicionar</button>
          </div>
        ))}
      </div>

      <hr style={{ margin: "20px 0" }} />

      <h2>Carrinho de Compras</h2>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {carrinho.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.nome} - R$ {item.preco.toFixed(2)} x {item.quantidade} =
              <strong> R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => removerDoCarrinho(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}
