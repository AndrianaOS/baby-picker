import "animate.css";

function Heading() {
  return (
    <header className="App-header">
      <img
        src="stork-baby.png"
        alt="stock carrying a baby"
        id="stork-baby"
        className="animate__animated
        animate__swing
        animate__slow
        animate__infinite"
      />
      <h1>WELCOME TO ANDRIANA'S BABY NAME NEST</h1>
      <h2>Discover the Perfect Name for Your Bundle of Joy</h2>
      <h3>Scroll down to see names and submit a name below</h3>
    </header>
  );
}

export default Heading;
