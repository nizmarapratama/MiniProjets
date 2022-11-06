import React, { Component } from "react"
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus, NavbarComponents } from "./components";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],
       categoryYangDipilih: 'Makanan'
    }
  }

  componentDidMount() {
    axios
      .get(API_URL+"products?category.nama="+this.state.categoryYangDipilih)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Error yaa ", error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoryYangDipilih: value,
      menus: []
    })

    axios
    .get(API_URL+"products?category.nama="+value)
    .then(res => {
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error => {
      console.log("Error yaa ", error);
    })

  }

  render() {
    const { menus, categoryYangDipilih } = this.state
    return (
      <div className="App">
      <NavbarComponents />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories changeCategory={this.changeCategory} categoryYangDipilih={categoryYangDipilih} />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
              <Row>
                {menus && menus.map((menu) => (
                  <Menus 
                  key={menu.id}
                    menu={menu}
                  />
                  ))}
              </Row>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}

