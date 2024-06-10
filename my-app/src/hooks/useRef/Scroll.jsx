import { useRef } from "react";

export default function CatFriends() {
 const listRef = useRef(null);

 function scrollToIndex(index) {
  const listNode = listRef.current;

  const imgNode = listNode.querySelectorAll('li'> 'img')[index];
  imgNode.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  })
 }

 return (
  <>
  <h2 className="item">Scrolling an image into view</h2>
  <nav>
    <button onClick={() => scrollToIndex(0)}>Tom</button>
    <button onClick={() => scrollToIndex(0)}>Mia</button>
    <button onClick={() => scrollToIndex(0)}>Jelly</button>
  </nav>
  <div>
  <ul ref={listRef}>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/5f/Tom_Tom_and_Jerry.png"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Mia_%28Given_Name%29.jpg"
              alt="Mia"
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/Jelly_confectionery.jpg"
              alt="Jellylorum"
            />
          </li>
        </ul>
  </div>
  </>
 )
}
