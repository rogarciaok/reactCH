import React from 'react';
import { Navbar, NavItem, NavDropdown,MenuItem,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Carrito from './CartWidget.js';
const NavBar = () => {
   return (





    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Autos Guido Guidi</Navbar.Brand>
  <a class="navbar-brand" href="#">
      <img src={./images/1.png}/>
  </a>
        <Nav className="mr-auto">
            <Nav.Link href="#Volkswagen">Volkswagen</Nav.Link>
      <Nav.Link href="#Ford">Ford</Nav.Link>
      <Nav.Link href="#Audi">Audi</Nav.Link>


 <Carrito/>
       </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Busqueda" className="mr-sm-2" />
      <Button variant="outline-info">Busqueda</Button>
    </Form>
  </Navbar>





    )
}






export default NavBar;