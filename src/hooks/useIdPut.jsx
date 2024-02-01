import axios from 'axios'

const UseIdPut = () => {

    const put = async (url) => {
        try {
            await axios.put(url)
            alert("good put id")
        } catch (error) {
            console.error(error)
        }
    }

    return put
}

export default UseIdPut