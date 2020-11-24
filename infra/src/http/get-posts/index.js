// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http(req) {
  const data = {
    posts: [{ postID: "001", title: "Hello World", type: "post" }],
  };

  return {
    statusCode: 200,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: JSON.stringify(data),
  };
};
