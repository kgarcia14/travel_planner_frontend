import { useEffect, useState } from 'react'
import { Route, Link,  } from 'react-router-dom';
import Styled from "styled-components";

const Ul = Styled.ul`
    list-style-type: none;
`


const LocationsList = ({ reload }) => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        (async () => {
            const locationsData = await(fetch('http://127.0.0.1:3333/plans').then(response => response.json()));
            setLocations(locationsData);
            console.log(locationsData);
        })();
    },[reload])

    return (
        <>
            {!!locations.length ? (
                <>
                    <Route exeact path='/'>
                        <Ul>
                            {locations.map((location, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/locations/${location.slug}`}>
                                            {location.location}
                                        </Link>
                                        <button type="button">Remove</button>
                                    </li>
                                )
                            })}
                        </Ul>
                    </Route>
                </>
            ) : (
                <p>Loading locations...</p>
            )}
        </>
    )
}

export default LocationsList;