const url = "../samples.json"

d3.json(url).then(function (data) {
    console.log(data);
});

function optionchange() {
    let dropdownMenu = d3.select("#selDataset");
    d3.json(url).then(data => {
        let sampleID = data.names;
        sampleID.forEach(sample => {
            dropdownMenu.append("option").text(sample).property("value", sample)
        });
        let dataID = dropdownMenu.property("value");
        console.log(dataID);
        barChart(dataID);
        bubbleChart(dataID);
        MediaMetadata(dataID);
    });
};
