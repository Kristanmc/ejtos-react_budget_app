import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const setBudget = (val) => {
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    if(val < totalExpenses) {

        alert("You cannot reduce the budget value lower than the spending");
    } 

   
    
    else {
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

}
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '.5rem' , size: 10}}
                        onInput={(event) => setBudget(event.target.value)}>
             </input>
        </div>
    );
};
export default Budget;


