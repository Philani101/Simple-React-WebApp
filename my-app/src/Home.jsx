const Home = () => {

    const handleClick = (msg,e) => {
        alert(msg)
        console.log(e)
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick ={(e) => {handleClick("hello bloggers:)",e)}}>Click me</button>
        </div>
     );
}
 
export default Home;