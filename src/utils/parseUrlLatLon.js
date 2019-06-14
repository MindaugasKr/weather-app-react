export default (coordinate, type) => {
  const numCoordinate = parseFloat(coordinate);

  if (typeof numCoordinate === "number") {
    if (type === "lat" && (numCoordinate < 90 || numCoordinate > -90)) {
      return numCoordinate;
    } else if (type === "lon" && (numCoordinate < 180 || numCoordinate > -180)) {
      return numCoordinate;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}