// import React,{useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Data} from './data_table'
import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Card,
  Row,
  Col,
  Button,
  Container,
  Form,
  Label,
  Input
} from "reactstrap";


class Tables extends React.Component {
  state = {
    data:[],
    modalActualizar: false,
    modalInsertar: false,
    Nombre: '',
    Apellido: '',
    Identificacion: '',
    Rol: '',
    Estado:'',
    Telefono:'',
    Contraseña: '',
    email: '',
    columnas:[],
    form: {
      id: "",
      Nombre: "",
      Apellido: "",
      Identificacion: "",
      Rol: "",
      Estado:"",
      Telefono:"",
      Contraseña: "",
      email: "",
    },
  };

// search
  FilterItems=()=>{
    var search = Data.filter(item=>{
      if(item.Nombre.includes(this.state.Nombre) ||
      item.Apellido.includes(this.state.Apellido) ||
      item.Identificacion.includes(this.state.Identificacion)||
      item.Rol.includes(this.state.Rol)||
      item.Estado.includes(this.state.Estado)||
      item.Telefono.includes(this.state.Telefono)||
      item.Contraseña.includes(this.state.Contraseña)||
      item.email.includes(this.state.email))
        {
          return item;
        }
      });
      this.setState({Datos: search});
      console.log(this.state.Datos);
    }

    onChange = async e=>{
        e.persist();
        await this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
      }

//Modal
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  createIndex=()=>{
    var i = 1;
      Data.map(item =>{
        item["id"]=i;
        i++;
      })
  }
   componentDidMount(){
     this.createIndex();
     this.setState({data: Data});
   }

  render() {

    return (
      <>
        <Container>
            <br />
          <Row>

            <Col sm="10">
              <Container>
                <br />
                  <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
                  <br />
                  <br />
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Identificacion</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Teléfono</th>
                        <th>Contraseña</th>
                        <th>email</th>
                        <th>Acción</th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.state.data.map((dato) => (
                        <tr key={dato.id}>
                          <td>{dato.id}</td>
                          <td>{dato.Nombre}</td>
                          <td>{dato.Apellido}</td>
                          <td>{dato.Identificacion}</td>
                          <td>{dato.Rol}</td>
                          <td>{dato.Estado}</td>
                          <td>{dato.Telefono}</td>
                          <td>{dato.Contraseña}</td>
                          <td>{dato.email}</td>

                          <td>
                            <Button
                              color="primary"
                              onClick={() => this.mostrarModalActualizar(dato)}
                            >
                              Editar
                            </Button>{" "}
                            <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
              </Container>
            </Col>
              <Col sm ="3">
                <Card body>
                      <Label>Nombre</Label>
                      <Input
                        type="text"
                        className="textField"
                        name="Nombre"
                        id="Nombre"
                        placeholder="Nombre"
                        value={this.state.Nombre}
                        onChange={this.onChange}
                        />

                      <Label >Apellido</Label>
                      <Input
                        type="text"
                        name="Apellido"
                        id="Apellido"
                        className="textField"
                        placeholder="Apellido"
                        value={this.state.Apellido}
                        onChange={this.onChange}
                      />

                    <Label >Identificación (C.C)</Label>
                      <Input
                        type="text"
                        name="Identificacion"
                        id="Identificacion"
                        placeholder="Identificación"
                        className="textField"
                        value={this.state.Identificacion}
                        onChange={this.onChange}
                      />

                      <Label >Rol asociado</Label>
                      <Input
                        type="text"
                        name="Rol"
                        id="Rol"
                        placeholder="Rol"
                        className="textField"
                        value={this.state.Rol}
                        onChange={this.onChange}
                      />

                      <Label >Estado</Label>
                      <Input
                        type="text"
                        name="Estado"
                        id="Estado"
                        placeholder="Estado"
                        className="textField"
                        value={this.state.Estado}
                        onChange={this.onChange}
                      />

                      <Label>Contraseña</Label>
                      <Input
                        type="text"
                        name="Contraseña"
                        placeholder="Contraseña"
                        id="Contraseña"
                        className="textField"
                        value={this.state.Contraseña}
                        onChange={this.onChange}
                      />

                      <Label>Teléfono</Label>
                      <Input
                        type="Telefono"
                        name="Telefono"
                        id="Telefono"
                        placeholder="Telefono"
                        className="textField"
                        value={this.state.Telefono}
                        onChange={this.onChange}
                      />

                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="xxxxxx@email.com"
                        className="textField"
                        value={this.state.email}
                        onChange={this.onChange}
                      />

                    <Button type="btn" onClick={this.FilterItems}>Filtrar</Button>
                    <Button >Limpiar</Button>
                </Card>
              </Col>
          </Row>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombre}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Apellido:
              </label>
              <input
                className="form-control"
                name="Apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Apellido}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Identificación:
              </label>
              <input
                className="form-control"
                name="Identificacion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Identificacion}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Rol:
              </label>
              <input
                className="form-control"
                name="Rol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Rol}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Estado:
              </label>
              <input
                className="form-control"
                name="Estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Estado}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Teléfono:
              </label>
              <input
                className="form-control"
                type="text"
                name="Telefono"
                onChange={this.handleChange}
                value={this.state.form.Telefono}
              />
            </FormGroup>
            <FormGroup>
              <label>
              </label>
              Contraseña:
              <input
                className="form-control"
                name="Contraseña"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Contraseña}
              />
            </FormGroup>
            <FormGroup>
              <label>
              </label>
              email:
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Usuario</h3></div>
          </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>
                 Id:
                </label>

                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data.length+1}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Nombre:
                </label>
                <input
                  className="form-control"
                  name="Nombre"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Apellido:
                </label>
                <input
                  className="form-control"
                  name="Apellido"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Identificación:
                </label>
                <input
                  className="form-control"
                  name="Identificacion"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Rol:
                </label>
                <input
                  className="form-control"
                  name="Rol"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Estado:
                </label>
                <input
                  className="form-control"
                  name="Estado"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>
                  Teléfono:
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="Telefono"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>
                </label>
                Contraseña:
                <input
                  className="form-control"
                  name="Contraseña"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label>
                </label>
                email:
                <input
                  className="form-control"
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

            </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Tables;



// import Datatable from 'react-data-table-component'
// import {column, paginacionOption} from './datatable.controller'
// import Checkbox from '@material-ui/core/Checkbox'
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// // import Formulario from '../form/Formulario'
// import {
//   Card,
//   Row,
//   Col,
//   Button,
//   Container,
//   Form,
//   FormGroup,
//   Label,
//   Input} from 'reactstrap'
//
// //   const paginacionOption = {
// //   rowsPerPageText: 'Filas por página:',
// //   rangeSeparatorText: 'de',
// //   noRowsPerPage: false,
// //   selectAllRowsItem: true,
// //   selectAllRowsItemText: 'Todos'
// // }
//
// class Tables extends React.Component {
//   state={
//       Nombre: '',
//       Apellido: '',
//       Identificacion: '',
//       Rol: '',
//       Estado:'',
//       Telefono:'',
//       Contraseña: '',
//       email: '',
//       Datos: [],
//       columnas:[],
//       Action:false
//     }
//
//     // const [Action]= useState([]);
//
//   Edit=()=>{
//     this.setState({Action:true})
//     console.log(this.state.Action);
//   }
//   Delete=()=>{
//     this.setState({Action:false})
//     console.log(this.state.Action);
//   }
//
//   onChange = async e=>{
//     e.persist();
//     await this.setState({[e.target.name]: e.target.value});
//   }
//
//   SetColumns=()=>{
//     this.setState((state) => {
//     // Importante: lee `state` en vez de `this.state` al actualizar.
//     return {columnas: column}
//   });
//     console.log(this.state.columnas);
//   }
//
//   FilterItems=()=>{
//   var search = Data.filter(item=>{
//     if(item.Nombre.includes(this.state.Nombre) ||
//     item.Apellido.includes(this.state.Apellido) ||
//     item.Identificacion.includes(this.state.Identificacion)||
//     item.Rol.includes(this.state.Rol)||
//     item.Estado.includes(this.state.Estado)||
//     item.Telefono.includes(this.state.Telefono)||
//     item.Contraseña.includes(this.state.Contraseña)||
//     item.email.includes(this.state.email))
//       {
//         return item;
//       }
//     });
//     console.log(search);
//     this.setState({Datos: search});
//     console.log(this.state.Datos);
//   }
//
//   createIndex=()=>{
//     var i = 1;
//       Data.map(item =>{
//         item["id"]=i;
//         i++;
//       })
//   }
//    componentDidMount(){
//      this.createIndex();
//      this.SetColumns();
//      this.setState({Datos: Data});
//    }
//
//   render() {
//     return (
//           <Row xs="2">
//             <Col sm ="9">
//               <Card body>
//                 <Datatable
//                   columns = {column}
//                   data = {this.state.Datos}
//                   title = "Usuarios"
//                   pagination
//                   paginationComponentOptions = {paginacionOption}
//                   />
//               </Card>
//             </Col>
//             <Col sm ="3">
//               <Card body>
//                     <Label>Nombre</Label>
//                     <Input
//                       type="text"
//                       className="textField"
//                       name="Nombre"
//                       id="Nombre"
//                       placeholder="Nombre"
//                       value={this.state.Nombre}
//                       onChange={this.onChange}
//                       />
//
//                     <Label >Apellido</Label>
//                     <Input
//                       type="text"
//                       name="Apellido"
//                       id="Apellido"
//                       className="textField"
//                       placeholder="Apellido"
//                       value={this.state.Apellido}
//                       onChange={this.onChange}
//                     />
//
//                   <Label >Identificación (C.C)</Label>
//                     <Input
//                       type="text"
//                       name="Identificacion"
//                       id="Identificacion"
//                       placeholder="Identificación"
//                       className="textField"
//                       value={this.state.Identificacion}
//                       onChange={this.onChange}
//                     />
//
//                     <Label >Rol asociado</Label>
//                     <Input
//                       type="text"
//                       name="Rol"
//                       id="Rol"
//                       placeholder="Rol"
//                       className="textField"
//                       value={this.state.Rol}
//                       onChange={this.onChange}
//                     />
//
//                     <Label >Estado</Label>
//                     <Input
//                       type="text"
//                       name="Estado"
//                       id="Estado"
//                       placeholder="Estado"
//                       className="textField"
//                       value={this.state.Estado}
//                       onChange={this.onChange}
//                     />
//
//                     <Label>Contraseña</Label>
//                     <Input
//                       type="text"
//                       name="Contraseña"
//                       placeholder="Contraseña"
//                       id="Contraseña"
//                       className="textField"
//                       value={this.state.Contraseña}
//                       onChange={this.onChange}
//                     />
//
//                     <Label>Teléfono</Label>
//                     <Input
//                       type="Telefono"
//                       name="Telefono"
//                       id="Telefono"
//                       placeholder="Telefono"
//                       className="textField"
//                       value={this.state.Telefono}
//                       onChange={this.onChange}
//                     />
//
//                     <Label>Email</Label>
//                     <Input
//                       type="email"
//                       name="email"
//                       id="email"
//                       placeholder="xxxxxx@email.com"
//                       className="textField"
//                       value={this.state.email}
//                       onChange={this.onChange}
//                     />
//
//                   <Button type="btn" onClick={this.FilterItems}>Filtrar</Button>
//                   <Button >Limpiar</Button>
//               </Card>
//             </Col>
//           </Row>
//
//
//
//     );
//   }
// }
//
// export default Tables;
