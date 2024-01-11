import axios from 'axios'

const UseDelete = () => {

    const Delete = async (url, id) => {
        try {
            await axios.delete(url, id)
            alert("good del")
        } catch (error) {
            console.error(error)
        }
    }

    return Delete
}

export default UseDelete