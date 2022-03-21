import Post from "./Post"

const posts = [
  {
    id: 123,
    username: 'johnyaz',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is so cool!',
  },
  {
    id: 456,
    username: 'johnyaz',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'This is so cool!',
  },
]

function Posts() {
  return (
    <div>
      {posts.map(post =>(
        <Post 
        key={post.id} 
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}/>
      ))}
    </div>
  )
}

export default Posts