import React from "react";
import { useState } from "react";
import { useImmer } from 'use-immer';

export default function StateObject() {
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

    // function handleNameChange(e) {
  //   setPerson({
  //     ...person,
  //     name: e.target.value,
  //   });
  // }

  // function handleTitleChange(e) {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       title: e.target.value,
  //     },
  //   });
  // }

  // function handleCityChange(e) {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       city: e.target.value,
  //     },
  //   });
  // }

  // function handleImageChange(e) {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       image: e.target.value,
  //     },
  //   });
  // }
  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img
        src={person.artwork.image}
        alt={person.artwork.title}
      />

      <section>
        <h3>Example update object in state</h3>
        <MovingDot />
      </section>

      <section>
        <h3>Example challenges of learn object state</h3>
        <Scoreboard />
      </section>
    </>
  );
}

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handlePointerMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <>
      <div
        onPointerMove={handlePointerMove}
        style={{
          position: "relative",
          width: "700px",
          height: "400px",
          border: "1px solid black",
          borderRadius: "15px",
          margin: "30px",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "green",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}

function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    })
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p style={{color:'blue'}}>
        {player.firstName} {''}
        {player.lastName} {'is: '}
        {player.score}
      </p>
    </>
  );
}
