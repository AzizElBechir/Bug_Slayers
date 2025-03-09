import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import MyNavbar from "./UNavbar";

const GroupHome = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showRead, setShowRead] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [formData, setFormData] = useState({ nom: "", semestre: "", filiere: "" });
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3000/Groupes")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setFormData({ nom: "", semestre: "", filiere: "" });
    };

    const handleEditShow = (group) => {
        setSelectedGroup(group);
        setFormData(group);
        setShowEdit(true);
    };

    const handleEditClose = () => {
        setShowEdit(false);
        setSelectedGroup(null);
    };

    const handleReadShow = (group) => {
        setSelectedGroup(group);
        setShowRead(true);
    };

    const handleReadClose = () => {
        setShowRead(false);
        setSelectedGroup(null);
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:3000/Groupes/${id}`)
            .then(() => setData(data.filter((item) => item.id !== id)))
            .catch((err) => console.log(err));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nom || !formData.semestre || !formData.filiere) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const newGroup = { ...formData, id: data.length + 1 };

        axios
            .post("http://localhost:3000/Groupes", newGroup)
            .then((res) => {
                setData([...data, res.data]);
                handleClose();
            })
            .catch((err) => console.log(err));
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!formData.nom || !formData.semestre || !formData.filiere) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        axios
            .put(`http://localhost:3000/Groupes/${selectedGroup.id}`, formData)
            .then((res) => {
                setData(data.map((item) => (item.id === selectedGroup.id ? res.data : item)));
                handleEditClose();
            })
            .catch((err) => console.log(err));
    };

    const filteredData = data.filter(
        (group) =>
            group.nom.toLowerCase().includes(search.toLowerCase()) ||
            group.semestre.toLowerCase().includes(search.toLowerCase()) ||
            group.filiere.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <MyNavbar />
            <div className="container mt-5 pt-5">
                <div className="d-flex flex-column justify-content-center align-items-center bg-light w-500">
                    <h1>Gestion des Groupes</h1>
                    <div id="ListChild" className="w-300 rounded bg-white border shadow p-4">
                        <div id="ajouter" className="d-flex justify-content-end">
                            <Button className="btn btn-success mb-3" onClick={handleShow}>
                                Ajouter +
                            </Button>
                        </div>
                        <Form.Control
                            type="text"
                            placeholder="Rechercher par nom, semestre ou filière"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <table className="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nom</th>
                                    <th>Semestre</th>
                                    <th>Filière</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.nom}</td>
                                        <td>{d.semestre}</td>
                                        <td>{d.filiere}</td>
                                        <td>
                                            <button className="btn btn-sm btn-info me-2" onClick={() => handleReadShow(d)}>
                                                Lire
                                            </button>
                                            <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditShow(d)}>
                                                Modifier
                                            </button>
                                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(d.id)}>
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Modal pour Ajouter un groupe */}
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Ajouter un Groupe</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control type="text" name="nom" onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Semestre</Form.Label>
                                        <Form.Control type="text" name="semestre" onChange={handleChange} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Filière</Form.Label>
                                        <Form.Control type="text" name="filiere" onChange={handleChange} required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Ajouter
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>

                        {/* Modal pour Lire un groupe */}
                        <Modal show={showRead} onHide={handleReadClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Détails du Groupe</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {selectedGroup && (
                                    <div>
                                        <p><strong>ID:</strong> {selectedGroup.id}</p>
                                        <p><strong>Nom:</strong> {selectedGroup.nom}</p>
                                        <p><strong>Semestre:</strong> {selectedGroup.semestre}</p>
                                        <p><strong>Filière:</strong> {selectedGroup.filiere}</p>
                                    </div>
                                )}
                            </Modal.Body>
                        </Modal>

                        {/* Modal pour Modifier un groupe */}
                        <Modal show={showEdit} onHide={handleEditClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modifier un Groupe</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={handleUpdate}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Semestre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="semestre"
                                            value={formData.semestre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Filière</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="filiere"
                                            value={formData.filiere}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Modifier
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupHome;
