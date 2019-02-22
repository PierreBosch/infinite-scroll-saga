import styled from "styled-components";
import { Spinner } from "../Loader/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  margin-bottom: 10px;

  h2 {
    font-size: 20px;
    margin: 20px 0 20px 15px;
    font-weight: 500;
    color: #00786a;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${Spinner} {
    height: 35px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const AddCart = styled.button`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00786a;
  margin-top: -10px;
  margin-right: -4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  .add-cart-icon {
    color: #fff;
    width: 22px;
    height: 22px;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 173px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;

  .cartWrapper {
    display: "flex";
    width: "100%";
    justify-content: "flex-end";
  }

  span.product-title {
    font-size: 15px;
    padding: 10px 15px;
    text-align: center;
    font-weight: 500;
    color: #646464;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  span.product-price {
    text-align: center;
    color: #309f85;
    font-size: 17px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    text-decoration: line-through;

    span {
      font-weight: 500;
    }
  }

  span.product-with-discount {
    text-align: center;
    color: #c93131;
    font-size: 18px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin-bottom: 13px;
    margin-top: 5px;

    span {
      font-weight: 500;
    }
  }

  img {
    width: 173px;
    height: 173px;
  }
`;
