import axios from 'axios'

const UsePost = () => {

    const post = async (url, data) => {
        try {
            debugger
            // await axios.post(url)
            await axios.post(url,{
                headers: {
                  'Accept': 'application/json'
                },
                data: data
              })
            // await axios.post(url,{
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify(data),
            //   })
            alert("good post")
        } catch (error) {
            console.error(error)
        }
    }

    return post
}

export default UsePost