
import { useState } from 'react';
import Styled from "styled-components";

const Input = Styled.input`
  margin: 0 5px 0 5px;
`;


const AddLocation = ({ handleReload }) => {
    const [location, setLocation] = useState('');
    

    const _handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const _handleSubmit = async (event) => {
        event.preventDefault();
        const submitResponse = await fetch('http://127.0.0.1:3333/locations', {
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
                <Input
                    type="text"
                    name="location"
                    required
                    value={location}
                    onChange={_handleLocationChange}
                    placeholder="Enter Location"/>
            </label>
            
            <button className="add-btn" type="submit">Add Location</button>
            
        </form>
        
        
    )

}

export default AddLocation;