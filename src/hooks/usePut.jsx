import axios from 'axios'

const UsePut = () => {

    const put = async (url, id, todo) => {
        try {
            await axios.put(url, id, todo)
            alert("food put")
        } catch (error) {
            console.error(error)
        }
    }

    return put
}

export default UsePut