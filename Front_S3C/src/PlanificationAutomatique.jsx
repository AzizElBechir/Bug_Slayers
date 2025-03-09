import React, { useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import MyNavbar from "./UNavbar";

const PlanificationAutomatique = () => {
    const [planning, setPlanning] = useState([]);

    const handlePlanification = () => {
        // Logique de génération d'emploi du temps
        const emploiDuTemps = [
            { groupe: 'Groupe A', enseignant: 'Professeur 1', matiere: 'Mathématiques', horaire: 'Lundi 10h-12h' },
            { groupe: 'Groupe A', enseignant: 'Professeur 2', matiere: 'Physique', horaire: 'Mardi 14h-16h' },
            { groupe: 'Groupe B', enseignant: 'Professeur 1', matiere: 'Chimie', horaire: 'Mercredi 10h-12h' },
            { groupe: 'Groupe B', enseignant: 'Professeur 3', matiere: 'Mathématiques', horaire: 'Jeudi 14h-16h' },
            // Ajoutez d'autres entrées selon vos besoins
        ];
        setPlanning(emploiDuTemps);
    };

    return (
        <Container className="mt-5">
            <MyNavbar />
            <h2 className="text-center mb-4">Planification Automatique</h2>
            <div className="text-center mb-4">
                <Button variant="primary" onClick={handlePlanification}>
                    Générer l'Emploi du Temps
                </Button>
            </div>

            {planning.length > 0 && (
                <Table striped bordered hover className="mt-4">
                    <thead>
                        <tr>
                            <th>Groupe</th>
                            <th>Enseignant</th>
                            <th>Matière</th>
                            <th>Horaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planning.map((item, index) => (
                            <tr key={index}>
                                <td>{item.groupe}</td>
                                <td>{item.enseignant}</td>
                                <td>{item.matiere}</td>
                                <td>{item.horaire}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default PlanificationAutomatique;