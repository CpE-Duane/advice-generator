import axios from "axios";

const serverUrl = 'https://api.adviceslip.com/advice'

let getAdvice = () => {
    return axios.get(serverUrl)
}

let AdviceService = {
    getAdvice
}

export default AdviceService;