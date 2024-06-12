import React from 'react';
import MeetingCreate from './MeetingCreate';
import MeetingSchedule from './MeetingSchedule';
import MeetingJoin from './MeetingJoin';
import MeetingList from './MeetingList';

const App = () => {
    return (
        <div>
            <h1>Meeting App</h1>
            <MeetingCreate />
            <MeetingSchedule />
            <MeetingJoin />
            <MeetingList />
        </div>
    );
};

export default App;
