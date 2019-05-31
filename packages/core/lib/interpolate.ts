export function interpolate(translation: string, interpolation?: { [key: string]: any }) {
  let interpolated = translation
  interpolation && Object.keys(interpolation).forEach(key => {
    interpolated = interpolated.replace(`%{${key}}`, interpolation[key])
  })

  return interpolated
}
