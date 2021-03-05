export function directionChecker(direction) {
  const coordinates = {}
  if (direction === 'left') {
    coordinates.x = -600
    coordinates.y = 100
  } else if (direction === 'right') {
    coordinates.x = 600
    coordinates.y = 100
  } else {
    coordinates.x = 25
    coordinates.y = -600
  }
  return coordinates
}
