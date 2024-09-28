import Heder from "./Heder";
// import Note from "./Note";
import notes from "../DATA/NoteData";
import Note from "./Note";

export default function Keeper() {
  function createNote(noteItem) {
    return <Note title={noteItem.title} des={noteItem.des} />;
  }
  return (
    <>
      <div>
        <Heder />
        <div className="notes">{notes.map(createNote)}</div>
      </div>
    </>
  );
}
