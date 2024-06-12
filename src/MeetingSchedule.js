import React, { useState } from 'react';
import { scheduleMeeting } from './MeetingService.js';

const MeetingSchedule = () => {
    const [description, setDescription] = useState('');
    const [time, setTime] = useState('');

    const handleScheduleMeeting = () => {
        scheduleMeeting(description, time).then(response => {
            console.log('Meeting Scheduled:', response.data);
        });
    };

    return (
        <div>
            <h2>Schedule Meeting</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter meeting description"
            />
            <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Enter meeting time (yyyy-MM-ddTHH:mm:ss)"
            />
            <button onClick={handleScheduleMeeting}>Schedule</button>
        </div>
    );
};

export default MeetingSchedule;
