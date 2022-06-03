import './Accordian.css';

const AccordionComp = ({ paymentData, resetState }) => {
    console.log(paymentData)
    return (
        <nav className="accordion arrows">
            <header className="box">
                <label for="acc-close" className="box-title">Final Settlement Details</label>
            </header>
            {paymentData.map((_item) => {
                return (<>
                    <input type="radio" name="accordion" id={_item.user_id} />
                    <section className="box">
                        <label className="box-title" for={_item.user_id}>{_item.memberName}</label>
                        <label className="box-close" for="acc-close"></label>
                        <div className="box-content">
                            <ul>
                                {_item.final_result.map((_item2) => {
                                    if (_item2.type === "payment") {
                                        return <ol key={_item2.user_id}>{_item2.memberName}: You have to pay {Math.abs(_item2.final_settlement)} </ol>
                                    } else {
                                        return <ol key={_item2.user_id}>{_item2.memberName}: You have to get {_item2.final_settlement} </ol>
                                    }
                                })}
                            </ul>
                        </div>
                    </section>
                </>
                )
            })}
            <form>
                <a href="#" className='resetButton' onClick={resetState}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Cancel and Reset
                </a>
            </form>
        </nav>
    )
}

export default AccordionComp;