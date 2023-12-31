import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
                // this.setState({ errorMsg: 'Error retreiving data' })
            })
    }, [])
    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
                {
                    posts.length ?
                        posts.map(post => <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                        </tr>) :
                        null
                }
            </table>
        </div>
    )
}

export default DataFetching