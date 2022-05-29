import './Expense.css';
import { useEffect, useState } from 'react';
import AccordionComp from './Accordion';
const shortid = require('shortid');

export default function Expense({ totalMembers, totalMemberNum = +totalMembers }) {
    const [members, setMember] = useState(null);
    const [paymentData, setPaymentData] = useState(null);

    const changeMember = (e, useId) => {
        let new_member = [...members];
        setMember(new_member.map((data) => {
            if (data.user_id === useId) {
                data[e.target.name] = e.target.value;
            }
            return data;
        }))
    }

    useEffect(() => {
        let fill_arr = new Array(totalMemberNum).fill(null);
        let tem_arr = [];
        for (let i = 0; i < fill_arr.length; i++) {
            let obj = {
                user_id: shortid.generate()
            }
            tem_arr.push(obj)
        };
        return setMember(tem_arr)
    }, []);

    const calculate = () => {
        let setPayment = members.map((data) => {
            let getPayment = parseInt(data.expense) / members.length;
            data.payment = getPayment;
            return data
        });
        let final_result = [];
        let result;
        for (let i = 0; i < setPayment.length; i++) {
            result = [];
            for (let j = 0; j < setPayment.length; j++) {
                if (setPayment[i].user_id != setPayment[j].user_id) {
                    console.log("test");
                    let obj = { ...setPayment[j] }
                    let amount_result = setPayment[j].payment - setPayment[i].payment;
                    if (amount_result > 0) {
                        obj.type = "settlement"
                    } else {
                        obj.type = "payment"
                    }
                    obj.final_settlement = amount_result;
                    result.push(obj);
                }
            }
            let obj = { ...setPayment[i] };
            obj.final_result = result;
            final_result.push(obj);
        }
        setPaymentData(final_result);
    }

    useEffect(() => {
        console.log(paymentData)
    }, [paymentData])

    if (members) {
         return (
            <div className="expense-box">
                {paymentData ? <AccordionComp paymentData={paymentData}/> :
                    <><h3>Enter Your Team Members Expenses </h3>
                        <form>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {members.map((data) => {
                                return <div className="team-user-box" key={data.user_id}>
                                    <div className='memberField'>
                                        <label className='memberLabel'><span>Enter your Name:</span></label>
                                        <input className='memberInput' type="text" name="memberName" required="" onChange={(e) => changeMember(e, data.user_id)} />
                                    </div>
                                    <div className='memberField'>
                                        <label className='memberLabel'><span>Enter your Expense:</span></label>
                                        <input className='memberInput' type="number" name="expense" required="" onChange={(e) => changeMember(e, data.user_id)} />
                                    </div>
                                </div>
                            })}


                            <a href="#" onClick={calculate}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                = Calculate
                            </a>
                            <a href="#" className='addMemberButton'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                + Add Member
                            </a>
                            <a href="#" className='resetButton'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Cancel and Reset
                            </a>
                        </form>
                    </>
                }
            </div>
        )
    }
}