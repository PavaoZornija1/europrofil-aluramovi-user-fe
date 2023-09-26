const { configureStore } = require("@reduxjs/toolkit");
import ramDataReducer from "../features/ram/ramData";

export default configureStore({
  reducer: {
    data: ramDataReducer,
  },
});
