import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/meetings';

export const createMeeting = (description) => {
    return axios.post(`${BASE_URL}/create`, description, {
        headers: {
            'Content-Type': 'text/plain'
        }
    });
};

export const scheduleMeeting = (description, time) => {
    return axios.post(`${BASE_URL}/schedule`, null, {
        params: { description, time }
    });
};

export const joinMeeting = (meetingId) => {
    return axios.get(`${BASE_URL}/join/${meetingId}`, { responseType: 'text' });
};

export const updateMeetings = () => {
    return axios.get(`${BASE_URL}/updateMeeting`);
};
