import {useState} from 'react';

const Home = () => {
    const [name,setName] = useState("N/A");
    const [age, setAge] = useState("");

    const handleClick = (msg,e) => {
        setName('Luige')
        setAge(9);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick ={(e) => {handleClick("hello bloggers:)",e)}}>Click me</button>
        </div>
     );
}
 
export default Home;