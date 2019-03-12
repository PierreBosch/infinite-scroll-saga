import React, { Component } from "react";
import {
  MainTitle,
  ProductContainer,
  Product,
  LoaderContainer
} from "./styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";

import { bindActionCreators } from "redux";
import { Creators as ProductsActions } from "../../store/ducks/products";
import { connect } from "react-redux";

class ProductList extends Component {
  componentDidMount() {
    this.props.getProductsRequest();
  }
  loadMore() {
    setTimeout(() => {
      this.props.getProductsRequest();
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <InfiniteScroll
          dataLength={this.props.products.data.length}
          next={this.loadMore.bind(this)}
          hasMore={this.props.products.hasMore}
          loader={
            <LoaderContainer>
              <Loader type="Oval" color="#FF0000" height={25} width={25} />
            </LoaderContainer>
          }
        >
          <MainTitle>
            <h2>
              {this.props.title
                ? this.props.title
                : "Encontre o que você busca..."}
            </h2>
          </MainTitle>
          <ProductContainer>
            {this.props.products.data &&
              this.props.products.data.map(product => (
                <Product key={product.id}>
                  <img
                    src={
                      "https://www.medicamentosbrasil.com.br/cmsstatic/product/24551/mockup_imagem.png?browse"
                    }
                    alt="imagem do produto"
                  />

                  <span className="product-title">
                    Isotretinoina 400 mg - Generico
                  </span>
                  <span className="product-price">
                    De: <span>R$35.90</span>
                  </span>
                  <span className="product-with-discount">
                    Por: <span>R$ R$25.90</span>
                  </span>
                </Product>
              ))}
          </ProductContainer>
        </InfiniteScroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  error: state.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
