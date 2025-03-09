import React from 'react';
import { Nav } from 'react-bootstrap';
import { House, Book, Gear } from 'react-bootstrap-icons';  // Icônes Bootstrap

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column p-3 bg-violet-blue text-white">
            <h4 className="text-center">Dashboard</h4>
            <hr />
            <Nav className="flex-column">
                <Nav.Link href="#" className="text-white">
                    <House className="me-2" /> Accueil
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                    <Book className="me-2" /> Matières
                </Nav.Link>
                <Nav.Link href="#" className="text-white">
                    <Gear className="me-2" /> Paramètres
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
