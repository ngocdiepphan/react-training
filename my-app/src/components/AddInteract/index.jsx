import { Toolbar } from "./RespondEvent";
import Gallery from "./State";
import Form from "./SnapShot";
import Counter from './StateUpdate';
import StateObject from './StateObject';
import StateArray from "./StateArray";

export default function RespondEvent() {
  return (
    <>
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
      <section>
        <h1>State: a component's memory</h1>
        <Gallery />
      </section>

      <section>
        <h1>State as a snapshot</h1>
        <Form />
      </section>

      <section>
        <h1>Queueing a series of state updates</h1>
        <Counter />
      </section>
      <section>
        <h1>Update objects in state</h1>
        <StateObject />
      </section>

      <section>
        <h1>Update array in state</h1>
        <StateArray />
      </section>
    </>
  );
}
