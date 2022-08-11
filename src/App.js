import React, {useMemo, useRef, useState} from 'react'
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "AAA", body: "Description"},
        {id: 2, title: "ZZZ", body: " React Description"},
        {id: 3, title: "JBBB", body: "Description"},
    ])
    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    // Получаем ост из дочернего элемента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)} >
                Create User
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about JS"/>
        </div>
    );
}

export default App;
