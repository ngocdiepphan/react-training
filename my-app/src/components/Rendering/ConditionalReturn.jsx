function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item" style={{ color: 'red' }}>{name}</li>;

  // if (isPacked) {
  //   return null;
  // }
  // return <li className="item" style={{ color: 'red' }}>{name}</li>;
}

function Operator({ nameItem, isPacked }) {
  // return (
  //   <li className="item">
  //     {isPacked ? nameItem + ' ✔' : <span style={{ color: 'red' }}>{nameItem}</span>}
  //   </li>
  // );
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {nameItem + ' ✔'}
        </del>
      ) : (
        nameItem
      )}
    </li>
  );
}

function OperatorAnd({ item, isPacked}) {
  return (
    <li className="item">
      {item} {isPacked && '✔'}
    </li>
  )
}

function Assigning({ variable, isPacked}) {
  let itemContent = variable;
  // if (isPacked) {
  //   itemContent = variable + " ✔";
  // }
  // return (
  //   <li className="item">
  //     {itemContent}
  //   </li>
  // );
  if (isPacked) {
    itemContent = (
      <del>
        {variable + " ✔"}
      </del>
    );
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

function Challenge({ challenge, isPacked }) {
  return (
    <li className="item">
      {challenge} {isPacked ? '✔' : '❌'}
    </li>
  )
}
export default function PackingList() {
  return (
    <>
      <section>
        <h1>Return Packing List</h1>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Dip" />
        </ul>
      </section>

      <section>
        <h1>Operator Packing List</h1>
        <p>conditional operator ( ? :)</p>
        <ul>
          <Operator isPacked={true} nameItem="Space suit" />
          <Operator isPacked={true} nameItem="Helmet with a golden leaf" />
          <Operator isPacked={false} nameItem="Photo of Dip" />
        </ul>
      </section>

      <section>
        <h1>Operator Packing List</h1>
        <p>Logical operator AND ( &&)</p>
        <ul>
          <OperatorAnd isPacked={true} item="Space suit" />
          <OperatorAnd isPacked={false} item="Helmet with a golden leaf" />
          <OperatorAnd isPacked={false} item="Photo of Dip" />
        </ul>
      </section>

      <section>
        <h1>Conditionally assigning JSX to a  variable</h1>
        <ul>
          <Assigning isPacked={true} variable="Space suit" />
          <Assigning isPacked={true} variable="Helmet with a golden leaf" />
          <Assigning isPacked={false} variable="Photo of Dip" />
        </ul>
      </section>

      <section>
        <h1>Try out some challenge</h1>
        <ul>
          <Challenge isPacked={false} challenge="Space suit" />
          <Challenge isPacked={true} challenge="Helmet with a golden leaf" />
          <Challenge isPacked={false} challenge="Photo of Dip" />
        </ul>
      </section>
    </>
  );
}
