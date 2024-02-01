import axios from 'axios'

const UsePost = () => {

    const post = async (url, data) => {
        try {
            debugger
            await axios.post(url, data)
            alert("good post")
        } catch (error) {
            console.error(error)
        }
    }

    return post
}

export default UsePost