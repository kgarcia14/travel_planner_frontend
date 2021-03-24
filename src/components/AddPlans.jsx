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
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
            </select>
            <label>
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