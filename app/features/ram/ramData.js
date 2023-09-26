import { createSlice } from "@reduxjs/toolkit";

export const ramData = createSlice({
  name: "data",
  initialState: {
    treatment: "",
    ralCode: "",
    fill: "",
    subFill: "",
    additionalFillTreatment: "",
    hinge: "",
    hingeQty: 0,
    handleProfile: "",
    qty: 1,
    width: 1000,
    height: 1000,
    orientation: "",
  },
  reducers: {
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
    setHinge: (state, action) => {
      state.hinge = action.payload;
    },
    setHingeQty: (state, action) => {
      state.hingeQty = action.payload;
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
  setHinge,
  setHingeQty,
  setHandleProfile,
  setQty,
  setWidth,
  setHeight,
  setAdditionalFillTreatment,
  setOrientation,
} = ramData.actions;
export default ramData.reducer;
