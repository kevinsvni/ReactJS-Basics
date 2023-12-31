import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingP2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [idFromButtonClick])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch Post</button>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                </tr>
            </table>
        </div>
    )
}

export default DataFetchingP2