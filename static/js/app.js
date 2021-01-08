
// Function that populates the dropdown
function populateDropdown(){
    var select = d3.select("#selDataset");

    d3.json('samples.json').then((data) => {
        // console.log(data.names);

        var names = data.names;

        names.forEach((id) =>{
            select.append("option")
            .text(id)
            .property("value", id)
        });

    });

    // initiating the graphs at the start
    demInfo('940');
    buildGraph('940');
    
}


// the main function that will do the dirty work of getting everything goin'
function optionChanged(value){
    console.log(value)
    
    // call the funcions
    demInfo(value);
    buildGraph(value);

}


// the function that will build the table
function demInfo (value) {
    var demList = d3.select("#sample-metadata");
    d3.json('samples.json').then((data) => {
        var metadata = data.metadata;
        var filtered = metadata.filter(d => d.id == value);
        console.log(filtered[0]);
        filtered = filtered[0];
        demList.html("");
        Object.entries(filtered).forEach(([key,value]) => {
            demList.append("h6").text(`${key} : ${value}`);
        });

    });


}

// the function that will build the graphs
function buildGraph (value) {
    // filter through the samples
    d3.json('samples.json').then((data) => {


    });

}

populateDropdown();