import React, { useState, useEffect } from 'react';
import { updateMeetings } from './MeetingService.js';

const MeetingList = () => {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        updateMeetings().then(response => {
            console.log('Meetings Updated:', response.data);
            setMeetings(response.data);
        });
    }, []);
       console.log(meetings);
    return (
        <div>
            {/* <h2>Meeting List</h2>
            <ul>
                {meetings.map(meeting => (
                    <li key={meeting.meetingId}>
                        {meeting.description} - {meeting.time}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default MeetingList;
