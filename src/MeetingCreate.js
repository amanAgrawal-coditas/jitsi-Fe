import React, { useState } from 'react';
import { createMeeting } from './MeetingService.js';

const MeetingCreate = () => {
    const [description, setDescription] = useState('');

    const handleCreateMeeting = () => {
        createMeeting(description).then(response => {
            console.log('Meeting Created:', response.data);
        });
    };

    return (
        <div>
            <h2>Create Meeting</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter meeting description"
            />
            <button onClick={handleCreateMeeting}>Create</button>
        </div>
    );
};

export default MeetingCreate;
