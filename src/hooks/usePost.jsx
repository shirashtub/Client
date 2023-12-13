import axios from 'axios'

const UsePost = () => {

    const post = async (url) => {
        try {
            await axios.post(url)
        } catch (error) {
            console.error(error)
        }
    }

    return post
}

export default UsePost