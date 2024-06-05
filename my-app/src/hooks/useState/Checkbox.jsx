import { useState } from "react";

export default function MyCheckbox() {
  const [liked, setLiked] = useState(true);

  function handleChange(e) {
    setLiked(e.target.checked);
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={liked} onChange={handleChange} />I liked
        apple
      </label>
      <p>You {liked ? "liked" : "did not like"} apple.</p>
    </>
  );
}
