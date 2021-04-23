import React, { Component } from "react";
import Navbar from '../components/nav/Navbar';
import Tables from '../components/table/Tables';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './style/pages.css'
import {
  Container
} from 'reactstrap'

export default class dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container className="themed-container" fluid={true}>
          <Tables/>
        </Container>

    </>
    );
  }
}
