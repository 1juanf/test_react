import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button } from 'reactstrap'

class Formulario extends React.Component{
  state={
    Nombre: '',
    Apellido: '',
    Identificacion: '',
    Rol: '',
    Estado:'',
    Telefono:'',
    Contraseña: '',
    email: '',
    Datos: [],
    columnas:[]
  }
  onChange=async e=>{
    e.persist();
    await this.setState({
      Nombre: e.target.value,
      Apellido: e.target.value,
      Identificacion: e.target.value,
      Rol: e.target.value,
      Estado:e.target.value,
      Telefono:e.target.value,
      Contraseña: e.target.value,
      email: e.target.value });
    this.filtrarElementos();
  }

  // filtrarElementos=()=>{
  //    var search=tablaCampeones.filter(item=>{
  //      if(item.año.toString().includes(this.state.busqueda) ||
  //      item.campeon.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(this.state.busqueda) ||
  //      item.subcampeon.toLowerCase().includes(this.state.busqueda)
  //      ){
  //        return item;
  //      }
  //    });
  //    this.setState({campeones: search});
  //  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Nombre</Label>
          <Input
            type="text"
            placeholder="Nombre"
            className="textField"
            name="Nombre"
            value={this.state.Nombre}/>
        </FormGroup>
        <FormGroup>
          <Label >Apellido</Label>
          <Input
            type="text"
            name="Apellido"
            className="textField"
            value={this.state.Apellido}
          />
        </FormGroup>
        <FormGroup>
        <Label >Identificación (C.C)</Label>
          <Input
            type="text"
            name="Identificacion"
            className="textField"
            value={this.state.Identificacion}
          />
        </FormGroup>
        <FormGroup>
          <Label >Rol asociado</Label>
          <Input
            type="text"
            name="Rol"
            className="textField"
            value={this.state.Rol}
          />
        </FormGroup>
        <FormGroup>
          <Label >Estado</Label>
          <Input
            type="text"
            name="Estado"
            className="textField"
            value={this.state.Estado}
          />
        </FormGroup>
        <FormGroup>
          <Label>Contraseña</Label>
          <Input
            type="text"
            name="Contraseña"
            id="Contraseña"
            className="textField"
            value={this.state.Contraseña}
          />
        </FormGroup>
        <FormGroup>
          <Label>Teléfono</Label>
          <Input
            type="Telefono"
            name="Telefono"
            id="Telefono"
            className="textField"
            value={this.state.Telefono}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            className="textField"
            value={this.state.email}
          />
        </FormGroup>
        <Button onClick={this.onChange}>Filtrar</Button>
        <Button >Limpiar</Button>
      </Form>
    );
  }
}

export default Formulario;
