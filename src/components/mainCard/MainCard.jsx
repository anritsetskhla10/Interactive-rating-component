import Star from "/images/icon-star.svg";
import './maincard.css';



export default function MainCard(props) {
   const handleButtonClick = (value) => {
      props.setTargetValue(value);
   };
   
   return(
      <div className='container'>
         <div className='img-container'>
            <img src={Star} alt="logo" />
         </div>
         <h1 className="title">How did we do?</h1>
         <p className="description"> 
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
         </p>
         <div className="buttons">
            <button className="btnShape" onClick={() => handleButtonClick(1)}>1</button>
            <button className="btnShape" onClick={() => handleButtonClick(2)}>2</button>
            <button className="btnShape" onClick={() => handleButtonClick(3)}>3</button>
            <button className="btnShape" onClick={() => handleButtonClick(4)}>4</button>
            <button className="btnShape" onClick={() => handleButtonClick(5)}>5</button>
         </div>
         <button className="submitBtn" onClick={() => props.setChange(props.targetValue !== 0 ? 'true' : 'false')}>SUBMIT</button>
      </div>
   );
}
