export const calculateAluFrameSurfaces = (fronts, treatment) => {
  let percentage = Number(treatment.priceIncrease) / 100;
  let result = 0;

  for (let i = 0; i < fronts.length; ++i) {
    let loopResult = 0;
    let integratedProfile = fronts[i].handles?.handleProfile?.isIntegrated
      ? calculateHandleProfileSurfaces(fronts[i]) * 1000
      : 0;
    console.log(integratedProfile);

    if (fronts[i].dimensions?.height !== fronts[i].dimensions?.width) {
      loopResult =
        fronts[i].dimensions?.numberOfPieces *
          (2 *
            (Number(fronts[i].dimensions?.width) +
              Number(fronts[i].dimensions?.height)) +
            2 *
              (Number(fronts[i].dimensions?.width) +
                Number(fronts[i].dimensions?.height)) *
              percentage) -
        integratedProfile;
    } else {
      loopResult =
        fronts[i].dimensions?.numberOfPieces *
          (4 * fronts[i].dimensions?.width +
            4 * fronts[i].dimensions?.width * percentage) -
        integratedProfile;
    }

    result += loopResult;
  }
  return result / 1000;
};
export const calculateHandleProfileSurfaces = (front) => {
  return (
    ((front.handles.profileLength +
      (front.handles.profileLength / 100) *
        front.handles.handleProfile.priceIncrease) *
      front.dimensions.numberOfPieces) /
    1000
  );
};

export const calculateFillHeight = (frontHeight, frame) => {
  return frontHeight - 2 * frame.fillingHeightReduction * 10;
};

export const calculateAluFrameFillSurfaces = (frame, fronts, fill) => {
  const percentage =
    Number(fill?.priceIncrease) / 100 ||
    Number(fill?.subfill?.priceIncrease) / 100;
  let result = 0;
  for (let i = 0; i < fronts.length; ++i) {
    result +=
      (calculateFillHeight(fronts[i].dimensions?.height, frame) *
        fronts[i].dimensions?.width *
        fronts[i].dimensions?.numberOfPieces +
        calculateFillHeight(fronts[i].dimensions?.height, frame) *
          fronts[i].dimensions?.width *
          fronts[i].dimensions?.numberOfPieces *
          percentage) /
      (1000 * 1000);
  }
  return result;
};
export const calculateAdditionalFillTreatment = (frame, fronts, fill) => {
  let result = 0;
  for (let i = 0; i < fronts.length; ++i) {
    result +=
      (calculateFillHeight(fronts[i].dimensions?.height, frame) *
        fronts[i].dimensions?.width *
        fronts[i].dimensions?.numberOfPieces) /
      (1000 * 1000);
  }
  return result;
};

export const calculateMetalCornersQuantity = (fronts) => {
  let totalCorners = 0;

  for (let i = 0; i < fronts.length; ++i) {
    totalCorners += fronts[i].dimensions?.numberOfPieces;
  }
  return totalCorners * 4;
};

// export const calculateHandleProfileLength = (front) => {
//     return front.handles
// }
