// AddDogForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddDogForm = ({ onDogSubmit }) => {
    const [dogName, setDogName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dogName) {
            onDogSubmit(dogName);
            setDogName('');
        } else {
            console.error('Debe ingresar una pregunta.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={dogName} onChange={(e) => setDogName(e.target.value)} placeholder="Pregunta" />
            <button type="submit">Agregar Pregunta</button>
        </form>
    );
};

AddDogForm.propTypes = {
    onDogSubmit: PropTypes.func.isRequired,
};

export default AddDogForm;