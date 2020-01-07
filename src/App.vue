<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
h1, h2, h3, h4, h5, h6 {
  font-size: 100%;
  margin: 0;
  font-weight: 400
}

body, dd, dl, form {
  margin: 0
}

img {
  border: 0;
}

button, input, select, textarea {
  font-size: 1em;
  font-family: inherit;
}

input, textarea {
  -webkit-appearance: none;
}

a, a:hover {
  text-decoration: none
}

pre {
  font-family: Monaco, Consolas, "Lucida Console", monospace;
  font-size: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>