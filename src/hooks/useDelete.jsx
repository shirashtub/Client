import axios from 'axios'

const UseDelete = () => {

    const Delete = async (url) => {
        try {
            debugger
            await axios.delete(url)
            alert("good del")
        } catch (error) {
            console.error(error)
        }
    }

    return Delete
}

export default UseDelete