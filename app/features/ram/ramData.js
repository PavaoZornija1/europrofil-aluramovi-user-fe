import { createSlice } from "@reduxjs/toolkit";

export const ramData = createSlice({
  name: "data",
  initialState: {
    frameType: {},
    treatment: {},
    ralCode: "",
    fill: {},
    subFill: {},
    additionalFillTreatment: "",
    hinges: {},
    hingesQty: 0,
    handleProfile: "",
    qty: 1,
    width: 1000,
    height: 1000,
    orientation: "",
  },
  reducers: {
    setFrameType: (state, action) => {
      state.frameType = action.payload;
    },
    setTreatment: (state, action) => {
      state.treatment = action.payload;
    },
    setFill: (state, action) => {
      state.fill = action.payload;
    },
    setRalCode: (state, action) => {
      state.ralCode = action.payload;
    },
    setSubfill: (state, action) => {
      state.subFill = action.payload;
    },
    setAdditionalFillTreatment: (state, action) => {
      state.additionalFillTreatment = action.payload;
    },
    setHinges: (state, action) => {
      state.hinges = action.payload;
    },
    setHingesQty: (state, action) => {
      state.hingesQty = action.payload;
    },
    setHandleProfile: (state, action) => {
      state.handleProfile = action.payload;
    },
    setQty: (state, action) => {
      state.qty = action.payload;
    },
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setOrientation: (state, action) => {
      state.orientation = action.payload;
    },
  },
});
export const {
  setTreatment,
  setFill,
  setRalCode,
  setSubfill,
  setHinges,
  setHingesQty,
  setHandleProfile,
  setQty,
  setWidth,
  setHeight,
  setAdditionalFillTreatment,
  setOrientation,
  setFrameType,
} = ramData.actions;
export default ramData.reducer;
