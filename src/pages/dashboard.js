import React, { Component } from "react";
import Navbar from '../components/nav/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style/pages.css'
import {
  Container
} from 'reactstrap'

export default class dashboard extends Component {
  render() {
    return (
      <body>
      <Container>
        <Navbar />
      </Container>

      </body>
    );
  }
}
