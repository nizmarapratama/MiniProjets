import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <h2 className="mt-2 mb-2"><strong>CASHIER</strong>restaurant </h2>
        <Image src="assets/images/tampilan-about.jpg" width="500" />
        <Container className="mt-2 mr-2 ml-2 text-center">
        <p>Kasir App ini merupakan website untuk menghitung transaksi antara konsumen dan toko, untuk memudahkan menghitung pesanan yang dibeli oleh konsumen.</p>
        </Container>
      </div>
    );
  }
}
