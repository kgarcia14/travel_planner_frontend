import {useState} from 'react';

const AddPlanDetails = ({ handleReload }) => {
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
        const submitResponse = await fetch('http://127.0.0.1:3333/plans', {
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
            <select onChange={_handleDayChange}>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
            </select>
            <label>Activity
                <input
                    type="text"
                    name="activity"
                    value={activity}
                    onChange={_handleActivityChange}/>
            </label>
        </form>
    )
}

export default AddPlanDetails;