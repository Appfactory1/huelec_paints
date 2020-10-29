import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signOutreduce } from '../Actions/userActions';

function NavBar(props){
    const handleSubmit = async event => {
        event.preventDefault();
        dispatch(signOutreduce());
    };

    const userSignin = useSelector((state) => state.userSignin);
    const {user} = userSignin;
    const dispatch = useDispatch();
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <NavDropdown title="Interior Paints" id="collasible-nav-dropdown">
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">Matt Emulsion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Superior Emulsion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Superior Emulsion Special Shades</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Classic Emulsion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Texture Finish</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Plastic Emulsion</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Matt Enamel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Wall Sealer</NavDropdown.Item>                    
                    <NavDropdown.Item href="#action/3.3">Under Coat</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Wall Putty</NavDropdown.Item>                    
                    <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown title="Exterior Paints" id="collasible-nav-dropdown">
                    <NavDropdown.Divider />                    
                    <NavDropdown.Item href="#action/3.1">Weather Shield</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Roof Master</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Synthetic Enamel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Matt Enamel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Metallic Finish</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Aluminium Silver</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Exterior Primer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Exterior Wall Putty</NavDropdown.Item>                    
                    <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown title="Base Preparations" id="collasible-nav-dropdown">
                    <NavDropdown.Divider />                    
                    <NavDropdown.Item href="#action/3.1">Exterior Wall Putty</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Interior Wall Putty</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Exterior Primer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Super Primer</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Primer Red Oxide</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Synthetic Undercoat</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown title="Metallic Finishes" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Synthetic Enamel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Matt Enamel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Synthetic Varnishes</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Aluminium Silver</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown title="Industrial Coatings" id="collasible-nav-dropdown">
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">Primer Red Oxide</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Under Coat</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Metallic Finish</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Aluminium Silver</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Matt Enamel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Synthetic Enamel</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Road Marking</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Synthetic Hammer Finish</NavDropdown.Item>
                    <NavDropdown.Divider />
                </NavDropdown>                
                <Nav.Link href="PaintCalculator">Paint Calculator</Nav.Link>
                <Nav.Link href="#About">About Us</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#ContactUs"><h5>Contact us</h5><p>0321-4606877</p></Nav.Link>
                </Nav>
                {user ? <Button onClick={handleSubmit}> Sign Out </Button> :
                <Nav.Link href='/signin'>Sign In</Nav.Link>}
                {user ? <Nav.Link href='/categorieslist'>Category Management</Nav.Link> : <span></span>}
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;