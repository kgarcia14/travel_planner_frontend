import { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom';
import Styled from "styled-components";

const Ul = Styled.ul`
    list-style-type: none;
`

const Li = Styled.li`
    margin-bottom: 10px;
    color: #00c4b3;
`

const Button = Styled.button`
    border: none;
    background-color: #fff;
    color: red;
`

const PlansList = () => {
    const { slug } = useParams();
    const [plans, setPlans] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        (async () => {
            const PlansData = await(fetch(`http://127.0.0.1:3333/plans/${slug}`).then(response => response.json()));
            setPlans(PlansData);
            console.log(PlansData);
        })();
    },[reload, slug])

    const _handleDelete = (id) => {
        fetch(`http://localhost:3333/plans/${id}`, {
            method: 'DELETE'
        });
        setReload(reload => !reload);
    }

    return (
        <>
            {!!plans.length ? (
                <>
                    <Route path='/locations/'>
                        <Ul>
                            {plans.map((plan, index) => {
                                return (
                                    <Li key={index}>
                                        {plan.day} - {plan.activity}
                                        <Button type="button" onClick={() => _handleDelete(plan.id)}>X</Button>
                                    </Li>
                                )
                            })}
                        </Ul>
                    </Route>
                </>
            ) : (
                <p>There are no activities yet...</p>
            )}
        </>
    )
}

export default PlansList;