import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Calendar from 'react-calendar'; // Assurez-vous d'installer react-calendar
import 'react-calendar/dist/Calendar.css'; // Styles du calendrier

const VisualisationEmploisDuTemps = () => {
    const [date, setDate] = useState(new Date());
    const [groupe, setGroupe] = useState('');
    const [enseignant, setEnseignant] = useState('');

    const emploisDuTemps = [
        { date: '2023-03-06', groupe: 'Groupe A', enseignant: 'Professeur 1', matiere: 'Mathématiques', horaire: '10h-12h' },
        { date: '2023-03-07', groupe: 'Groupe A', enseignant: 'Professeur 2', matiere: 'Physique', horaire: '14h-16h' },
        { date: '2023-03-08', groupe: 'Groupe B', enseignant: 'Professeur 1', matiere: 'Chimie', horaire: '10h-12h' },
        // Ajoutez d'autres emplois du temps
    ];

    const filteredEmplois = emploisDuTemps.filter(item => {
        const isDateMatch = item.date === date.toISOString().split('T')[0];
        const isGroupeMatch = groupe ? item.groupe === groupe : true;
        const isEnseignantMatch = enseignant ? item.enseignant === enseignant : true;
        return isDateMatch && isGroupeMatch && isEnseignantMatch;
    });

    const handleDownload = () => {
        // Logique pour télécharger le planning en Excel ou PDF
        alert('Fonction de téléchargement à implémenter');
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Visualisation des Emplois du Temps</h2>
            <Form className="mb-4">
                <Form.Group controlId="groupeSelect">
                    <Form.Label>Groupe</Form.Label>
                    <Form.Control as="select" value={groupe} onChange={(e) => setGroupe(e.target.value)}>
                        <option value="">Tous les groupes</option>
                        <option value="Groupe A">Groupe A</option>
                        <option value="Groupe B">Groupe B</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="enseignantSelect">
                    <Form.Label>Enseignant</Form.Label>
                    <Form.Control as="select" value={enseignant} onChange={(e) => setEnseignant(e.target.value)}>
                        <option value="">Tous les enseignants</option>
                        <option value="Professeur 1">Professeur 1</option>
                        <option value="Professeur 2">Professeur 2</option>
                    </Form.Control>
                </Form.Group>
            </Form>

            <Calendar onChange={setDate} value={date} />

            <div className="mt-4">
                <Button variant="primary" onClick={handleDownload}>
                    Télécharger le Planning
                </Button>
            </div>

            <h3 className="mt-4">Emplois du Temps</h3>
            <ul>
                {filteredEmplois.map((item, index) => (
                    <li key={index}>
                        {item.date} - {item.groupe} - {item.enseignant} - {item.matiere} - {item.horaire}
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default VisualisationEmploisDuTemps;