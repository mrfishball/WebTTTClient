import { endpoints } from './endpoints'

function logResult (result) {
  console.log(result)
  return result
}

function logError (error) {
  console.log('Looks like there was a problem: \n', error)
}

function validateResponse (response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

function readResponseAsJSON (response) {
  return response.json()
}

export function fetchBoard () {
  return window.fetch(endpoints.game_board)
    .then(validateResponse)
    .then(readResponseAsJSON)
    .then(logResult)
    .catch(logError)
}
