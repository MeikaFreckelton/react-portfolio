import React from 'react' 
import {useGlobalState} from '../config/globalState'

const DisplayCount = () => {
    const {store} = useGlobalState()
    const {cookieClicks} = store

    return(
        <div>
            <h2>Current Cookie Count</h2>
            <h2 className="count">{cookieClicks}</h2>
        </div>
    )
}

export default DisplayCount