import { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom';
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

const PlansList = ({ reload }) => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        (async () => {
            const PlansData = await(fetch('http://127.0.0.1:3333/plans').then(response => response.json()));
            setPlans(PlansData);
            console.log(PlansData);
        })();
    },[reload])

    return (
        <>
            {!!plans.length ? (
                <>
                    <Route path='/locations'>
                        <Ul>
                            {plans.map((plan, index) => {
                                return (
                                    <Li key={index}>
                                        {plan.day}--{plan.activity}
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

export default PlansList;