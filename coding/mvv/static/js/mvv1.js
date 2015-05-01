$(window).resize(function () {
    var h = $(window).height(),
      offsetTop = 50; // Calculate the top offset

    $('#map').css('height', (h - offsetTop));
}).resize();

(function(){

    var map_layer = new L.featureGroup();

    var map = L.map('map', {center: [41.8910,-87.8839], zoom: 11, minZoom: 9});

    var base_layer = L.tileLayer('https://{s}.tiles.mapbox.com/v3/joysword.i6b4jale/{z}/{x}/{y}.png', {
        attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> | <a href='http://joysword.com' target='_blank'>&copy; Shi Yin<a/>"
    })

    var first_time = true;

    base_layer.on('load', function() {
        if (first_time) {
            show_map();
            first_time = false;
        }
    })
    base_layer.addTo(map);

    var legend = L.control({position: 'topright'});

    legend.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'legend');
        var labels = [];
        labels.push('<i style="background:' + get_best_color(0,1,{'auto':10,'transit':1,'walking':10}) + '"></i>' +
            'Transit');
        labels.push('<i style="background:' + get_best_color(0,1,{'auto':10,'transit':10,'walking':1}) + '"></i>' +
            'Walking');
        div.innerHTML = '<div><strong>' + 'Legend' + '</strong><br />' + labels.join('<br />') + '</div>';
        return div;
    }

    legend.addTo(map);

    // called when the button is clicked
    function show_map(e) {

        $('#map').spin({lines: 12, length: 0, width: 8, radius: 12});

        var filename = '/static/json/chicago.topojson';

        $.getJSON($SCRIPT_ROOT + filename, function(data) {
            console.log('got topojson');

            var which_feature = 0;
            map_layer = L.geoJson(topojson.feature(data, data.objects['BlockGroupsTIGER2010']), {
                style: empty_style,
                onEachFeature: function(feature, layer) {
                    feature.properties.num = which_feature;
                    var content = 'GEOID10: ' + feature.properties.GEOID10;
                    layer.bindLabel(content);
                    layer.on('click', clickHandler);
                    which_feature++;
                }
            });

            $('#map').spin(false);

            map_layer.addTo(map);
        });
    }

    function clickHandler(e) {
        e.target._hideLabel();
        select_bg(e.target.feature.properties.num, e);
    }

    function select_bg(ori_num, e) {
        var filename = '/static/json/mvv/' + ori_num + '.json';

        $.getJSON($SCRIPT_ROOT + filename, function(data) {
            $.each(map_layer._layers, function(i, bg) {
                var des_num = bg.feature.properties.num;
                var content = 'GEOID10: ' + bg.feature.properties.GEOID10;
                if (_.has(data, des_num)) {
                    bg.setStyle({
                        fill: true,
                        fillColor: get_best_color(ori_num, des_num, data[des_num]),
                    });
                    var mode = get_best_mode(ori_num, des_num, data[des_num]);
                    content += '<br>Best Mode: ' + mode;
                    content += '<br>Travel Time: ' + to_time(data[des_num][mode]);
                }
                else {
                    bg.setStyle({
                        fillOpacity: 0,
                        stroke: false
                    });
                }
                bg.bindLabel(content);
            });
            if (typeof e !== 'undefined') {
                e.target._showLabel(e);
            }
        });
    }

    function get_best_color(ori, des, time) {
        if (ori == des) {
            return '#fff';
        }
        var mode = get_max(time.transit, time.walking);
        if (mode == 'transit') {
            return '#fedc6c';
        }
        else {
            return '#f46d6c';
        }
    }

    function get_max(auto, tran, walk) {
        if (auto < tran) {
            if (auto < walk) {
                return 'auto';
            }
            else {
                if (tran < walk) {
                    return 'tranit';
                }
                else return 'walking';
            }
        }
        else {
            if (tran < walk) {
                return 'transit'
            }
            else {
                if (auto < walk) {
                    return 'auto';
                }
                else return 'walking';
            }
        }
    }

    function get_max(tran, walk) {
        if (tran<walk) {
            return 'transit'
        }
        else {
            return 'walking'
        }
    }

    function get_best_mode(ori, des, time) {
        if (ori == des) {
            return 'N/A';
        }
        //return get_max(time.auto, time.transit, time.walking);
        return get_max(time.transit, time.walking);
    }

    function to_time(sec) {
        return Math.floor(sec/60) + ' min';
    }

    function empty_style(feature) {
        return {
            weight: 1,
            color: '#fff',
            fillColor: '#7c7dbb',
            fillOpacity: 0.5,
        }
    }

})();