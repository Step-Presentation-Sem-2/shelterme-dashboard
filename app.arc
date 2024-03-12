@app
authentiscan-dashboard

@aws
region us-west-2
runtime nodejs18.x
# concurrency 1
# memory 1152
# profile default
# region us-west-1
# timeout 30


@plugins
plugin-remix
  src plugin-remix.js

@static
