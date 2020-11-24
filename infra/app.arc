@app
react-arc

@http
get /
get /posts
get /posts/:postID
post /posts
delete /posts/:postID

@tables
posts
  postID *String

@indexes
posts
  type *String

@aws
profile personal
region eu-west-1

@macros
arc-macro-no-bucket