module.exports.handler = async event => {
  const request = event.Records[0].cf.request

  let url = request.uri
  let result

  result = /https*:\/\/[^/]*\//.exec(url)
  const protocolAndDomain = result ? result[0].replace(/\/$/, '') : ''
  url = url.replace(protocolAndDomain, '')

  result = /#.*$/.exec(url)
  const fragment = result ? result[0] : ''
  url = url.replace(fragment, '')

  result = /\?.*$/.exec(url)
  const queryString = result ? result[0] : ''
  url = url.replace(queryString, '')

  let path = url.replace(/^\/|\/$/g, '')
  if (!path.includes('.')) {
    path += `${path && '/'}index.html`
  }

  request.uri = `${protocolAndDomain}/${path}${queryString}${fragment}`

  return request
}
