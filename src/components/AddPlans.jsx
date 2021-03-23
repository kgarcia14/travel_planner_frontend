import {useState} from 'react';
import { useParams } from 'react-router-dom';

const AddPlans = ({ handleReload }) => {
    const { slug } = useParams();
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
            body: JSON.stringify({ day: day, activity: activity, slug: slug})
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
                required
                value={day}
                onChange={_handleDayChange}>
                <option value="">Select Day</option>
                <option value="0">Sunday</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
            </select>
            <label className="activity-label">Activity: 
                <input
                    className="activity-input"
                    type="text"
                    name="activity"
                    required
                    value={activity}
                    onChange={_handleActivityChange}
                    placeholder="Enter activity"/>
            </label>
            <button className="add-btn" type="submit">Submit</button>
        </form>



    )
}

export default AddPlans;