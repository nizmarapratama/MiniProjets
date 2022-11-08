import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from '../utils/constants'
import { Link } from "react-router-dom";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
      const pesanan = {
          total_bayar: totalBayar,
          menus: this.props.keranjangs
      }

      axios.post(API_URL+"pesanans", pesanan).then((res) => {
        console.log(res.data);
          this.props.history.push('/sukses')
      })
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
      {/* Web */}
      <div className="fixed-bottom d-none d-md-block">
          <Row>
            <Col md={{ span: 3, offset: 9 }} className="px-4">
              <h4>
                <div className="float-right">
                  Total Harga : <strong className="ms-2">Rp. {numberWithCommas(totalBayar)}</strong>
                </div>
              </h4>
              <div className="d-grid gap-4">
              <Button variant="primary" size="lg" className="mb-2 mt-2 me-3" onClick={() => this.submitTotalBayar(totalBayar)} as={Link}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <Link to="/sukses" className="text-white"><strong>BAYAR</strong></Link>
                </Button>{" "}
              </div>
            </Col>
          </Row>
        </div>

      {/* Mobile  */}
      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Harga :{" "}
              <strong className="float-right mr-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h4>
            <Button
              variant="primary"
              block
              className="mb-2 mt-4 mr-2"
              size="lg"
              onClick={() => this.submitTotalBayar(totalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}