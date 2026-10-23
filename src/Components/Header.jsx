import { Link } from "react-router-dom";
import styled from "styled-components";
import ListaDeProdutos from "../FiltrarListaProdutos";

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
  width: 40%;
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
  return (
    <>
      <ContainerAll>
        <ListaDeProdutos />
        <ContainerLinks>
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
        </ContainerLinks>
      </ContainerAll>
    </>
  );
}

export default Header;
