// import React from 'react';
// import { Container, Button, Row, Col } from 'react-bootstrap';
// import MyNavbar from './Navbar'; // Assurez-vous que vous avez votre Navbar existante dans le projet.
// import './HomePage.css'; // Import du fichier CSS personnalisé

// const HomePage = () => {
//     return (
//         <div>
//             {/* Navbar */}
//             <MyNavbar />

//             {/* Contenu principal */}
//             <Container className="homepage-container">
//                 <h1>Bienvenue dans l'outil de planification automatique des emplois du temps de SupNum</h1>
//                 <p>
//                     Ce projet a pour objectif de faciliter la gestion et la planification des emplois du temps pour les matières et les enseignants de SupNum.
//                 </p>
//                 <p>
//                     L'outil permet de planifier les emplois du temps en tenant compte des disponibilités des enseignants, des créneaux de cours, des groupes d'étudiants, et bien plus encore.
//                 </p>

//                 <h3>Fonctionnalités principales :</h3>
//                 <ul>
//                     <li><strong>Gestion des enseignants :</strong> Ajouter et gérer les enseignants avec leurs identifiants et noms.</li>
//                     <li><strong>Gestion du calendrier :</strong> Définir les créneaux horaires pour chaque semaine et ajouter ou supprimer des jours ou des créneaux spécifiques.</li>
//                     <li><strong>Gestion des disponibilités :</strong> Permet de renseigner les créneaux disponibles pour chaque enseignant.</li>
//                     <li><strong>Gestion des charges hebdomadaires :</strong> Préciser les séances à planifier par matière (CM, TD, TP).</li>
//                     <li><strong>Gestion des groupes :</strong> Gérer les groupes par semestre et les matières associées à chaque groupe.</li>
//                     <li><strong>Affectation des enseignants :</strong> Affecter des enseignants aux groupes et aux matières en fonction des créneaux horaires.</li>
//                     <li><strong>Planification automatique :</strong> Générer automatiquement un emploi du temps en respectant toutes les contraintes grâce à un programme linéaire.</li>
//                     <li><strong>Exploitation du planning :</strong> Télécharger l'emploi du temps généré en formats Excel et PDF.</li>
//                 </ul>

//                 <h4>Comment ça fonctionne ?</h4>
//                 <Row>
//                     <Col sm={12} md={6}>
//                         <p>
//                             L'outil prend en compte tous les éléments nécessaires pour créer un emploi du temps cohérent et sans conflits.
//                             <br />
//                             Une fois la planification effectuée, vous pouvez visualiser le planning par groupe ou par enseignant.
//                         </p>
//                     </Col>
//                     <Col sm={12} md={6}>
//                         <Button variant="primary" href="/planification" className="mb-3">
//                             Accéder à la planification automatique
//                         </Button>
//                     </Col>
//                 </Row>

//                 <h5>Bonus :</h5>
//                 <ul>
//                     <li>Planification maximale des cours en cas de contraintes impossibles.</li>
//                     <li>Fixation manuelle de créneaux pour certaines matières et groupes.</li>
//                 </ul>
//             </Container>
//         </div>
//     );
// };

// export default HomePage;

import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ajouter un fichier CSS pour le style

const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar expand="lg" className="navbar-custom">
                <Container>
                    <Navbar.Brand href="#">SupNum Plannification</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#">Solutions</Nav.Link>
                            <Nav.Link href="#">Planification Automatique</Nav.Link>
                            <Nav.Link href="#">Charges Hebdomadaires</Nav.Link>
                            <Nav.Link href="#">Ressources</Nav.Link>
                        </Nav>
                        <Button id='Seconnect' variant="outline-primary" className="mx-2">Se connecter</Button>
                        <Button variant="primary" id='sinscriebtn'>S'inscrire</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Section principale */}
            <Container className="home-container">
            <div id='Bienvenu'>
                <h1 className="text-center"><strong>Bienvenue dans l'outil de planification automatique </strong></h1>
                <h1 className="text-center"><strong>des emplois du temps de SupNum</strong></h1>
            </div>
                        {/* <img src="../public/acceuil.png" alt="Personne avec laptop" className="main-image" /> */}
                    
                <Row id='row' className="align-items-center">
                {/* <h2 className='justify-content-center'>Bienvenue dans l'outil de planification automatique des emplois du temps de SupNum</h2> */}
                    {/* Texte */}
                    <Col md={6}>
                        <h1 className="title">Créer un emploi du temps automatiquement</h1>
                        <p className="subtitle">
                            Générez facilement un planning optimisé en quelques clics grâce à notre solution intelligente.
                        </p>
                        <Button id='commencer' variant="primary" size="lg">Commencer</Button>
                    </Col>

                    {/* Image */}
                    <Col md={6} className="text-center">
                        <img src="../public/acceuil.png" alt="Personne avec laptop" className="main-image" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
