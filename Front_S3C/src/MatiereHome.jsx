// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// const MatiereHome = () => {
// const [data, setData] = useState([])

//     useEffect(()=>{
// axios.get('http://localhost:3000/Matiere')
// .then(res => setData(res.data))
// .catch(err => console.log(err));
//     }, [])

//     return (
//         <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
//             <h1>Liste des Matieres </h1>
//             <div className="w-105 rounded bg-white border shadow p-4">

//                 <div className="d-flex justify-content-end">
//                 <Link to="/MatiereCreate" className='btn btn-success'>Ajouter +</Link>

//                 </div>
// <table className='table table-stipend'>
//     <thead>
//         <tr>
//             <th>id</th>
//             <th>code</th>
//             <th>nom</th>
//             <th>credits</th>
//             <th>semestre</th>
//             <th>filiere</th>
//         </tr>
//     </thead>
//     <tbody>
// {
//     data.map((d,i)=>(
//         <tr key={i}>
//             <td>{d.id}</td>
//             <td>{d.code}</td>
//             <td>{d.nom}</td>
//             <td>{d.credits}</td>
//             <td>{d.semestre}</td>
//             <td>{d.filiere}</td>
//             <td>
//                 <button className='btn btn-sm btn-info me-2'>lire</button>

//                 <button className='btn btn-sm btn-primary me-2'>Modifier</button>
//                 <button className='btn btn-sm btn-danger'>supprimer</button>

//             </td>





//         </tr>
//     )
//     )
// }
        
//     </tbody>
// </table>

//             </div>
//         </div>
//     );
// }

// export default MatiereHome;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import MyNavbar from './UNavbar';  // Import the Navbar


const MatiereHome = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showRead, setShowRead] = useState(false);
    const [selectedMatiere, setSelectedMatiere] = useState(null);
    const [formData, setFormData] = useState({ code: '', nom: '', credits: '', semestre: '', filiere: '' });
    const [search, setSearch] = useState({ semestre: '', filiere: '' });

    useEffect(() => {
        axios.get('http://localhost:3000/Matiere')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleEditShow = (matiere) => {
        setSelectedMatiere(matiere);
        setFormData(matiere);
        setShowEdit(true);
    };
    const handleEditClose = () => setShowEdit(false);

    const handleReadShow = (matiere) => {
        setSelectedMatiere(matiere);
        setShowRead(true);
    };
    const handleReadClose = () => setShowRead(false);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/Matiere/${id}`)
            .then(() => setData(data.filter(item => item.id !== id)))
            .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Matiere', formData)
            .then(res => {
                setData([...data, res.data]);
                handleClose();
            })
            .catch(err => console.log(err));
    };
    const handleSearchChange = (e) => {
        setSearch({ ...search, [e.target.name]: e.target.value });
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/Matiere/${selectedMatiere.id}`, formData)
            .then(res => {
                setData(data.map(item => (item.id === selectedMatiere.id ? res.data : item)));
                handleEditClose();
            })
            .catch(err => console.log(err));
    };

    const filteredData = data.filter(matiere => 
        (search.semestre === '' || String(matiere.semestre) === search.semestre) &&
        (search.filiere === '' || matiere.filiere.includes(search.filiere))
    );

    return (
        <div >
        <MyNavbar />  
        <div className="container mt-5 pt-5"> 
           
           
 
        <div id='List' className='d-flex flex-column justify-content-center align-items-center bg-light w-500'>
            <h1>Liste des Matières</h1>
            <div id='ListChild' className="w-300 rounded bg-white border shadow p-4">
            <div id='ajouter' className="d-flex justify-content-end">
                    <Button  className='btn btn-success' onClick={handleShow}>Ajouter +</Button>
                </div>
            <div className='d-flex'>
                        <Form.Select name='semestre' onChange={handleSearchChange} className='me-2'>
                            <option value=''>Rechercher par semestre</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </Form.Select>
                        <Form.Control type='text' name='filiere' placeholder='Rechercher par filière' value={search.filiere} onChange={handleSearchChange} />
                    </div>

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Crédits</th>
                            <th>Semestre</th>
                            <th>Filière</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.code}</td>
                                <td>{d.nom}</td>
                                <td>{d.credits}</td>
                                <td>{d.semestre}</td>
                                <td>{d.filiere}</td>
                                <td>
                                    <button className='btn btn-sm btn-info me-2' onClick={() => handleReadShow(d)}>Lire</button>
                                    <button className='btn btn-sm btn-primary me-2' onClick={() => handleEditShow(d)}>Modifier</button>
                                    <button className='btn btn-sm btn-danger' onClick={() => handleDelete(d.id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Modal for adding new Matière */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une Matière</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type='text' name='code'  onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type='text' name='nom'  onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>credits</Form.Label>
                            <Form.Control type='number' name='credits'  onChange={handleChange} required />
                        </Form.Group>
                        
                        <Form.Group className='mb-3'>
                            <Form.Label>semestre</Form.Label>
                            <Form.Select name='semestre' onChange={handleChange} className='me-2'>
                            <option value=''> semestres</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>filiere</Form.Label>
                            <Form.Control type='txt' name='filiere'  onChange={handleChange} required />
                        </Form.Group>
                        <Button variant='primary' type='submit'>Ajouter</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* Modal for reading Matière */}
            <Modal show={showRead} onHide={handleReadClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Détails de la Matière</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedMatiere && (
                        <div>
                            <p><strong>Code:</strong> {selectedMatiere.code}</p>
                            <p><strong>Nom:</strong> {selectedMatiere.nom}</p>
                            <p><strong>Crédits:</strong> {selectedMatiere.credits}</p>
                            <p><strong>semestre:</strong> {selectedMatiere.semestre}</p>
                            <p><strong>filiere:</strong> {selectedMatiere.filiere}</p>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
            {/* Modal for editing Matière */}
            <Modal show={showEdit} onHide={handleEditClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier une Matière</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group className='mb-3'>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type='text' name='code' value={formData.code} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type='text' name='nom' value={formData.nom} onChange={handleChange} required />
                        </Form.Group>
                        <Button variant='primary' type='submit'>Modifier</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>

        </div>
        </div>
    );
}

export default MatiereHome;
