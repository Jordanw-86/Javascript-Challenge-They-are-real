// from data.js
// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");
console.log(data);



// comment this out 





data.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});
