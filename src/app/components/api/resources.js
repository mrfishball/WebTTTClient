function buildUrl (partialUrl) {
  const urlBaseProd = 'https://live-ttt-rubyrails-api.herokuapp.com/api/'
  const apiVersion = 'v1'

  return urlBaseProd + apiVersion + partialUrl
}

export const resources = {
  generate_move: buildUrl('/make_a_move')
}
