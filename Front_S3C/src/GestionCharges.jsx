// import React, { useState } from "react";
// import './GestionCharges.css'
// const GestionCharges = () => {
//   const [matiere, setMatiere] = useState("");
//   const [cm, setCM] = useState(0);
//   const [td, setTD] = useState(0);
//   const [tp, setTP] = useState(0);
//   const [charges, setCharges] = useState([]);
//   const [previousConfig, setPreviousConfig] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (matiere) {
//       const newCharge = { matiere, cm, td, tp };
//       setCharges([...charges, newCharge]);
//       setPreviousConfig(newCharge);
//       setMatiere("");
//       setCM(0);
//       setTD(0);
//       setTP(0);
//     }
//   };

//   const applyPreviousConfig = () => {
//     if (previousConfig) {
//       setMatiere(previousConfig.matiere);
//       setCM(previousConfig.cm);
//       setTD(previousConfig.td);
//       setTP(previousConfig.tp);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Gestion des Charges Hebdomadaires</h2>
      
//       <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md mb-4">
//         <div className="mb-2">
//           <label className="block font-medium">Matière :</label>
//           <input
//             type="text"
//             value={matiere}
//             onChange={(e) => setMatiere(e.target.value)}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>
        
//         <div className="flex gap-4 mb-2">
//           <div>
//             <label className="block font-medium">CM :</label>
//             <input
//               type="number"
//               value={cm}
//               onChange={(e) => setCM(parseInt(e.target.value) || 0)}
//               className="w-full p-2 border rounded-md"
//               min="0"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">TD :</label>
//             <input
//               type="number"
//               value={td}
//               onChange={(e) => setTD(parseInt(e.target.value) || 0)}
//               className="w-full p-2 border rounded-md"
//               min="0"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">TP :</label>
//             <input
//               type="number"
//               value={tp}
//               onChange={(e) => setTP(parseInt(e.target.value) || 0)}
//               className="w-full p-2 border rounded-md"
//               min="0"
//             />
//           </div>
//         </div>
        
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//           Ajouter
//         </button>
//         <button type="button" onClick={applyPreviousConfig} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md">
//           Reconduire
//         </button>
//       </form>
      
//       <table className="w-full bg-white shadow-md rounded-md">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2">Matière</th>
//             <th className="p-2">CM</th>
//             <th className="p-2">TD</th>
//             <th className="p-2">TP</th>
//           </tr>
//         </thead>
//         <tbody>
//           {charges.map((charge, index) => (
//             <tr key={index} className="border-t">
//               <td className="p-2">{charge.matiere}</td>
//               <td className="p-2">{charge.cm}</td>
//               <td className="p-2">{charge.td}</td>
//               <td className="p-2">{charge.tp}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GestionCharges;


















// import React, { useState } from "react";
// import { Container, Form, Button, Table } from "react-bootstrap";

// const GestionCharges = () => {
//   const [matiere, setMatiere] = useState("");
//   const [cm, setCM] = useState(0);
//   const [td, setTD] = useState(0);
//   const [tp, setTP] = useState(0);
//   const [charges, setCharges] = useState([]);
//   const [previousConfig, setPreviousConfig] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (matiere) {
//       const newCharge = { matiere, cm, td, tp };
//       setCharges([...charges, newCharge]);
//       setPreviousConfig(newCharge);
//       setMatiere("");
//       setCM(0);
//       setTD(0);
//       setTP(0);
//     }
//   };

//   const applyPreviousConfig = () => {
//     if (previousConfig) {
//       setMatiere(previousConfig.matiere);
//       setCM(previousConfig.cm);
//       setTD(previousConfig.td);
//       setTP(previousConfig.tp);
//     }
//   };

//   return (

    
//     <Container className="mt-5">
//       <h2 className="text-center mb-4">Gestion des Charges Hebdomadaires</h2>
      
//       <Form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
//         <Form.Group className="mb-3">
//           <Form.Label>Matière</Form.Label>
//           <Form.Control
//             type="text"
//             value={matiere}
//             onChange={(e) => setMatiere(e.target.value)}
//             required
//           />
//         </Form.Group>
        
//         <div className="d-flex gap-3">
//           <Form.Group>
//             <Form.Label>CM</Form.Label>
//             <Form.Control
//               type="number"
//               value={cm}
//               onChange={(e) => setCM(parseInt(e.target.value) || 0)}
//               min="0"
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>TD</Form.Label>
//             <Form.Control
//               type="number"
//               value={td}
//               onChange={(e) => setTD(parseInt(e.target.value) || 0)}
//               min="0"
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>TP</Form.Label>
//             <Form.Control
//               type="number"
//               value={tp}
//               onChange={(e) => setTP(parseInt(e.target.value) || 0)}
//               min="0"
//             />
//           </Form.Group>
//         </div>
        
//         <div className="mt-3">
//           <div className="ajout">
//           <Button id="ajotch" variant="primary" type="submit" className="me-2">Ajouter</Button>

//           </div>
//           <Button variant="secondary" onClick={applyPreviousConfig}>Reconduire</Button>
//         </div>
//       </Form>
      
//       <Table striped bordered hover className="mt-4">
//         <thead>
//           <tr>
//             <th>Matière</th>
//             <th>CM</th>
//             <th>TD</th>
//             <th>TP</th>
//           </tr>
//         </thead>
//         <tbody>
//           {charges.map((charge, index) => (
//             <tr key={index}>
//               <td>{charge.matiere}</td>
//               <td>{charge.cm}</td>
//               <td>{charge.td}</td>
//               <td>{charge.tp}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default GestionCharges;


import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import MyNavbar from "./UNavbar"; // Importez la barre de navigation

const GestionCharges = () => {
  const [matiere, setMatiere] = useState("");
  const [cm, setCM] = useState(0);
  const [td, setTD] = useState(0);
  const [tp, setTP] = useState(0);
  const [charges, setCharges] = useState([]);
  const [previousConfig, setPreviousConfig] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (matiere) {
      const newCharge = { matiere, cm, td, tp };
      setCharges([...charges, newCharge]);
      setPreviousConfig(newCharge);
      setMatiere("");
      setCM(0);
      setTD(0);
      setTP(0);
    }
  };

  const applyPreviousConfig = () => {
    if (previousConfig) {
      setMatiere(previousConfig.matiere);
      setCM(previousConfig.cm);
      setTD(previousConfig.td);
      setTP(previousConfig.tp);
    }
  };

  return (
    <Container className="mt-5">
      <MyNavbar /> {/* Ajoutez la barre de navigation ici */}
      <h2 className="text-center mb-4">Gestion des Charges Hebdomadaires</h2>
      
      <Form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
        <Form.Group className="mb-3">
          <Form.Label>Matière</Form.Label>
          <Form.Control
            type="text"
            value={matiere}
            onChange={(e) => setMatiere(e.target.value)}
            required
          />
        </Form.Group>
        
        <div className="d-flex gap-3">
          <Form.Group>
            <Form.Label>CM</Form.Label>
            <Form.Control
              type="number"
              value={cm}
              onChange={(e) => setCM(parseInt(e.target.value) || 0)}
              min="0"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>TD</Form.Label>
            <Form.Control
              type="number"
              value={td}
              onChange={(e) => setTD(parseInt(e.target.value) || 0)}
              min="0"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>TP</Form.Label>
            <Form.Control
              type="number"
              value={tp}
              onChange={(e) => setTP(parseInt(e.target.value) || 0)}
              min="0"
            />
          </Form.Group>
        </div>
        
        <div className="mt-3">
          <div className="ajout" style={{  paddingBottom: "10px" }}>
            <Button id="ajotch" style={{ backgroundColor: "#8A2BE2", border: "1px solid #8A2BE2", color: "white" }} variant="primary" type="submit" className="me-2">Ajouter</Button>
          </div>
          <Button variant="secondary" onClick={applyPreviousConfig}>Reconduire</Button>
        </div>
      </Form>
      
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Matière</th>
            <th>CM</th>
            <th>TD</th>
            <th>TP</th>
          </tr>
        </thead>
        <tbody>
          {charges.map((charge, index) => (
            <tr key={index}>
              <td>{charge.matiere}</td>
              <td>{charge.cm}</td>
              <td>{charge.td}</td>
              <td>{charge.tp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default GestionCharges;