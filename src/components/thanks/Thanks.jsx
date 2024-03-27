
import ThankYou from '/images/illustration-thank-you.svg'


import './thanks.css'

export default function Thanks(props){


    return (
        <div className="thanks-container">
            <img src={ThankYou} alt="thank you illustration" />
            <button className='selectedBtn'>You selected <span>{props.targetValue}</span> out of 5</button>

            <h2 >Thank you!</h2>

            <p >  We appreciate you taking the time to give a rating. 
                If you ever need more support, 
                don’t hesitate to get in touch!
            </p>
        </div>
    )
}