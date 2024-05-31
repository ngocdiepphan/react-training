import React from 'react';
import './Purity.css';

function Recipe({ drinkers }) {
  return (
    <ol className="smaller-text">
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

function Cup({ guest }) {
  return <h2 className="smaller-text">Tea cup for guest #{guest}</h2>;
}

function Coffee({ guest }) {
  return <h2 className="smaller-text">Your Coffee very good #{guest}</h2>;
}

export default function Purity() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Coffee key={i} guest={i} />);
  }

  return (
    <>
      <section>
        <h1>Spiced Chai Recipe</h1>
        <h2>For two</h2>
        <Recipe drinkers={2} />
        <h2>For a gathering</h2>
        <Recipe drinkers={4} />
        <h2>For three</h2>
        <Recipe drinkers={3} />
      </section>

      <section>
        <h1>Side Effects: (un)intended consequences</h1>
        <Cup guest={1} />
        <Cup guest={3} />
        <Cup guest={5} />
      </section>

      <section>
        <h1>Local mutation: Your component's little secret</h1>
        {cups}
      </section>
    </>
  );
}
