import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`


const index = async () => {
    try{
    const res = await axios.get(BASE_URL)
    console.log(res.data)
    return res.data
    
    } catch(err){
        console.log(err)
    }
}


export { index }