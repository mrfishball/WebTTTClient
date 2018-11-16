export function validateResponse (response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export function readResponseAsJSON (response) {
  return response.json()
}

export function errorAlert (error) {
  window.alert(`${error}`)
}
