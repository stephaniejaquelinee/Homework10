var specVis1 = "./econ.vg.json";
var specVis2= "./hw10.vg.json";
vegaEmbed("#vis1", specVis1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed('#vis2', specVis2, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);