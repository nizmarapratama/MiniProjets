import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <h2 className="mt-2 mb-3"><strong>About</strong></h2>
        <Container className="mt-2 mr-2 ml-2 text-center">
        <p>Cashier Restaurant ini merupakan website untuk menghitung transaksi antara konsumen dan toko, untuk memudahkan menghitung pesanan yang dibeli oleh konsumen. Website ini dibuat agar pelanggan yang ingin memilih Menu dapat melihat terlebih dahulu sebelum memesan dan mempercepat antrian.</p>
        </Container>
      </div>
    );
  }
}
