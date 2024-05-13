const features = {
  feature1: true,
  feature2: false,
  feature3: true,
  feature4: false,
  feature5: true,
  feature6: false,
};
export const getFeatures = (featureName: string) => {
  return !!features[featureName];
};
