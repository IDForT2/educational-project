import React, {useState} from 'react'
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "React", body: " React Description"},
        {id: 3, title: "Javascript 2", body: "Description"},
    ])

    const [title, setTitle] = useState('')

    const addNewPost = (e) => {
        e.preventDefault()
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Post name"
                />
                <MyInput type="text" placeholder="Post description" />
                <MyButton onClick={addNewPost} disabled>Add post</MyButton>
            </form>
            <PostList posts={posts} title="Posts about JS"/>
        </div>
    );
}

export default App;
