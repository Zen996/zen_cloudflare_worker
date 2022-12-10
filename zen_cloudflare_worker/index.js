export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
  const clientIP = request.headers.get('CF-Connecting-IP');

  if (request.cf ) {
    var clientASN = request.cf.asn
    var clientCountry = request.cf.country
  }
  if (clientCountry != null && clientCountry != "SG") {
    return Response.redirect("https://1.1.1.1/");
  } 
  return new Response("This is your IP " + clientIP + " and you are accessing this site from "+ clientCountry + "|" + clientASN)
}
