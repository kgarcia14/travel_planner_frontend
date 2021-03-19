import {useState} from 'react';
import { useParams, useHistory } from "react-router-dom";



const AddPlans = ({ handleReload }) => {
    const { id } = useParams();
    const [day, setDay] = useState('');
    const [activity, setActivity] = useState('');


    const _handleDayChange = (event) => {
        setDay(event.target.value);
    }

    const _handleActivityChange = (event) => {
        setActivity(event.target.value);
    }

    const _handleSubmit = async (event) => {
        event.preventDefault();
        const submitResponse = await fetch(`http://127.0.0.1:3333/plans/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ day: day, activity: activity})
        }).then(
            (response) => response
        );
        console.log('Submitted response is', submitResponse);

        setDay('');
        setActivity('');

        if (submitResponse.status === 200) {
            handleReload(true);
        }
    }

    return (
        
        <form onSubmit={_handleSubmit}>
            <select 
                value={day}
                onChange={_handleDayChange}
                required>
                <option value="">Select Day</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
            </select>
            <label className="activity-label">Activity:
                <input
                    type="text"
                    name="activity"
                    value={activity}
                    onChange={_handleActivityChange}/>
            </label>
            <button className="add-btn" type="submit">Submit</button>
        </form>



    )
}

export default AddPlans;