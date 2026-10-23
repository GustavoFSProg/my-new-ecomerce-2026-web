import React, { useEffect, useState } from "react";
import api from "./api";

function ListaDeProdutos() {
  // 1. Lista inicial de produtos
  const [produtos, setProdutos] = useState([]);

  async function GetProducts() {
    try {
      const { data } = await api.get("/get-products");
      setProdutos(data);

      return data;
    } catch (error) {
      return alert(error);
    }
  }

  useEffect(() => {
    GetProducts();
  }, []);

  // 2. Estado para armazenar o que o usuário digita
  const [busca, setBusca] = useState("");

  // 3. Filtrar os produtos baseado no nome (ignorando maiúsculas/minúsculas)
  const produtosFiltrados = produtos.filter((produto) =>
    produto.name.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Campo de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar produto pelo nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {/* Exibição dos produtos filtrados */}
      <ul>
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <li key={produto.id}>
              <h3>{produto.name}</h3>
              <img src={produto.image} alt={produto.name} />
            </li>
          ))
        ) : (
          <li style={{ color: "red" }}>Nenhum produto encontrado.</li>
        )}
      </ul>
    </div>
  );
}

export default ListaDeProdutos;
