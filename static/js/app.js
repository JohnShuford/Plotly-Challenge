
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
function optionChanged(idNumber){
    console.log(idNumber)
    
    // call the funcions
    demInfo(idNumber);
    buildGraph(idNumber);

}


// demographic info fuction
function demInfo (idNumber) {
    // d3 select of the metadata div
    var demList = d3.select("#sample-metadata");

    // importing the JSON with d3
    d3.json('samples.json').then((data) => {
        // getting the metadata
        var metadata = data.metadata;

        // filtering metadata along the idNumber
        var filtered = metadata.filter(d => d.id == idNumber);

        // getting the filtered data
        filtered = filtered[0];

        // clearing out any existing data
        demList.html("");

        // iteraing throught the object and appending the 
        Object.entries(filtered).forEach(([key,value]) => {
            demList.append("h6").text(`${key} : ${value}`);
        });

    });


}

// the function that will build the graphs
function buildGraph (idNumber) {
    // filter through the samples
    d3.json('samples.json').then((data) => {
        // getting the metadata
        var sampleData = data.samples;

        // filtering metadata along the idNumber
        var filtered = sampleData.filter(d => d.id == idNumber);

        // getting the otu ids, sample values and otu labels
        var otuIds = filtered[0]['otu_ids'];
        var sampleValues = filtered[0]['sample_values']
        var otuLabels = filtered[0]['otu_labels']
    
        // clearing out any existing data

        // Horizontal Bar Chart
        var barTrace = {
            x: sampleValues,
            y: otuIds,
            type: 'bar',
            orientation: "h",
            text: otuLabels,
            marker: {
              color: 'rgb(142,124,195)'
            }
        };

        var barData = [barTrace];

        var barLayout = {
            title: "Belly Button Bar"
        };

        Plotly.newPlot('bar', barData, barLayout);
        
        // Bubble Chart
        var bubbleTrace = {
            x: otuIds,
            y: sampleValues,
            mode: 'markers',
            marker: {
              size: sampleValues
            }
          };

        var bubbleData = [bubbleTrace];

        var bubbleLayout = {
            title: "This is a bubble chart"
        };

        Plotly.newPlot('bubble', bubbleData, bubbleLayout)


    });

}

populateDropdown();