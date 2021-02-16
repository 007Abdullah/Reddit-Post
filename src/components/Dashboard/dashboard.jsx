import axios from "axios";
// import { useState, useEffect } from 'react';
import { useState, useEffect } from "react";
import './../Dashboard/dashboard.css'
import { Card } from 'react-bootstrap';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
            .then(res => {
                const newPosts = res.data.data.children
                    .map(obj => obj.data);
                console.log("is obj ma dekhna han kia a rha han :", newPosts)
                setPosts(newPosts);
            });
    }, []);

    return (
        <>
            <div>
                {posts.map(post => (
                    <div className="check">
                        <Card >
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{post.subreddit}</Card.Subtitle>
                                <Card.Text>{post.selftext}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
                }
            </div>

        </>
    )
}

export default Dashboard;