import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  frameType: {},
  treatment: {},
  ralCode: "",
  fill: {},
  additionalFillTreatment: {},
  individualFronts: [
    {
      orientation: "Leva vrata",
      dimensions: {
        width: "1000",
        height: "1000",
        numberOfPieces: "1",
      },
      hinges: {
        // hasHinge: false,
        // shouldMount: false,
        // activeOption: 0,
        // hinge: {},
        // numberOfHinges: 2,
        // centerDistanceOfHoles: ["100", "900"],
      },
      handles: {
        shouldDrillHoles: false,
        shouldMountProfile: false,
        activeOption: 0,
        positionOption: 0,
        positionName: "",
        wheelbaseOption: 0,
        holeDistanceValue: "",
        holeDistanceManualValue: 0,
        centerDistanceOfHole: ["32", "32"],
        profileOption: 0,
        handleProfile: {},
        profileLengthOption: 0,
        profilePositionOption: 0,
        profileLength: "1000",
        profileDistance: "0",
      },
      locks: {
        productCode: "HLCK",
        activeOption: 0,
        holeDiameter: "250",
        centerDistanceOfHole: ["200", "24"],
      },
      liftingSystem: {
        activeOption: 0,
        activePositionOption: 0,
        activeMechanismOption: 0,
        liftSupport: {},
      },
    },
  ],
};
export const ramData = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFrameType: (state, action) => {
      state.frameType = action.payload;
    },
    setIndividualFronts: (state, action) => {
      state.individualFronts = action.payload;
    },
    setTreatment: (state, action) => {
      state.treatment = action.payload;
    },
    setFill: (state, action) => {
      state.fill = action.payload;
    },
    setLiftingSystem: (state, action) => {
      state.liftingSystem = action.payload;
    },
    setRalCode: (state, action) => {
      state.ralCode = action.payload;
    },
    setLockHole: (state, action) => {
      state.lockHole = action.payload;
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
    setHandleHole: (state, action) => {
      state.handleHole = action.payload;
    },
    setHingeHole: (state, action) => {
      state.hingeHole = action.payload;
    },

    setHandleProfile: (state, action) => {
      state.handleProfile = action.payload;
    },
    setQty: (state, action) => {
      state.qty = action.payload;
    },

    // FIKSATI OVO
    setQtyTotal: (state, action) => {
      state.qtyTotal = action.payload;
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
    setReset: () => {
      return initialState;
    },
  },
});
export const {
  setUser,
  setReset,
  setIndividualFronts,
  setLiftingSystem,
  setLockHole,
  setHingeHole,
  setHandleHole,
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
  setQtyTotal,
} = ramData.actions;
export default ramData.reducer;
