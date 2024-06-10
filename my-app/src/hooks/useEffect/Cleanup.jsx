import { useEffect, useState } from "react";

export default function Cleanup() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log(`Mounted or Re-render times: ${count}`);
    return () => {
      console.log(`Cleanup times: ${count}`);
    };
  }, [count]);

  return (
    <>
      <section>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </section>

      <section>
        <h3>Upload image</h3>
        <UploadImage />
      </section>

      <section>
        <h3>Cleanup</h3>
        <Info />
      </section>
    </>
  );
}

function UploadImage() {
  const [image, setImage] = useState();

  useEffect(() => {
    if (image) {
      return () => URL.revokeObjectURL(image.preview);
    }
  }, [image]);

  const handlePreviewImage = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setImage(file);

    console.log("file", file);
  };

  return (
    <>
      <input type="file" onChange={handlePreviewImage} />
      {image && <img src={image.preview} alt="" width="80%" />}
    </>
  );
}

const people = [
  {
    id: 1,
    name: "Diep Phan",
  },
  {
    id: 2,
    name: "Phan Dinh Ngoc Diep",
  },
  {
    id: 3,
    name: "Alice",
  },
  {
    id: 4,
    name: "Mia",
  },
];

function Info() {
  const [peopleId, setPeopleId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`people-${peopleId}`, handleComment);

    return () => {
      window.removeEventListener(`people-${peopleId}`, handleComment);
    };
  }, [peopleId]);

  return (
    <div>
      <ul>
        {people.map((person) => (
          <li
            key={person.id}
            style={{
              color: peopleId === person.id ? "red" : "green",
              cursor: "pointer",
            }}
            onClick={() => setPeopleId(person.id)}
          >
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent (`people-${id}`, {
        detail: `My name is: ${id}`
      }, 1000)
    )
  })
}
EmitComment(1)
EmitComment(2)
EmitComment(3)
EmitComment(4)
