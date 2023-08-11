import {useState} from "react";
import classes from './Counter.module.scss';
const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.btn} onClick={() => setCounter((prevState) => prevState + 1)}>Inc</button>
        </div>
    );
};

export default Counter;