var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_EDIFICIBERCHIDDA_FID_1 = new ol.format.GeoJSON();
var features_EDIFICIBERCHIDDA_FID_1 = format_EDIFICIBERCHIDDA_FID_1.readFeatures(json_EDIFICIBERCHIDDA_FID_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDIFICIBERCHIDDA_FID_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDIFICIBERCHIDDA_FID_1.addFeatures(features_EDIFICIBERCHIDDA_FID_1);
var lyr_EDIFICIBERCHIDDA_FID_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDIFICIBERCHIDDA_FID_1, 
                style: style_EDIFICIBERCHIDDA_FID_1,
                popuplayertitle: 'EDIFICI BERCHIDDA_FID',
                interactive: true,
                title: '<img src="styles/legend/EDIFICIBERCHIDDA_FID_1.png" /> EDIFICI BERCHIDDA_FID'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_EDIFICIBERCHIDDA_FID_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_EDIFICIBERCHIDDA_FID_1];
lyr_EDIFICIBERCHIDDA_FID_1.set('fieldAliases', {'fid': 'fid', });
lyr_EDIFICIBERCHIDDA_FID_1.set('fieldImages', {'fid': 'Range', });
lyr_EDIFICIBERCHIDDA_FID_1.set('fieldLabels', {'fid': 'no label', });
lyr_EDIFICIBERCHIDDA_FID_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});