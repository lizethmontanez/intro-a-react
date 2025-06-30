import { useState } from 'react'
import './App.css'
import MainContent from './Components/MainContent'
import PostForm from './Components/PostForm'
import PostContainer from './Components/PostContainer'
import PostItem from './Components/PostItem'

function App() {

  const [posts, setPosts] = useState([]);

  return (
    <>
      <MainContent>
        <PostForm posts={posts} setPosts={setPosts}/>
        <PostContainer>
          {posts.map((post, index) => {
            return <PostItem username={post.username} postText={post.postText} isLiked={post.isLiked} index={index} key={index} posts={posts} setPosts={setPosts}/>
          })}
        </PostContainer>
      </MainContent>
    </>
  )
}

export default App