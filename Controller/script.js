/**
 * Initialize the app
 */

function init() {
  //   alert("Hello");
  loadDoc();
  //   console.log(localStorage.getItem("token"));
  //   localStorage.removeItem("token");
  //
}

async function loadDoc() {
  var cors_api_host = "cors-anywhere.herokuapp.com";
  var cors_api_url = "https://" + cors_api_host + "/";
  var url = "https://challenge.paystand.mx";
  var genURL = cors_api_url + url;
  const people = [];
  var response = await fetchAPI(
    url + "?email=osvaldofabricio11@gmail.com&name=Osvaldo Carrillo"
  );
  var tokenData = await response.json();
  //   console.log("Teh token => ", tokenData);
  //   var statusURL = true;
  //   do {
  //     var dataPeople = await fetchAPI(url + "/data?token=" + tokenData.token);

  //     const waitFor = (delay) =>
  //       new Promise((resolve) => setTimeout(resolve, delay));

  //     await waitFor(500);
  //     if (dataPeople.status != 400) {
  //       console.log(dataPeople.status);
  //       var dataJson = await dataPeople.json();
  //       people.push(dataJson);
  //       console.log(dataJson);
  //     } else {
  //       statusURL = false;
  //     }
  //   } while (statusURL);
}

function fetchAPI(url) {
  return fetch(url, {
    method: "GET",
  });
}

init();
