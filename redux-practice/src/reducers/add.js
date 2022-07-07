export const addReducer = (
  state = [{ song: "Umbrella", artist: "Rihanna" }],
  action
) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      for (let i = 0; i < state.length; i++) {
        if (state[i].artist === action.payload.artist) {
          state[i].song = action.payload.song;
        }
      }
      return state;
    case "DELETE":
      for (let i = 0; i < state.length; i++) {
        if (state[i].artist === action.payload.artist) {
          state.splice(i, 1);
        }
      }
    default:
      return state;
  }
};
