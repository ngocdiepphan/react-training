function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
     
      <button className="btn__event">I don't do anything</button>

      <section>
        <h3>Reading props in event handlers</h3>
        <AlertButton message="Playing!▶️">Play Movie🎦</AlertButton>
        <AlertButton message="Uploading!⤴️">Upload Image📷</AlertButton>
      </section>
    </>
  );
}
function handleClick() {
  alert("You clicked me!");
}

function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>;
      <section>
        <h1>Responding event</h1>
        <button onClick={handleClick}>Click me 👆</button>

        {/* <button
          onClick={function handleClick() {
            alert("You clicked me!  ✔️");
          }}
        >
          Click ✔️
        </button> */}

        {/* <button
          onClick={() => {
            alert("You clicked me!");
          }}
        >
          Click me!✅
        </button> */}
      </section>
    </>
  );
}
