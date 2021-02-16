// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
    switch (action.type){
        case "setCookieClicks": {
            return{
                ...state,
                cookieClicks: action.data
            }
        }
        case "setAutoIncrease": {
            return{
                ...state,
                autoIncrease: action.data
            }
        }
        default:
            return state
    }
}