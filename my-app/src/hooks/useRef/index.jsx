import Count from "./Count";
import Counter from "./Counter";
import Stopwatch from "./Stopwatch";
import Form  from "./Focus"
import CatFriends from "./Scroll";
import VideoPlayer from "./Player";

export default function UseRef() {
  return (
    <>
      <section>
        <h1 className="title">Example useRef for count down</h1>
        <Count />
      </section>
      <section>
        <h1 className="title">Example useRef for stop watch</h1>
        <Stopwatch />
      </section>
      <section>
        <h1 className="title">Example useRef for click counter</h1>
        <Counter />
      </section>
      <section>
        <h1 className="title">Example useRef for DOM</h1>
        <Form />
        <CatFriends />
        <VideoPlayer />
      </section>
    </>
  );
}
