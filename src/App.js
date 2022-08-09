import React, {useMemo, useRef, useState} from 'react'
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "React", body: " React Description"},
        {id: 3, title: "Javascript 2", body: "Description"},
    ])
    const [filter, setFilter] = useState({sort: "", query: ""})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    // Получаем ост из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about JS"/>
        </div>
    );
}

export default App;
