d3.json('/gswd3/resources/public/data/service_status.json', function(err, data) {
    "use strict";
    d3.select("body")
        .append("ul")
        .selectAll("li")
        .data(data)
        .enter()
        .append("li")
        .text(function(d) {
            return d.name + ": " + d.status;
        });

    d3.selectAll("li")
        .style("font-weight", function(d) {
            if (d.status == "GOOD SERVICE") {
                return "normal";
            } else {
                return "bold";
            }
        })
});