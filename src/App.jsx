import { useEffect, useState } from "react";
import api from "./api";

function App() {
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

  return (
    <>
      <div className="hero">
        {produtos.map((produto) => (
          <div key={produto.id}>
            <img src={produto.image} alt={produto.name} />
            <h3>{produto.name}</h3>
            <p>{produto.description}</p>
            <span>R$ {produto.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
