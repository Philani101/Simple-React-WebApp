import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev tool tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])
    return ( 
        <div className="home">
          <h2>All Blogs</h2>
          <BlogList blogs = {blogs}/>
          <h2>Mario's Blogs</h2>
          <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')}/>
        </div>
     );
}
 
export default Home;