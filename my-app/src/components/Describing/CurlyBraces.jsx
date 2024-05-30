export default function CurlyBraces() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  const name = "Gregorio Y. Zara";
  const today = new Date();
  const person = {
    name: 'Gregorio Y. Zara Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };


  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }

  return (
    <>
      <h1>Curly Braces</h1>
      <h2>{name}'s To Do List</h2>
      <p>To Do List for {formatDate(today)}</p>
      <img className="avatar" src={avatar} alt={description} />

      <ul
        style={{  //use {{
          backgroundColor: "black",
          color: "red",
        }}
      >
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>

      <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    </>
  );
}
