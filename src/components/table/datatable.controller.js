import {  Button } from 'reactstrap'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom'
import Tables from './Tables'

const column=[
  {
    name : 'ID',
    selector : 'id',
    sortable : true
  },
  {
    name : 'Nombre',
    selector : 'Nombre',
    sortable : true
  },
  {
    name : 'Apellido',
    selector : 'Apellido',
    sortable : true
  },
  {
    name : 'Identificacion',
    selector : 'Identificacion',
    sortable : true
  },
  {
    name : 'Rol',
    selector : 'Rol',
    sortable : true
  },
  {
    name : 'Estado',
    selector : 'Estado',
    sortable : true
  },
  {
    name : 'Telefono',
    selector : 'Telefono',
    sortable : true
  },
  {
    name : 'Contraseña',
    selector : 'Contraseña',
    sortable : true
  },
  {
    name : 'email',
    selector : 'email',
    sortable : true
  },
  {
    name: 'Acciones',
    selector: 'Acciones',
    cell: row => <div> <Button onClick = {Tables.Edit}><i onClick = {Tables.Edit}><FaIcons.FaTrashAlt/></i></Button>{"    "}<i onClick = {Tables.Delete}><FaIcons.FaPencilAlt/></i></div>,
  }
]

const paginacionOption = {
  rowsPerPageText: 'Filas por página:',
  rangeSeparatorText: 'de',
  noRowsPerPage: false,
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}


 export {column, paginacionOption};
