import { Avatar } from "./Props";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Clock({ color, time }) {
  return <h1 style={{ color: color }}>{time}</h1>;
}
export default function SpreadSyntax() {
  const currentTime = new Date().toLocaleTimeString();
  const clockColor = "blue";
  return (
    <>
      <Card>
        <Avatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: 'OKS67lh',
          }}
        />
      </Card>
      <h2>How to prop change over time</h2>
      <Clock color={clockColor} time={currentTime} />
    </>
  );
}
