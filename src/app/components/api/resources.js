function buildUrl (partialUrl) {
  const urlBase = 'https://staging-ttt-rubyrails-api.herokuapp.com/api/'
  const apiVersion = 'v1'

  return urlBase + apiVersion + partialUrl
}

export const resources = {
  generate_move: buildUrl('/make_a_move')
}
