import axios from 'axios'

const UsePost = () => {

    const post = async (url, data) => {
        try {
            await axios.post(url, data)
            alert("good")
        } catch (error) {
            console.error(error)
        }
    }

    return post
}

export default UsePost