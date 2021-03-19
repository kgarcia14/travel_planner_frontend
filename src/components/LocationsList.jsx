
import { useEffect, useState } from 'react'
import { Route, Link, useHistory } from 'react-router-dom';
import Styled from "styled-components";

const Ul = Styled.ul`
    list-style-type: none;
`

const Li = Styled.li`
    margin-bottom: 10px;
`

const Button = Styled.button`
    border: none;
    background-color: #fff;
    color: red;
`


const LocationsList = ({ reload }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        (async () => {
            const locationsData = await(fetch('http://127.0.0.1:3333/locations').then(response => response.json()));
            setLocations(locationsData);
            console.log(locationsData);
        })();
    },[reload])

    return (
        <>
            {!!locations.length ? (
                <>
                    <Route path='/locations'>
                        <Ul>
                            {locations.map((location, index) => {
                                return (
                                    <Li key={index}>
                                        <Link style={{ textDecoration: 'none', color: '#333' }} to={`/locations/${location.slug}`}>
                                            {location.location}
                                        </Link>
                                        <Button type="button">X</Button>
                                    </Li>
                                )
                            })}
                        </Ul>
                    </Route>
                </>
            ) : (
                <p>Check if server is running...</p>
            )}
        </>
    )
}

export default LocationsList;