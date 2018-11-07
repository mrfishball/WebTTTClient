function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function fetchBoard() {
  return window.fetch("https://live-ttt-rubyrails-api.herokuapp.com/v1/game")
  .then(validateResponse)
  .then(readResponseAsJSON)
  .then(logResult)
  .catch(logError);
}

fetchBoard();
