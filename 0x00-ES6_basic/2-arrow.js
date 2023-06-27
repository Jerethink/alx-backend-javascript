const getNeighborhoodsList = () => {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const addNeighborhood = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };

  return {
    addNeighborhood
  };
};

export default getNeighborhoodsList;

import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res); // ['SOMA', 'Union Square', 'Noe Valley']

