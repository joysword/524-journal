$(window).resize(function() {
    $("#viz svg").css('width', $(window).width());
    $("#viz svg").css('height', $(window).height());
});

// loader deals with async issue
var loader = {
    queue: [],
    push: function(fn, scope, params) {
        this.queue.push(function(){ fn.apply(scope||window, params||[]); });
    },
    run: function() {
        if (this.queue.length) this.queue.shift().call();
    }
};

// BOGUS delay data
    // stop id: # of stop points & avg delay
    // delay: [0.15 - 1.48]
var stopsData = {"530": [3537, 2.22],"1120": [1688, 9.27],"270": [1592, 5.70],"760": [1558, 5.20],"880": [1739, 9.27],"1210": [1446, 5.57],"1220": [1723, 2.65],"140": [1212, 10.92],"50": [1492, 5.87],"690": [2660, 2.98],"370": [3248, 3.28],"710": [1474, 3.98],"1480": [1303, 2.05],"870": [124, 2.28],"1440": [134, 1.13],"1310": [2155, 2.80],"90": [2807, 1.42],"1500": [441, 0.47],"160": [2360, 3.93],"640": [1272, 4.68],"200": [1246, 1.13],"260": [482, 10.95],"1660": [1464, 3.12],"1490": [1578, 2.95],"230": [1448, 2.80],"1350": [1566, 2.38],"1260": [3377, 5.25],"170": [1316, 6.82],"1160": [344, 3.80],"490": [1644, 3.45],"1410": [1647, 1.73],"590": [1286, 7.47],"570": [619, 3.50],"60": [641, 0.15],"1330": [2741, 1.58],"1280": [50, 2.55],"1430": [55, 7.45],"240": [1277, 1.72],"1230": [1912, 4.40],"190": [1744, 3.93],"720": [1743, 5.28],"1140": [319, 5.22],"940": [2766, 3.32],"290": [2805, 3.80],"1080": [2793, 4.93],"410": [1899, 4.72],"890": [1430, 3.22],"770": [3334, 3.30],"1320": [693, 3.27],"650": [1354, 0.52],"1300": [3298, 3.43],"400": [2958, 2.85],"900": [1511, 2.43],"340": [590, 1.43],"1070": [2531, 6.42],"100": [2628, 6.17],"1450": [840, 4.90],"330": [2514, 5.98],"800": [1990, 4.97],"1010": [984, 3.43],"920": [1389, 5.70],"180": [3142, 3.65],"980": [23, -0.40],"960": [884, 4.77],"250": [709, 11.02],"390": [34, 10.98],"1090": [642, 3.93],"750": [2324, 0.93],"610": [852, 2.22],"700": [919, 0.92],"1360": [800, 0.45],"670": [939, 7.55],"1240": [5681, 1.63],"510": [313, 3.27],"310": [1232, 0.27],"120": [1370, 8.33],"1030": [683, 2.05],"440": [1038, 1.15],"1040": [1874, 1.00],"580": [904, 2.07],"350": [2473, 2.25],"430": [1009, 8.72],"1340": [1427, 2.20],"540": [954, 4.87],"660": [1004, 1.27],"280": [2965, 3.12],"30": [1581, 2.63],"1250": [1363, 3.08],"520": [331, 2.72],"1670": [136, 2.32],"80": [940, 3.72],"1420": [48, 3.32],"380": [1885, 1.17],"70": [340, 3.85],"630": [534, 11.05],"1050": [430, -1.23],"840": [1341, 6.35],"1190": [2547, 2.45],"1380": [1315, 2.50],"460": [2011, 3.30],"730": [1947, 3.17],"360": [1259, 1.62],"680": [347, 3.72],"560": [2473, 6.90],"820": [65, 2.38],"20": [23, 0.57],"320": [3548, 3.18],"450": [1357, 2.65],"910": [994, 2.18],"1170": [1646, 11.15],"1400": [394, 1.13],"1270": [310, 2.95],"300": [3405, 7.13],"550": [1907, 6.98],"480": [338, 4.93],"790": [125, 3.95],"40": [924, 8.28],"1200": [734, 1.57],"1290": [3554, 3.70],"1180": [1172, 3.88],"1460": [2527, 4.32],"470": [942, 3.28],"810": [2473, 4.67],"220": [857, 2.15],"10": [691, 3.43],"970": [1478, 4.57],"850": [801, 3.70],"1020": [56, 3.18],"990": [3249, 2.27],"130": [850, 2.97],"930": [1006, 1.53],"1150": [1355, 7.20],"1060": [904, 2.20],"1130": [870, 1.88],"830": [2002, 4.40],"210": [1938, 3.18],"740": [290, 0.33],"780": [3351, 7.75],"150": [2112, 3.28],"600": [1235, 3.10],"420": [688, 2.63],"1000": [1043, 11.48],"1680": [802, 3.20],"1510": [1418, 2.33],"1690": [2117, 1.82]};

$(document).ready(function() {
    // initialize popup
    $("#viz").on("mousemove", function(e) {
        var x = e.pageX + 20;
        var y = e.pageY;
        if (y > ($(window).height() - 100)) {
            var y = e.pageY - 100;
        } else {
            var y = e.pageY - 20;
        }

        $("#info").css({
            "left": x,
            "top": y
        });
    });

    // initialize toggle
    $(".toggle-lines").on("click", function() {
        var line = $(this).attr("id").replace("toggle-","");
        var lines = $("path[lines*=" + line + "]");
        if ($(this).hasClass("active")) {
            lines.css({
                "stroke-width": "2px"
            });
            lines.animate({
                opacity: .1
            }, 100);
            $(this).removeClass("active");
        } else {
            lines.css({
                "stroke-width": "4px"
            });
            lines.animate({
                opacity: 0.8
            }, 100);
            $(this).addClass("active");
        }
        return false;
    });

    // clean viz div
    $("#viz").html("");

    // set variables
    var lonlat = [-87.64,41.88];
    var width = $(window).width();
    var height = $(window).height();
    var center = {
        x: width/2,
        y: height/2
    };

    // d3 geo
    var projection = d3.geo.mercator()
        .center(lonlat)
        .scale(117000)
        .translate([width/2, height/2]);
    var path = d3.geo.path()
        .projection(projection);
    var colorScaleDelay = d3.scale.linear()
        .domain([0.15, 11.48])
        .range(['#ED3A2D', '#2e0101']);
    var sizeScaleFrequency = d3.scale.linear()
        .domain([1,6000])
        .range([1,40]);
    var stopR = function(d, i) {
        var delay = stopsData[d.properties.STATION_ID];
        if (delay) {
            return sizeScaleFrequency(delay[0]);
        };
    };
    var fillDelay = function(d,i) {
        var delay = stopsData[d.properties.STATION_ID];
        if (delay) {
            return colorScaleDelay(delay[1]);
        };
    };
    var zoom = d3.behavior.zoom()
        .translate(projection.translate())
        .scale(projection.scale())
        .scaleExtent([75000,360000])
        .on("zoom", function() {
            console.log('in zoom');
            projection.translate(d3.event.translate).scale(d3.event.scale);
            group.selectAll("path").attr("d", path);
            group.selectAll("circle.stop").attr("cx", function(d) {
                return projection(d.geometry.coordinates)[0]
            });
            group.selectAll("circle.stop").attr("cy", function(d) {
                return projection(d.geometry.coordinates)[1]
            });
    });

    // initialize viz
    var group = d3.select("#viz").append("svg").attr("width",width).attr("height",height);
    group.call(zoom);

    // functions to draw lines and stops
    var lines = function() {
        d3.json("static/json/lines.json", function(data) {
            group.selectAll("path.line")
                .data(data.features)
                .enter()
                .append("path")
                .classed("line", true)
                .style("fill", "none")
                .attr({
                    d: path,
                    lines: function(d,i) {
                        return d.properties.LINES;
                    }
                })
            loader.run();
        });
    };

    var stops = function() {
        d3.json("static/json/stations.json", function(data) {
            group.selectAll("circle.stop")
                .data(data.features)
                .enter()
                .append("circle")
                .classed("stop", true)
                .style("fill", fillDelay)
                .attr({
                    r: stopR,
                    cx: function(d,i) {
                        return projection(d.geometry.coordinates)[0]
                    },
                    cy: function(d,i) {
                        return projection(d.geometry.coordinates)[1]
                    },
                    stopid: function(d,i) {
                        return d.properties.STATION_ID
                    },
                    name: function(d,i) {
                        return d.properties.LONGNAME
                    },
                    lines: function(d,i) {
                        return d.properties.LINES
                    },
                    delay: function(d,i) {
                        var delay = stopsData[d.properties.STATION_ID];
                        if (delay) {
                            if (delay[1] < 0)   {
                                return 0;
                            } else if (delay[1] < 1) {
                                return 1;
                            } else {
                                //return Math.sqrt(2*(delay^2));
                                return delay[1];
                            }
                        } else {
                            return 0;
                        };
                    },
                })
                .on("mouseover", function(self) {
                    self = $(this);
                    self.animate({
                        "stroke-width": "4px",
                    }, 100);
                    var text = "";
                    if (self.attr("r") <= 1) {
                        var text = "<p><strong>Station " + self.attr("stopid") + "</strong><br/><span>" + self.attr("name") + "</span></p>";
                        text += "<p><strong>Lines</strong><br/><span>" + self.attr("lines") + "</span></p>";
                        text += "<p><strong>Average Delay</strong><br/> < 1 minute</p>";
                    } else {
                        var text = "<p><strong>Station " + self.attr("stopid") + "</strong><br/><span>" + self.attr("name") + "</span></p>";
                        text += "<p><strong>Lines</strong><br/><span>" + self.attr("lines") + "</span></p>";
                        text += "<p><strong>Average Delay</strong><br/> " + self.attr("delay") + " minutes</p>";
                    };
                    $("#info").show().html(text);
                })
                .on("mouseout", function(self) {
                    self = $(this);
                    self.animate({
                        "stroke-width": 0,
                        //"opacity": .3
                    }, 100);
                    $("#info").hide().html("");
                })
            loader.run();
        });
    };

    loader.push(lines);
    loader.push(stops);
    loader.run();

    // zoom in & out buttons
    $("#zoom-in").on("click", function() {
        var newScale = projection.scale() + 100000;
        projection.scale(newScale);
        group.selectAll("path").attr("d", path);
        group.selectAll("circle.stop").attr("cx", function(d) {
            return projection(d.geometry.coordinates)[0]
        });
        group.selectAll("circle.stop").attr("cy", function(d) {
            return projection(d.geometry.coordinates)[1]
        });
        // important! assigns the new scale to the zoom mouse behavior
        var zoom = d3.behavior.zoom()
           .translate(projection.translate())
           .scale(newScale)
           .scaleExtent([75000,360000])
           .on("zoom", function() {
            projection.translate(d3.event.translate).scale(d3.event.scale);
            group.selectAll("path").attr("d", path);
            group.selectAll("circle.stop").attr("cx", function(d) {
                return projection(d.geometry.coordinates)[0]
            });
            group.selectAll("circle.stop").attr("cy", function(d) {
                return projection(d.geometry.coordinates)[1]
            });
        });
        group.call(zoom);
    });
    $("#zoom-out").on("click", function() {
        var newScale = projection.scale() - 100000;
        projection.scale(newScale);
        group.selectAll("path").attr("d", path);
        group.selectAll("circle.stop").attr("cx", function(d) {
            return projection(d.geometry.coordinates)[0]
        });
        group.selectAll("circle.stop").attr("cy", function(d) {
            return projection(d.geometry.coordinates)[1]
        });
        // important! assigns the new scale to the zoom mouse behavior
        var zoom = d3.behavior.zoom()
           .translate(projection.translate())
           .scale(newScale)
           .scaleExtent([75000,360000])
           .on("zoom", function() {
            projection.translate(d3.event.translate).scale(d3.event.scale);
            group.selectAll("path").attr("d", path);
            group.selectAll("circle.stop").attr("cx", function(d) {
                return projection(d.geometry.coordinates)[0]
            });
            group.selectAll("circle.stop").attr("cy", function(d) {
                return projection(d.geometry.coordinates)[1]
            });
        });
        group.call(zoom);
    });
});