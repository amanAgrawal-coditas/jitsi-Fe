import React, { useState } from 'react';
import { joinMeeting } from './MeetingService.js';

const MeetingJoin = () => {
    const [meetingId, setMeetingId] = useState('');
    const [meetingUrl, setMeetingUrl] = useState('');

    const handleJoinMeeting = () => {
        joinMeeting(meetingId).then(response => {
            console.log('Join Meeting URL:', response.data);
            setMeetingUrl(response.data);
        }).catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <h2>Join Meeting</h2>
            <input
                type="number"
                value={meetingId}
                onChange={(e) => setMeetingId(e.target.value)}
                placeholder="Enter meeting ID"
            />
            <button onClick={handleJoinMeeting}>Join</button>
            {meetingUrl && <div>Meeting URL: <a href={meetingUrl} target="_blank" rel="noopener noreferrer">{meetingUrl}</a></div>}
        </div>
    );
};

export default MeetingJoin;
