const PRICE_PER_UNIT = 0.123;
const CARBON_FOOTPRINT_PER_KWH = 0.101;
let readingsOf30Days = null;

export const renderWidgets = (readings) => {
  readingsOf30Days = readings;
  document.getElementById("totalUnits").textContent =
    getTotalUnitsConsumedIn30Days().toFixed(2);
  document.getElementById("totalCost").textContent =
    getCostOfUnitsConsumedIn30Days().toFixed(2);
  document.getElementById("carbonFootprint").textContent =
    getCarbonFootprintOfUnitsConsumedIn30Days().toFixed(2);
};

const getTotalUnitsConsumedIn30Days = () => {
  return readingsOf30Days.reduce((acc, currentValue) => {
    return (acc += currentValue.value);
  }, 0);
};

const getCostOfUnitsConsumedIn30Days = () => {
  return getTotalUnitsConsumedIn30Days() * PRICE_PER_UNIT;
};

const getCarbonFootprintOfUnitsConsumedIn30Days = () => {
  return getTotalUnitsConsumedIn30Days() * CARBON_FOOTPRINT_PER_KWH;
};
