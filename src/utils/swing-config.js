import VueSwing from 'vue-swing'

export const swingConfig = {
  maxRotation: 80,
  minThrowOutDistance: 150,
  maxThrowOutDistance: 300,
  allowedDirections: [
    VueSwing.Direction.UP,
    VueSwing.Direction.LEFT,
    VueSwing.Direction.RIGHT
  ]
}
