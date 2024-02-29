/* eslint-disable no-undef */
module.exports = {
  content: ['./build/*.html', './build/*.js'],
  css: ['./build/*.css'],
  output: "./build/",
  safelist: {
    standard: [/active/, "navbar-collapse", /collapse/, "collapsing", /show/],
    deep: [/^dropdown/, /^modal/, /^carousel/, /collapse/, /navbar/]
  }
}