import './App.css';

function App() {
  const title = "Welcome my bros"
  const link = "https://www.figma.com/design/Wnf99WoTWvGDPHqqod8g4E/Untitled?node-id=0-1&p=f&t=usRaKZIcAzzX0v56-0"

  return (
    <div className="App">
      <div className="content">
        <h1> Marco is testing !!!</h1>
        <h2> { title } </h2>
        <h2> { "2 + 3 : "+ ( 2+3 )} </h2>

        <a href ={link}>Figma Figma boy</a>
      </div>
    </div>
  );
}

export default App;
