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
                setPosts(newPosts);
            });
    }, []);

    return (
        <>
            <div>
                <div className="loadingtext">
                    <p className="loading">{posts.length ? null : "Loading......"}</p>
                </div>
                {posts.map(post => (

                    <div className="checks" key={post.id}>
                        <Card className="card">
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"><span>subreddit:</span>{post.subreddit}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted"><span>ups:</span>{post.ups}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted"><span>upvote_ratio:</span>{post.upvote_ratio}</Card.Subtitle>
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