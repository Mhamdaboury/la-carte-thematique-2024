var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_province_marrakech_safi_jointure_1 = new ol.format.GeoJSON();
var features_province_marrakech_safi_jointure_1 = format_province_marrakech_safi_jointure_1.readFeatures(json_province_marrakech_safi_jointure_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_province_marrakech_safi_jointure_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_province_marrakech_safi_jointure_1.addFeatures(features_province_marrakech_safi_jointure_1);
var lyr_province_marrakech_safi_jointure_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_province_marrakech_safi_jointure_1, 
                style: style_province_marrakech_safi_jointure_1,
                popuplayertitle: "province_marrakech_safi_jointure",
                interactive: true,
    title: 'province_marrakech_safi_jointure<br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_0.png" /> Youssofia <br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_1.png" /> Rehamna <br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_2.png" /> Chichaoua <br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_3.png" /> Essaouira<br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_4.png" />  Kelaa des sraghna<br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_5.png" /> Al haouz <br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_6.png" /> Safi<br />\
    <img src="styles/legend/province_marrakech_safi_jointure_1_7.png" /> MARRAKECH <br />'
        });
var format_chef_lieu_2 = new ol.format.GeoJSON();
var features_chef_lieu_2 = format_chef_lieu_2.readFeatures(json_chef_lieu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chef_lieu_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chef_lieu_2.addFeatures(features_chef_lieu_2);
var lyr_chef_lieu_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chef_lieu_2, 
                style: style_chef_lieu_2,
                popuplayertitle: "chef_lieu",
                interactive: true,
                title: 'chef_lieu'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_province_marrakech_safi_jointure_1.setVisible(true);lyr_chef_lieu_2.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_province_marrakech_safi_jointure_1,lyr_chef_lieu_2];
lyr_province_marrakech_safi_jointure_1.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Data_Devoir_Carte_Thematique — Data_provinces_Area', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Data_Devoir_Carte_Thematique — Data_provinces_lat', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Data_Devoir_Carte_Thematique — Data_provinces_long', });
lyr_chef_lieu_2.set('fieldAliases', {'fid': 'fid', 'Code_Provi': 'Code_Provi', 'Nom_Provin': 'Nom_Provin', 'Area': 'Area', 'Population_2024': 'Population_2024', 'Chef lieu': 'Chef lieu', 'lat': 'lat', 'long': 'long', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_province_marrakech_safi_jointure_1.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Code_Provi': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Nom_Provin': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Area': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Population_2024': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_Chef lieu': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_lat': 'Hidden', 'Data_Devoir_Carte_Thematique — Data_provinces_long': 'Hidden', });
lyr_chef_lieu_2.set('fieldImages', {'fid': 'Hidden', 'Code_Provi': 'Hidden', 'Nom_Provin': 'TextEdit', 'Area': 'TextEdit', 'Population_2024': 'Range', 'Chef lieu': 'TextEdit', 'lat': 'Hidden', 'long': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_province_marrakech_safi_jointure_1.set('fieldLabels', {});
lyr_chef_lieu_2.set('fieldLabels', {'Nom_Provin': 'inline label - always visible', 'Area': 'inline label - always visible', 'Population_2024': 'inline label - always visible', 'Chef lieu': 'inline label - always visible', });
lyr_chef_lieu_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});