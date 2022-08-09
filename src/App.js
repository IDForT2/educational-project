import React, {useRef, useState} from 'react'
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "React", body: " React Description"},
        {id: 3, title: "Javascript 2", body: "Description"},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем ост из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title="Posts about JS"/>
                :
                <h1 style={{textAlign:"center"}}>Posts not found</h1>
            }

        </div>
    );
}

export default App;
