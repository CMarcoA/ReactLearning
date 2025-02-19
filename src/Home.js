const Home = () => {
    const handleClick = (e) => {
        console.log("hello, I am here", e);
    }

    const handleClickAgain = (name, e) => {
        console.log("hello, I am "+name, e.target);
    }

    const title = "Welcome my bros"
    const link = "https://www.figma.com/design/Wnf99WoTWvGDPHqqod8g4E/Untitled?node-id=0-1&p=f&t=usRaKZIcAzzX0v56-0"
    
    return (
        <div className="Home">
            <h2>Homepage</h2>
            <br />
            <h3> Marco is testing </h3>
            <h3> { title } </h3>
            <p> { "2 + 3 : "+ ( 2+3 )} </p>
            <br />
            <a href ={link}>Figma Figma boy</a>
            <br />
            <h2>Button Test</h2>
            <button onClick={handleClick}>Click me</button>
            
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click me</button>
        </div>
    );
}
 
export default Home;