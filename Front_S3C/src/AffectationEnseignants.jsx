import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import MyNavbar from "./UNavbar";

const AffectationEnseignants = () => {
    const [groupe, setGroupe] = useState('');
    const [matiere, setMatiere] = useState('');
    const [typeEnseignement, setTypeEnseignement] = useState('');
    const [enseignant, setEnseignant] = useState('');
    const [affectations, setAffectations] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (groupe && matiere && typeEnseignement && enseignant) {
            const nouvelleAffectation = { groupe, matiere, typeEnseignement, enseignant };
            setAffectations([...affectations, nouvelleAffectation]);
            // Réinitialiser les champs
            setGroupe('');
            setMatiere('');
            setTypeEnseignement('');
            setEnseignant('');
        }
    };

    return (
      
        <Container className="mt-5">
            <MyNavbar />
            <h2 className="text-center mb-4">Affectation des Enseignants</h2>
            <Form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
                <Form.Group className="mb-3">
                    <Form.Label>Groupe</Form.Label>
                    <Form.Control as="select" value={groupe} onChange={(e) => setGroupe(e.target.value)} required>
                        <option value="">Sélectionner un groupe</option>
                        <option value="Groupe A">Groupe A</option>
                        <option value="Groupe B">Groupe B</option>
                        <option value="Groupe C">Groupe C</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Matière</Form.Label>
                    <Form.Control as="select" value={matiere} onChange={(e) => setMatiere(e.target.value)} required>
                        <option value="">Sélectionner une matière</option>
                        <option value="Mathématiques">Mathématiques</option>
                        <option value="Physique">Physique</option>
                        <option value="Chimie">Chimie</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Type d'Enseignement</Form.Label>
                    <Form.Control as="select" value={typeEnseignement} onChange={(e) => setTypeEnseignement(e.target.value)} required>
                        <option value="">Sélectionner un type</option>
                        <option value="CM">CM</option>
                        <option value="TD">TD</option>
                        <option value="TP">TP</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enseignant</Form.Label>
                    <Form.Control as="select" value={enseignant} onChange={(e) => setEnseignant(e.target.value)} required>
                        <option value="">Sélectionner un enseignant</option>
                        <option value="Professeur 1">Professeur 1</option>
                        <option value="Professeur 2">Professeur 2</option>
                        <option value="Professeur 3">Professeur 3</option>
                    </Form.Control>
                </Form.Group>

                <Button style={{ backgroundColor: "#8A2BE2", border: "1px solid #8A2BE2", color: "white" }} variant="primary" type="submit">Affecter</Button>
            </Form>

            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>Groupe</th>
                        <th>Matière</th>
                        <th>Type d'Enseignement</th>
                        <th>Enseignant</th>
                    </tr>
                </thead>
                <tbody>
                    {affectations.map((affectation, index) => (
                        <tr key={index}>
                            <td>{affectation.groupe}</td>
                            <td>{affectation.matiere}</td>
                            <td>{affectation.typeEnseignement}</td>
                            <td>{affectation.enseignant}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AffectationEnseignants;