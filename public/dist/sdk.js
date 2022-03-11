window.onload = function () {
  var head = document.head;
  var jwtDecode = document.createElement("script");
  var appEngine = document.createElement("script");
  jwtDecode.defer = true;
  appEngine.defer = true;

  jwtDecode.src =
    "https://cdn.jsdelivr.net/npm/jwt-decode@1.5.1/build/jwt-decode.min.js";
  appEngine.src = "/dist/engine.js";
  head.appendChild(jwtDecode);
  head.appendChild(appEngine);
};
