import { useState } from 'react';
import Styled from "styled-components";

// const Title = Styled.h1`
//   font-size: 64px;
//   color: red;
// `;


const AddLocation = ({ handleReload }) => {
    const [location, setLocation] = useState('');
    

    const _handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const _handleSubmit = async (event) => {
        event.preventDefault();
        const submitResponse = await fetch('http://127.0.0.1:3333/plans', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ location: location })
        }).then(
            (response) => response
        );
        console.log('Submitted response is', submitResponse);

        setLocation('');
        
        if (submitResponse.status === 200) {
            handleReload(true);
        }
    }

    return (
        <form onSubmit={_handleSubmit}>
            <label>Where are you going?
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={_handleLocationChange}/>
            </label>
            
            <button type="submit">Add Location</button>
        </form>
    )

}

export default AddLocation;