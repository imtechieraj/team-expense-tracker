import './Team.css';
import { useEffect, useRef } from 'react';

export default function TeamExpense(props) {
    const { formChange, totalMembers, setShowExpensePage } = props;
    const focusPoint = useRef(null);
    useEffect(() => {
        focusPoint.current.focus();
    }, [])
    return (
        <div className="team-expense-box">
            <h3>Team Expense Tracker</h3>
            <form onChange={formChange} onSubmit={() => totalMembers ? setShowExpensePage(true) : ''}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="user-box">
                    <input type="number" name="" required="" min="2" ref={focusPoint} />
                    <label>Total Team Members</label>
                </div>
                <a href="#" className={!totalMembers ? 'disabled' : ''} onClick={() => setShowExpensePage(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    )
}