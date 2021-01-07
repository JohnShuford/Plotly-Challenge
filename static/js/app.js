
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
};


// the main function that will do the dirty work of getting everything goin'
function optionChanged(value){
    console.log(value)
    // call the funcions
};


// the function that will filter
function filterData (value) {
    d3.json('samples.json').then((data) => {

    }
};

// the function that will build the table
function buildTable (value) {


}

// the function that will build the graphs



populateDropdown();