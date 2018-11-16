function buildUrl (partialUrl) {
  const urlBase = 'http://localhost:3000/api/'
  const apiVersion = 'v1'

  return urlBase + apiVersion + partialUrl
}

export const resources = {
  generate_move: buildUrl('/make_a_move')
}
