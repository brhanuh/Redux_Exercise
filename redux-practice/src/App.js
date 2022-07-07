import { add, update, remove } from "./action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
function App() {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const addSong = useSelector((state) => state.addReducer);
  const dispatch = useDispatch();

  console.log(addSong);

  function handleSong(e) {
    setSong(e.target.value);
  }
  function handleArtist(e) {
    setArtist(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(add({ song: song, artist: artist }));
  }
  function handleUpdate(e) {
    e.preventDefault();
    dispatch(update({ song: song, artist: artist }));
  }
  function handleDelete(e) {
    e.preventDefault();
    dispatch(remove({ song: song, artist: artist }));
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Song</label>
        <input onChange={handleSong}></input>
        <label>Artist</label>
        <input onChange={handleArtist}></input>
        <button>Add</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default App;
