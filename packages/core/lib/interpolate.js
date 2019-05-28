export function interpolate(translation, interpolation) {
  let interpolated = translation
  Object.keys(interpolation).forEach(key => {
    interpolated = interpolated.replace(`%{${key}}`, interpolation[key])
  })

  return interpolated
}
