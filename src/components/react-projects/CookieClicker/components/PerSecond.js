import React, {useEffect, useState} from 'react' 
import {useGlobalState} from '../config/globalState'

const PerSecond = () => {
    const {store, dispatch} = useGlobalState()
    const {cookieClicks, autoIncrease} = store
    const [error, setError] = useState("")
    const [disabled, setDisabled] = useState(true)


    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({
                type: "setCookieClicks",
                data: cookieClicks + autoIncrease
            })

        }, 1000)
        return () => {
        clearInterval(interval);
        };
    
    })
    
    const decrease = () => {
        return cookieClicks - 100
    }

    const handleClick = () => {
        if (cookieClicks >= 100){
            dispatch({
                type: "setAutoIncrease",
                data: autoIncrease + 1
            })
            dispatch({
                type: "setCookieClicks",
                data: decrease()
            })
            setError("")
        } else {
            setError("sorry not enough cookies!")
        }
    }

    return(
        <div className="autoIncrease">
            <h2>Automatically Increase Cookie Count</h2>
            <h3>Increase by <span className="amount">{autoIncrease}</span> every second</h3>

            <h4>{error}</h4>
            <button type="button" className="cookieBtns" onClick={handleClick} >Spend 100 cookies to increase cookies per second by {autoIncrease}</button>
        </div>
    )
}

export default PerSecond