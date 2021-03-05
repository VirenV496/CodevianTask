import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const Datatable = () => {

    const [posts, setPosts] = useState([])

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts")
			.then((data) => {
				setPosts(data.data) // new
			})
	}, [])
    

    return (
     
        <div>
			<h1>app</h1>
			{posts.map((item, index) => (
				<li key={index}>
					<h2>{item.title}</h2>
					<p>{item.description}</p>
				</li>
			))}
		</div>
    )
}

export default Datatable


 