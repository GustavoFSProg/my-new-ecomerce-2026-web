import { Link } from "react-router-dom";
import styled from "styled-components";
import ListaDeProdutos from "../FiltrarListaProdutos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCart from "./Carrinho";

const ContainerAll = styled.div`
  display: flex;
  width: 100%;
  height: 65px;
  /* background: darkblue; */
  background: #0000cc;

  color: lightgray;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    height: 157px;
  }
`;

const ContainerLinks = styled.div`
  display: flex;
  width: 91%;
  height: 59px;
  /* background: darkblue; */
  /* background: #000099; */

  color: lightgray;
  align-items: center;
  margin-left: 110px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin-top: -57px;
  }
`;

function Header() {
  function CartFunction() {
    return <ShoppingCart />;
  }
  return (
    <>
      <ContainerAll>
        <ContainerLinks>
          <p
            style={{
              textDecoration: "none",
              color: "lightgray",

              cursor: "pointer",
            }}
          >
            HOME
          </p>
          <p
            style={{
              textDecoration: "none",
              color: "lightgray",

              cursor: "pointer",
            }}
          >
            CADASTRO
          </p>
          <p
            style={{
              textDecoration: "none",
              color: "lightgray",

              cursor: "pointer",
            }}
          >
            ADMIN
          </p>
          <p
            style={{
              textDecoration: "none",
              color: "lightgray",

              cursor: "pointer",
            }}
          >
            LOGIN
          </p>
          {/* <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
            }}
            to="/"
          >
            HOME
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
              marginTop: "6px",
            }}
          >
            POSTS
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
              marginTop: "6px",
            }}
          >
            ADMIN
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              cursor: "pointer",
              marginTop: "6px",
            }}
          >
            LOGIN
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "lightgray",
              marginTop: "6px",

              cursor: "pointer",
            }}
          >
            CADASTRO
          </Link> */}
          <div
            style={{
              display: "flex",
              width: "5%",
              justifyContent: "center",
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
              <ShoppingCartIcon
                onClick={CartFunction}
                style={{ fontSize: "39px", cursor: "pointer" }}
              />
            </Link>
          </div>
        </ContainerLinks>
      </ContainerAll>
    </>
  );
}

export default Header;
