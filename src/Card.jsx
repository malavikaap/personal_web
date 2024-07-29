import React, { useState } from 'react';
import profilePic from './assets/axel.jpg';
import validator from 'validator';

function RegistrationForm({ onSuccess }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
            setIsEmailValid(validator.isEmail(value));
        } else if (name === 'name') {
            setName(value);
            if(setIsNameValid(value.length >= 5));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isEmailValid) {
            alert('Email is not valid!');
            return;
        }

        if (!isNameValid) {
            alert('Name must be at least 5 characters long!');
            return;
        }

        if (name && email && position) {
            //console.log('Registered successfully...', { name, email, position });
            alert('Registered successfully....');
            onSuccess(); // Call the onSuccess callback to hide the form and show the card
        } else {
            alert('Please fill in all fields....');
        }
    };

    return (
        <div className='registration-form'>
            <h3>Register Employee</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    value={name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="position"
                    placeholder='Position'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
                <button
                    className='register'
                    type="submit"
                    disabled={!name || !email || !position}
                >
                    Register
                </button>
            </form>
        </div>
    );
}

function Card() {
    const [showForm, setShowForm] = useState(false);

    const handleRegisterClick = () => {
        setShowForm(true);
    };

    const handleFormSuccess = () => {
        setShowForm(false);
    };

    return (
        <div className='card'>
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Axel Technologies</h2>
            <p className='card-text'>There are around 40,000 Employees</p>
            <div>
                <button className='btn-register' onClick={handleRegisterClick}>Register
                </button>
            </div>
            {showForm && <RegistrationForm onSuccess={handleFormSuccess} />}
        </div>
    );
}

export default Card;
