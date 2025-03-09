// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const MyNavbar = () => {
//     return (
//         <Navbar style={{ backgroundColor: '#8A2BE2' }} variant="dark" expand="lg" fixed="top">
//             <Container>
//                 <Navbar.Brand href="#">Gestion des Matières</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link ><strong>Accueil</strong></Nav.Link>
//                         <Nav.Link href="#"><strong>Matières</strong></Nav.Link>
//                         <Nav.Link href="#"><strong>Contact</strong></Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default MyNavbar;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link pour la navigation

const UNavbar = () => {
    return (
        <Navbar style={{ backgroundColor: '#8A2BE2' }} variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">SupNum Plannification</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/"><strong>Accueil</strong></Nav.Link>
                        <Nav.Link as={Link} to="/MatiereHome"><strong>Matières</strong></Nav.Link>
                        {/* <Nav.Link as={Link} to="/MatiereHome"><strong>Matières</strong></Nav.Link> */}
                        <Nav.Link as={Link} to="/GroupHome "><strong>Groupes </strong></Nav.Link>
                        <Nav.Link as={Link} to="/EnseignantHome "><strong>EnseignantHome </strong></Nav.Link>

                        <Nav.Link as={Link} to="/contact"><strong>Contact</strong></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default UNavbar;

