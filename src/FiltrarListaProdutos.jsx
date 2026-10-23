import React, { useEffect, useState } from "react";
import api from "./api";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Card = styled.div`
  display: flex;
  width: 90%;
  height: 550px;
  /* background: #235b75; */
  background: #1d4c62;
  /* background: #173d4f; */

  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 15px;
  padding-top: 10px;

  @media screen and (max-width: 750px) {
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    height: auto;
    padding-top: 33px;
    padding-bottom: 33px;
  }
`;

const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ContainerGeral = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 200px;
  padding-top: 25px;
  /* background-image: linear-gradient(to bottom, #404040, gray); */
  /* background-image: linear-gradient(to bottom, #000066, darkblue, #0000b3); */
  background-image: linear-gradient(to bottom, #00004d, #000080);
  /* background-image: linear-gradient(to bottom, #000033, #000080); */

  @media screen and (max-width: 750px) {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
  }
`;

const BodyContainer = styled.div`
  display: flex;
  width: 85%;
  align-items: center;
  justify-content: center;
  // background: "green",
  margin-left: 45px;

  @media screen and (max-width: 750px) {
    margin-left: 10px;
  }
`;

function ListaDeProdutos() {
  // 1. Lista inicial de produtos
  const [produtos, setProdutos] = useState([]);

  function numberToReal(numero) {
    var numero = numero.toFixed(2).split(".");
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join(".");
    return numero.join(",");
  }

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
    <ContainerGeral>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Pesquisar produto pelo nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            width: "450px",
            height: "40px",
            marginBottom: "20px",
            borderRadius: "5px",
            paddingLeft: "10px",
            fontSize: "16px",
          }}
        />
        {/* <SearchIcon
          style={{
            display: "flex",
            color: "white",
            fontSize: "43x",
            marginTop: "-18px",
            marginLeft: "2px",
          }}
        /> */}
      </div>

      <BodyContainer>
        <ContainerCards>
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => {
              // {produtos.map((produto) => {
              return (
                <div key={produto.id}>
                  <buttom
                    style={{ cursor: "pointer" }}
                    onClick={() => goToProfile(items.id)}
                  >
                    <Card>
                      <h2 style={{ fontSize: "27px", color: "#c3c6c7" }}>
                        {produto.name}
                      </h2>
                      <img
                        src={produto.image}
                        style={{ borderRadius: "15px" }}
                        width="250"
                        height="200"
                      />
                      <p
                        style={{
                          width: "80%",
                          color: "#e1e4e6",
                          textIndent: "18px",
                          textAlign: "justify",
                        }}
                      >
                        {produto.description}
                      </p>

                      <span style={{ color: "white" }}>
                        {numberToReal(produto.price)}
                      </span>
                    </Card>
                  </buttom>
                </div>
              );
            })
          ) : (
            // ))
            <>
              <p>NULL</p>
            </>
          )}
        </ContainerCards>
      </BodyContainer>
    </ContainerGeral>
  );
}

export default ListaDeProdutos;
