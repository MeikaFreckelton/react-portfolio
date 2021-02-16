import React from 'react' 
import {useGlobalState} from '../config/globalState'

const PerClick = () => {
    const {store, dispatch} = useGlobalState()
    const {cookieClicks} = store


    const handleClick = () => {
        dispatch({
            type: "setCookieClicks",
            data: cookieClicks + 5
          })
    }

    return(
        <div>
            <h2>Manually Increase Cookie Count</h2>
            <button className="cookieBtns" onClick={handleClick}>increase by 5</button>
        </div>
    )
}

export default PerClick