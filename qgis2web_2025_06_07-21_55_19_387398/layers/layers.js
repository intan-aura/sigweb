var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GARISRPANTAI_LN_25K_1 = new ol.format.GeoJSON();
var features_GARISRPANTAI_LN_25K_1 = format_GARISRPANTAI_LN_25K_1.readFeatures(json_GARISRPANTAI_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GARISRPANTAI_LN_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GARISRPANTAI_LN_25K_1.addFeatures(features_GARISRPANTAI_LN_25K_1);
var lyr_GARISRPANTAI_LN_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GARISRPANTAI_LN_25K_1, 
                style: style_GARISRPANTAI_LN_25K_1,
                popuplayertitle: 'GARISRPANTAI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/GARISRPANTAI_LN_25K_1.png" /> GARISRPANTAI_LN_25K'
            });
var format_TA_Banjir0_2 = new ol.format.GeoJSON();
var features_TA_Banjir0_2 = format_TA_Banjir0_2.readFeatures(json_TA_Banjir0_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TA_Banjir0_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TA_Banjir0_2.addFeatures(features_TA_Banjir0_2);
var lyr_TA_Banjir0_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TA_Banjir0_2, 
                style: style_TA_Banjir0_2,
                popuplayertitle: 'TA_Banjir0',
                interactive: true,
    title: 'TA_Banjir0<br />\
    <img src="styles/legend/TA_Banjir0_2_0.png" /> 1<br />\
    <img src="styles/legend/TA_Banjir0_2_1.png" /> 2<br />\
    <img src="styles/legend/TA_Banjir0_2_2.png" /> 3<br />' });
var format_ADMINISTRASI_AR_5K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASI_AR_5K_3 = format_ADMINISTRASI_AR_5K_3.readFeatures(json_ADMINISTRASI_AR_5K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_AR_5K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_AR_5K_3.addFeatures(features_ADMINISTRASI_AR_5K_3);
var lyr_ADMINISTRASI_AR_5K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_AR_5K_3, 
                style: style_ADMINISTRASI_AR_5K_3,
                popuplayertitle: 'ADMINISTRASI_AR_5K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_AR_5K_3.png" /> ADMINISTRASI_AR_5K'
            });
var format_JALAN_LN_50K_4 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_4 = format_JALAN_LN_50K_4.readFeatures(json_JALAN_LN_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_4.addFeatures(features_JALAN_LN_50K_4);
var lyr_JALAN_LN_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_4, 
                style: style_JALAN_LN_50K_4,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_4.png" /> JALAN_LN_50K'
            });
var format_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5 = new ol.format.GeoJSON();
var features_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5 = format_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5.readFeatures(json_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5.addFeatures(features_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5);
var lyr_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5, 
                style: style_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5,
                popuplayertitle: 'dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk',
                interactive: true,
                title: '<img src="styles/legend/dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5.png" /> dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk'
            });
var format_sebaran_tpi_bantul_6 = new ol.format.GeoJSON();
var features_sebaran_tpi_bantul_6 = format_sebaran_tpi_bantul_6.readFeatures(json_sebaran_tpi_bantul_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sebaran_tpi_bantul_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sebaran_tpi_bantul_6.addFeatures(features_sebaran_tpi_bantul_6);
var lyr_sebaran_tpi_bantul_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sebaran_tpi_bantul_6, 
                style: style_sebaran_tpi_bantul_6,
                popuplayertitle: 'sebaran_tpi_bantul',
                interactive: true,
                title: '<img src="styles/legend/sebaran_tpi_bantul_6.png" /> sebaran_tpi_bantul'
            });
var format_buf_garispantai_7 = new ol.format.GeoJSON();
var features_buf_garispantai_7 = format_buf_garispantai_7.readFeatures(json_buf_garispantai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buf_garispantai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buf_garispantai_7.addFeatures(features_buf_garispantai_7);
var lyr_buf_garispantai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buf_garispantai_7, 
                style: style_buf_garispantai_7,
                popuplayertitle: 'buf_garispantai',
                interactive: true,
                title: '<img src="styles/legend/buf_garispantai_7.png" /> buf_garispantai'
            });
var format_jalan_8 = new ol.format.GeoJSON();
var features_jalan_8 = format_jalan_8.readFeatures(json_jalan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_8.addFeatures(features_jalan_8);
var lyr_jalan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_8, 
                style: style_jalan_8,
                popuplayertitle: 'jalan',
                interactive: true,
                title: '<img src="styles/legend/jalan_8.png" /> jalan'
            });
var format_tpi_9 = new ol.format.GeoJSON();
var features_tpi_9 = format_tpi_9.readFeatures(json_tpi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tpi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tpi_9.addFeatures(features_tpi_9);
var lyr_tpi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tpi_9, 
                style: style_tpi_9,
                popuplayertitle: 'tpi',
                interactive: true,
                title: '<img src="styles/legend/tpi_9.png" /> tpi'
            });
var format_buf_pasar_10 = new ol.format.GeoJSON();
var features_buf_pasar_10 = format_buf_pasar_10.readFeatures(json_buf_pasar_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buf_pasar_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buf_pasar_10.addFeatures(features_buf_pasar_10);
var lyr_buf_pasar_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buf_pasar_10, 
                style: style_buf_pasar_10,
                popuplayertitle: 'buf_pasar',
                interactive: true,
                title: '<img src="styles/legend/buf_pasar_10.png" /> buf_pasar'
            });
var format_admgarispt_11 = new ol.format.GeoJSON();
var features_admgarispt_11 = format_admgarispt_11.readFeatures(json_admgarispt_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admgarispt_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admgarispt_11.addFeatures(features_admgarispt_11);
var lyr_admgarispt_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admgarispt_11, 
                style: style_admgarispt_11,
                popuplayertitle: 'adm-garispt',
                interactive: true,
                title: '<img src="styles/legend/admgarispt_11.png" /> adm-garispt'
            });
var format_disj_12 = new ol.format.GeoJSON();
var features_disj_12 = format_disj_12.readFeatures(json_disj_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_disj_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_disj_12.addFeatures(features_disj_12);
var lyr_disj_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_disj_12, 
                style: style_disj_12,
                popuplayertitle: 'disj',
                interactive: true,
                title: '<img src="styles/legend/disj_12.png" /> disj'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GARISRPANTAI_LN_25K_1.setVisible(true);lyr_TA_Banjir0_2.setVisible(true);lyr_ADMINISTRASI_AR_5K_3.setVisible(true);lyr_JALAN_LN_50K_4.setVisible(true);lyr_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5.setVisible(true);lyr_sebaran_tpi_bantul_6.setVisible(true);lyr_buf_garispantai_7.setVisible(true);lyr_jalan_8.setVisible(true);lyr_tpi_9.setVisible(true);lyr_buf_pasar_10.setVisible(true);lyr_admgarispt_11.setVisible(true);lyr_disj_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GARISRPANTAI_LN_25K_1,lyr_TA_Banjir0_2,lyr_ADMINISTRASI_AR_5K_3,lyr_JALAN_LN_50K_4,lyr_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5,lyr_sebaran_tpi_bantul_6,lyr_buf_garispantai_7,lyr_jalan_8,lyr_tpi_9,lyr_buf_pasar_10,lyr_admgarispt_11,lyr_disj_12];
lyr_GARISRPANTAI_LN_25K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_TA_Banjir0_2.set('fieldAliases', {'fid': 'fid', 'KELAS': 'KELAS', 'Luas': 'Luas', 'Skor_Ban': 'Skor_Ban', 'KECAMATAN': 'KECAMATAN', 'KODE_DESA': 'KODE_DESA', 'KODE_KEC': 'KODE_KEC', 'DESA': 'DESA', 'luas_2': 'luas_2', 'IdDesa': 'IdDesa', 'Skor_IPT': 'Skor_IPT', 'IPT': 'IPT', 'SkorTA_Ban': 'SkorTA_Ban', 'TA_Ban': 'TA_Ban', });
lyr_ADMINISTRASI_AR_5K_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KDCPUM': 'KDCPUM', 'KDEPUM': 'KDEPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'METADATA': 'METADATA', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKD': 'WIADKD', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'SHAPE_Area': 'SHAPE_Area', 'SHAPE_Leng': 'SHAPE_Leng', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDEBPS': 'KDEBPS', 'KDPBPS': 'KDPBPS', });
lyr_JALAN_LN_50K_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5.set('fieldAliases', {'data_id': 'data_id', 'data_year': 'data_year', 'data_name': 'data_name', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'nama_unsur': 'nama_unsur', 'nama_gener': 'nama_gener', 'nama_spesi': 'nama_spesi', 'koordinat_': 'koordinat_', 'koordinat0': 'koordinat0', });
lyr_sebaran_tpi_bantul_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', });
lyr_buf_garispantai_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'DTMVER': 'DTMVER', 'KARGPN': 'KARGPN', 'FCODE': 'FCODE', 'KODGPN': 'KODGPN', 'TIPGPN': 'TIPGPN', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalan_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_tpi_9.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', });
lyr_buf_pasar_10.set('fieldAliases', {'data_id': 'data_id', 'data_year': 'data_year', 'data_name': 'data_name', 'objectid': 'objectid', 'namobj': 'namobj', 'fcode': 'fcode', 'remark': 'remark', 'metadata': 'metadata', 'srs_id': 'srs_id', 'nama_unsur': 'nama_unsur', 'nama_gener': 'nama_gener', 'nama_spesi': 'nama_spesi', 'koordinat_': 'koordinat_', 'koordinat0': 'koordinat0', });
lyr_admgarispt_11.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KDCPUM': 'KDCPUM', 'KDEPUM': 'KDEPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'METADATA': 'METADATA', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKD': 'WIADKD', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'SHAPE_Area': 'SHAPE_Area', 'SHAPE_Leng': 'SHAPE_Leng', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDEBPS': 'KDEBPS', 'KDPBPS': 'KDPBPS', });
lyr_disj_12.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'KDCPUM': 'KDCPUM', 'KDEPUM': 'KDEPUM', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'METADATA': 'METADATA', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKD': 'WIADKD', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'SHAPE_Area': 'SHAPE_Area', 'SHAPE_Leng': 'SHAPE_Leng', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDEBPS': 'KDEBPS', 'KDPBPS': 'KDPBPS', });
lyr_GARISRPANTAI_LN_25K_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'DTMVER': 'TextEdit', 'KARGPN': 'TextEdit', 'FCODE': 'TextEdit', 'KODGPN': 'TextEdit', 'TIPGPN': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_TA_Banjir0_2.set('fieldImages', {'fid': 'Range', 'KELAS': 'TextEdit', 'Luas': 'TextEdit', 'Skor_Ban': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_DESA': 'TextEdit', 'KODE_KEC': 'Range', 'DESA': 'TextEdit', 'luas_2': 'TextEdit', 'IdDesa': 'TextEdit', 'Skor_IPT': 'TextEdit', 'IPT': 'TextEdit', 'SkorTA_Ban': 'TextEdit', 'TA_Ban': 'Range', });
lyr_ADMINISTRASI_AR_5K_3.set('fieldImages', {'fid': 'Range', 'Id': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'METADATA': 'TextEdit', 'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKD': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDPBPS': 'TextEdit', });
lyr_JALAN_LN_50K_4.set('fieldImages', {'fid': 'Range', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'DateTime', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5.set('fieldImages', {'data_id': 'TextEdit', 'data_year': 'Range', 'data_name': 'TextEdit', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'nama_unsur': 'TextEdit', 'nama_gener': 'TextEdit', 'nama_spesi': 'TextEdit', 'koordinat_': 'TextEdit', 'koordinat0': 'TextEdit', });
lyr_sebaran_tpi_bantul_6.set('fieldImages', {'fid': 'Range', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', });
lyr_buf_garispantai_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'DTMVER': 'TextEdit', 'KARGPN': 'TextEdit', 'FCODE': 'TextEdit', 'KODGPN': 'TextEdit', 'TIPGPN': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalan_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_tpi_9.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', });
lyr_buf_pasar_10.set('fieldImages', {'data_id': 'TextEdit', 'data_year': 'TextEdit', 'data_name': 'TextEdit', 'objectid': 'TextEdit', 'namobj': 'TextEdit', 'fcode': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'srs_id': 'TextEdit', 'nama_unsur': 'TextEdit', 'nama_gener': 'TextEdit', 'nama_spesi': 'TextEdit', 'koordinat_': 'TextEdit', 'koordinat0': 'TextEdit', });
lyr_admgarispt_11.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'METADATA': 'TextEdit', 'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKD': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDPBPS': 'TextEdit', });
lyr_disj_12.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'METADATA': 'TextEdit', 'OBJECTID': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKD': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDPBPS': 'TextEdit', });
lyr_GARISRPANTAI_LN_25K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_TA_Banjir0_2.set('fieldLabels', {'fid': 'no label', 'KELAS': 'no label', 'Luas': 'no label', 'Skor_Ban': 'no label', 'KECAMATAN': 'no label', 'KODE_DESA': 'no label', 'KODE_KEC': 'no label', 'DESA': 'no label', 'luas_2': 'no label', 'IdDesa': 'no label', 'Skor_IPT': 'no label', 'IPT': 'no label', 'SkorTA_Ban': 'no label', 'TA_Ban': 'no label', });
lyr_ADMINISTRASI_AR_5K_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'KDCPUM': 'no label', 'KDEPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'METADATA': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKD': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'SHAPE_Area': 'no label', 'SHAPE_Leng': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDEBPS': 'no label', 'KDPBPS': 'no label', });
lyr_JALAN_LN_50K_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_dir_sebaran_pst_prdgngn_trdsional_psr_ecrn_grsr_induk_5.set('fieldLabels', {'data_id': 'no label', 'data_year': 'no label', 'data_name': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'nama_unsur': 'no label', 'nama_gener': 'no label', 'nama_spesi': 'no label', 'koordinat_': 'no label', 'koordinat0': 'no label', });
lyr_sebaran_tpi_bantul_6.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', });
lyr_buf_garispantai_7.set('fieldLabels', {'NAMOBJ': 'no label', 'DTMVER': 'no label', 'KARGPN': 'no label', 'FCODE': 'no label', 'KODGPN': 'no label', 'TIPGPN': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalan_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_tpi_9.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', });
lyr_buf_pasar_10.set('fieldLabels', {'data_id': 'no label', 'data_year': 'no label', 'data_name': 'no label', 'objectid': 'no label', 'namobj': 'no label', 'fcode': 'no label', 'remark': 'no label', 'metadata': 'no label', 'srs_id': 'no label', 'nama_unsur': 'no label', 'nama_gener': 'no label', 'nama_spesi': 'no label', 'koordinat_': 'no label', 'koordinat0': 'no label', });
lyr_admgarispt_11.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'KDCPUM': 'no label', 'KDEPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'METADATA': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKD': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'SHAPE_Area': 'no label', 'SHAPE_Leng': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDEBPS': 'no label', 'KDPBPS': 'no label', });
lyr_disj_12.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'KDCPUM': 'no label', 'KDEPUM': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'METADATA': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKD': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'SHAPE_Area': 'no label', 'SHAPE_Leng': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDEBPS': 'no label', 'KDPBPS': 'no label', });
lyr_disj_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});