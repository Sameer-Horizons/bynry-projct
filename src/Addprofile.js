import React, { useState, useEffect } from 'react';

const Addprofile= ({ onAddProfile, onEditProfile, selectedProfile }) => {
    const [profile, setProfile] = useState({
        id: null,
        name: '',
        photo: '',
        description: '',
        address: {
            latitude: '',
            longitude: '',
            text: ''
        }
    });

    useEffect(() => {
        if (selectedProfile) {
            setProfile(selectedProfile);
        }
    }, [selectedProfile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in profile.address) {
            setProfile({
                ...profile,
                address: {
                    ...profile.address,
                    [name]: value
                }
            });
        } else {
            setProfile({ ...profile, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (profile.id) {
            onEditProfile(profile);
        } else {
            onAddProfile({ ...profile, id: Date.now() });
        }
        setProfile({
            id: null,
            name: '',
            photo: '',
            description: '',
            address: {
                latitude: '',
                longitude: '',
                text: ''
            }
        });
    };

    return (
        <div className='profileform'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="photo" value={profile.photo} onChange={handleChange} placeholder="Photo URL" required />
            <input type="text" name="description" value={profile.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="text" value={profile.address.text} onChange={handleChange} placeholder="Address" required />
            <button type="submit">{profile.id ? 'Update Profile' : 'Add Profile'}</button>
        </form>
        </div>
    );
};

export default Addprofile;
