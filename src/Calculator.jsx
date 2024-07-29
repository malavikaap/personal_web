
import react, {useState} from 'react'
function Calculator() {
    const [inputValue,SetInputValue]= useState("")
    const appendToDisplay = (value) => {
        SetInputValue(inputValue + value);
    }
    const backspace = () => {
        SetInputValue(inputValue.slice(0, -1));
    };
    const ClearDisplay = () => {
        SetInputValue("")
    }
    const calculateResult = () => {
        try {
            const result =  eval(inputValue).toString()
            SetInputValue(inputValue + '=' + result);
        } catch (error) {
            SetInputValue("Error");
        }
    }
    return(
        <div className='calculate'>
            <input type='text' value={inputValue} readOnly></input>
            <div className='keys'>
                <button className='btn-wrk' onClick={() =>appendToDisplay('+')}>+</button>
                <button onClick={() => appendToDisplay('7')}>7</button>
                <button onClick={() =>appendToDisplay('8')}>8</button>
                <button onClick={() =>appendToDisplay('9')}>9</button>
                <button className='btn-wrk' onClick={() =>appendToDisplay('-')}>-</button>
                <button onClick={() =>appendToDisplay('4')}>4</button>
                <button onClick={() =>appendToDisplay('5')}>5</button>
                <button onClick={() =>appendToDisplay('6')}>6</button>
                <button  className='btn-wrk' onClick={() =>appendToDisplay('*')}>*</button>
                <button onClick={() =>appendToDisplay('1')}>1</button>
                <button onClick={() =>appendToDisplay('2')}>2</button>
                <button onClick={() =>appendToDisplay('3')}>3</button>
                <button className='btn-wrk' onClick={() =>appendToDisplay('/')}>/</button>
                <button onClick={() =>appendToDisplay('0')}>0</button>
                <button onClick={() =>appendToDisplay('.')}>.</button>
                <button onClick={() =>calculateResult()}>=</button>
                <button className='btn-wrk' onClick={() =>ClearDisplay()}>C</button>
                <button onClick={() =>appendToDisplay('%')}>%</button>
                <button onClick={() =>backspace()}>AC</button>
            </div>
        </div>
    )
}
export default Calculator