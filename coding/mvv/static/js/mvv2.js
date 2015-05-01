$(window).resize(function () {
    var h = $(window).height(),
      offsetTop = 50; // Calculate the top offset

    $('#map').css('height', (h - offsetTop));
}).resize();

(function(){

    var map_layer = new L.featureGroup();

    var cached_eff = {};
    var cached_json = {};
    var cache_index;
    var cached_jenks = {};
    var jenks_cutoffs;

    var map = L.map('map', {center: [41.8910,-87.8839], zoom: 11, minZoom: 9});

    var base_layer = L.tileLayer('https://{s}.tiles.mapbox.com/v3/joysword.i6b4jale/{z}/{x}/{y}.png', {
        attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>&copy; Mapbox &copy; OpenStreetMap</a> | <a href='http://joysword.com' target='_blank'>&copy; Shi Yin<a/>"
    });

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
        var low;
        var high;
        $.each(cached_jenks[cache_index], function(i, v) {
            low = v;
            high = cached_jenks[cache_index][i+1];
            labels.push('<i style="background:' + get_color(low) + '"></i>' +
                low.toFixed(2) + (high ? '&ndash;' + high.toFixed(2) : '+'));
        });
        div.innerHTML = '<div><strong>' + 'Efficiency:' + '</strong><br />' + labels.join('<br />') + '</div>';
        return div;
    }

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

        cache_index = ori_num;

        var filename = '/static/json/mvv/' + cache_index + '.json';

        if (typeof cached_json[cache_index] === 'undefined') {
            $.getJSON($SCRIPT_ROOT + filename, function(data) {
                cached_json[cache_index] = data;

                var eff_data = get_efficiency(data);

                cached_eff[cache_index] = eff_data;

                jenks_cutoffs = jenks(eff_data, 7);
                //console.log('jenks:', jenks_cutoffs);
                jenks_cutoffs[0] = 0;
                jenks_cutoffs.pop();
                cached_jenks[cache_index] = jenks_cutoffs;
                //console.log('jenks:', jenks_cutoffs);

                render_layer(e);
            });
        }
        else {
            render_layer(e);
        }
    }

    function get_efficiency(data) {
        var eff = [];
        var max = 0.01;
        for (var i in data) {
            eff[i] = data[i].auto / data[i].transit;
            if (eff[i]>1) eff[i] = 1;
            if (eff[i]>max) max = eff[i];
        }
        var multi = 10/max;
        for (var i=0;i<eff.length;i++) {
            eff[i] *= multi;
        }
        return eff;
    }

    function render_layer(e) {
        var data = cached_eff[cache_index];
        var time_data = cached_json[cache_index];

        for (var i in map_layer._layers) {
            var bg = map_layer._layers[i];
            var num = bg.feature.properties.num;
            var content = 'id: ' + num;
            content += '<br>GEOID10: ' + bg.feature.properties.GEOID10;
            if (_.has(data, num)) {
                if (cache_index == num) {
                    bg.setStyle({fillColor: '#f46d6c'});
                }
                else {
                    bg.setStyle(eff_style(data[num]));
                }
                content += '<br>Time by transit: ' + to_time(time_data[num]['transit']);
                content += '<br>Time by driving: ' + to_time(time_data[num]['auto']);
                content += '<br>Transit Efficiency: ' + data[num].toFixed(1);
            }
            else {
                bg.setStyle(eff_style(0));
                content += '<br>Transit Efficiency: N/A';
            }
            bg.bindLabel(content);
        }
        if (typeof e !== 'undefined') {
            e.target._showLabel(e);
        }

        $('#map').spin(false);

        try {
            legend.removeFrom(map);
        } catch(e) {};

        legend.addTo(map);
    }

    function get_color(d) {
        if (d > cached_jenks[cache_index][3]) {
            if (d > cached_jenks[cache_index][5]) {
                if (d > cached_jenks[cache_index][6]) {
                    return map_colors[7];
                }
                else {
                    return map_colors[6];
                }
            }
            else {
                if (d > cached_jenks[cache_index][4]) {
                    return map_colors[5];
                }
                else {
                    return map_colors[4];
                }
            }
        }
        else {
            if (d > cached_jenks[cache_index][1]) {
                if (d > cached_jenks[cache_index][2]) {
                    return map_colors[3];
                }
                else {
                    return map_colors[2];
                }
            }
            else {
                if (d > cached_jenks[cache_index][0]) {
                    return map_colors[1];
                }
                else {
                    return map_colors[0];
                }
            }
        }
    }

    var map_colors = [
        '#005a32',
        '#238b45',
        '#41ab5d',
        '#74c476',
        '#a1d99b',
        '#c7e9c0',
        '#e5f5e0',
        '#f7fcf5'
    ]

    function to_time(sec) {
        return Math.floor(sec/60) + ' min';
    }

    function empty_style(feature) {
        return {
            weight: 1,
            color: '#fff',
            fillColor: '#7c7dbb',
            fillOpacity: 0.5
        }
    }

    function eff_style(num) {
        return {
            weight: 1,
            color: '#fff',
            fillColor: get_color(num),
            fillOpacity: 0.5
        }
    }

})();