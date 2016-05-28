var fs = require('fs'),
    request = require('request'),
    gm = require('gm').subClass({imageMagick: true});

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){

        if(res.headers['content-length']>0){
            console.log(uri);
            console.log('content-type:', res.headers['content-type']);
            console.log('content-length:', res.headers['content-length']);
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        }else{
            callback()
        }

    });
};
var checkFolder = function(file, years, mounth, obj, callback){
    request.head(file, function(err, res, body){
        if(res.headers['content-length']>0){
            callback({years: years,mounth: mounth,obj: obj})
        }
    });
};
var mkdirp = require('mkdirp');
var async = require('async')
var jsdom = require("jsdom");

var arrayWithLink = [
    'amulet',
    'arinka',
    'atlantik',
    'vizit',
    'dobrodvr',
    'dolche-vita',
    'jemchujina',
    'zatishek',
    'kalin-ka',
    'liliya',
    'megapolis',
    'moreleta',
    'olimp',
    'porto',
    'priboi',
    'robinzon',
    'starii-ani',
    'troika',
    'favorit',
    'feniks',
    'everest',
    '3-medvedya',
    '7ya',
    'Aist',
    'Atlantis',
    'avalon',
    'AZORI',
    'Family-club',
    'fiesta',
    'FLY',
    'Fregat',
    'Golden-Fish',
    'Miramar',
    'Paradise',
    'RIO',
    'TOPAZ',
    'avrora',
    'adajio',
    'adelaida',
    'akvarel',
    'aladdin',
    'aleksandriya',
    'aleksis',
    'almaz',
    'alii-parus',
    'altair',
    'amur',
    'antoshka',
    'apelsin',
    'arabika',
    'aramis',
    'arbuz',
    'ariadna',
    'ariel',
    'arlekino',
    'arhideya',
    'afalina',
    'barvinok',
    'belaya-akula',
    'belii-aist',
    'bojya-korovka',
    'brigantina',
    'veselii-kut',
    'viktoriya',
    'villa-viktoriya',
    'villa-lyubimaya',
    'villa-nemo',
    'villa-sofiya',
    'vladislava',
    'vodnik',
    'volna-45',
    'volna-4',
    'garant',
    'garmoniya',
    'gloriya',
    'gostinii-dvor',
    'dashenka',
    'dina-rodina',
    'jar-ptica',
    'zamok',
    'irina',
    'kameliya',
    'karamelka',
    'karina',
    'kenguru',
    'koral',
    'leola',
    'lesya',
    'leto',
    'lider',
    'lidiya',
    'lukomore',
    'lyubava',
    'lyudmila',
    'mango',
    'mesto-pod-solncem',
    'nefertiti',
    'nikoletta',
    'novii-dvorik',
    'odissei',
    'oksamit',
    'olviya',
    'otdohni-ka',
    'otrada',
    'palmira-lyuks',
    'panama',
    'perlina',
    'petrovo-podvore',
    'platan',
    'prestij',
    'proskurov',
    'raduga',
    'rayanda',
    'rozovii-flamingo',
    'samshit',
    'sekret',
    'semeinii',
    'sinyaya-ptica',
    'skazka',
    'flagman',
    'sozvezdie',
    'solnechnii',
    'solnechnii-briz',
    'sofiya',
    'tana',
    'u-zinaidi',
    'u-katyushi',
    'u-larisi',
    'u-morya',
    'ulibka',
    'uyutnii-dvorik-2',
    'francuzskii-dvorik',
    'hutorok-u-viktora',
    'chernomorec',
    'yubileinii',
    'yujnii',
    'yakor',
    'primore',
    'Angel-svetlii-angel',
    'ASTRA-MORE',
    'Lego',
    'ai-petri',
    'albatros',
    'angelina',
    'barrakuda',
    'villa-aleksandra',
    'vodolei',
    'jasmin',
    'katran',
    'leleka',
    'lotos',
    'mayak',
    'mriya',
    'oliviya',
    'ostrov-piratov',
    'podole',
    'sadochok',
    'sahara',
    'slavutich',
    'tavrichanka',
    'u-olgi',
    'uyut',
    'imperiya',
    'palmira',
    'perekrestok',
    'eko--terem',
    'uyutnii-dvorik-1a',
    'Alex',
    'Amelie',
    'AquaLITO',
    'Dasha',
    'GREEN',
    'Green-Yard',
    'GreenLine',
    'izumrud',
    'Lana',
    'le-Grand',
    'Malibu',
    'SV',
    'Solovushka',
    'Valentina-M',
    'Vivat',
    'abrikosovii-djem',
    'avanport',
    'AzaliA',
    'aist',
    'alenka',
    'amarant',
    'anatolevna',
    'arizona',
    'assol',
    'aura',
    'afrodita',
    'bolshaya-semya',
    'vakif',
    'valentina',
    'valdemar',
    'vilena',
    'violetta',
    'vdpochinok',
    'vlad',
    'voyaj',
    'gostinnii-dvor-u-zoi-ivanovni',
    'dejavyu',
    'delfin',
    'djaga-djaga',
    'diana',
    'domashnii-uyut',
    'domiki-v-tenistom-dvore',
    'jeleznii-zamok',
    'zatishok',
    'zelenii-oazis',
    'zolotaya-ribka',
    'zolotaya-ribka-u-anni',
    'ivan--ko',
    'morskaya-258',
    'kapitan',
    'kaplya-morya',
    'kapriz',
    'krasna-gornica',
    'malinovii-dvor',
    'margarita',
    'midiya',
    'mira-17',
    'na-morskoi',
    'natali',
    'nabu',
    'norita',
    'oazis',
    'oazis-nikolya',
    'obereg',
    'alena',
    'orest',
    'orhideya',
    'parus',
    'povitrulya',
    'randevu',
    'rodonit',
    'rozovaya-rosha',
    'romashka',
    'rudnickaya',
    'sadovaya-46',
    'santa-krus',
    'svetlana',
    'siesta',
    'sofya',
    'spokoinii-dom',
    'teplii-stan',
    'tihii-dvorik',
    'troyandi-i-vinograd',
    'u-borisovni',
    'u-kosti',
    'u-lyubashi',
    'u-lyudmili',
    'u-marini',
    'u-pavla',
    'u-chuba',
    'u-yul',
    'uyutnii--dvorik',
    'fiesta',
    'fontanka',
    'fortuna',
    'cvetochnii',
    'chaika',
    'shkolnaya-32',
    'shkolnaya-49',
    'edelveis',
    'eko-dacha',
    'yablochnii-sad',
    'yakutiya',
    'apartamenti',
    'arkadiya',
    'lyuks',
    '-11',
    'dvuhkomnatnaya-kvartira-1',
    'dvuhkomnatnaya-kvartir-10',
    'dvuhkomnatnaya-kvartira-4-i-5',
    'zolotaya-niva-1',
    'dvuhkomnatnaya-kvartira-9',
    'neonila',
    'odnokomnatnaya-kvartira',
    '-12',
    'odnokomnatnaya-kvartira-2-i-3',
    'odnokomnatnaya-kvartira-4-i-5',
    'odnokomnatnaya-kvartira-6-i-7',
    'odnokomnatnie-kvartiri-8-9-10',
    'u-riti',
    'ulyana',
    'delfin',
    'primore',
    '-primore-',
    'dacha-u-morya',
    'akvapark',
    'amulet']
async.waterfall([
    function(callback){
        console.log('1 step')
        var arrayWithLink = [
            'portoferro']
/*
        jsdom.env(
            "http://gport.com.ua/",
            ["http://code.jquery.com/jquery.js"],
            function (err, window) {
                var $ = window.$;
                $("ul.leftMenu a").each(function() {
                    arrayWithLink.push($(this).attr('href').replace('/','').replace('.html',''))
                });
                callback(null, arrayWithLink);
            }
        );

*/
        callback(null, arrayWithLink);

    },
    function(arg1, callback){
/*        var years = ['2011','2012','2013','2014','2015','2016'],
            mounth = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            arrayWithLink = []
        function getFromArr(arr){
            var obj = arr.shift();
            if (typeof obj == 'string') {
                for(var i=0; i<years.length;i++){
                    for(var y=0; y<mounth.length;y++){
                        var file = "http://gport.com.ua/images/pansionat/"+years[i]+"_"+mounth[y]+"/"+obj+".jpg"
                        console.log(file)
                        request.head(file, function(err, res, body){
                            if(res.headers['content-length']!='undefined'){
                                arrayWithLink.push({years: years[i],mounth: mounth[i],obj: obj})
                            }
                        });
                    }
                }
                getFromArr(arr)
            }else{
                callback(null, arrayWithLink);
            }
        }
        getFromArr(arg1);*/
        callback(null, arg1);
    },
    function(arg1, callback){
        var years = ['2011','2012','2013','2014','2015','2016'],
            mounth = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            arrayWithLink = []
        for(var i=0; i<years.length;i++){
            for(var y=0; y<mounth.length;y++){
                var file = "http://gport.com.ua/images/pansionat/"+years[i]+"_"+mounth[y]+"/"+arg1[0]+".jpg"
                checkFolder(file, years[i], mounth[y], arg1[0],function(obj){
                    console.log(obj)
                    callback(null, obj);
                })
            }
        }
    },
    function(arg, callback){
        console.log('2 step')
        console.log(arg)
        var file = "http://gport.com.ua/images/pansionat/"+arg.years+"_"+arg.mounth+"/"+arg.obj+".jpg"
        var filename = file.match(/[^\/]+(\.jpg)/)[0];
        var folder = file.match(/[^\/]+(?=\.jpg)/)[0];
        var arr = [];
        mkdirp('zport-img/'+ folder, function(err) {
            var file = "http://gport.com.ua/images/pansionat/"+arg.years+"_"+arg.mounth+"/"+arg.obj+".jpg"
            var filename = file.match(/[^\/]+(\.jpg)/)[0];
            download(file, 'zport-img/'+ folder +'/'+ filename, function(){
            });

            for(var i=0; i<20; i++){
                arr.push({name: folder+'_'+i+'.jpg', folder: folder, arg: arg, i: i});
            }

            function getFromArr(arr){
                var obj = arr.shift();
                if (typeof obj == 'object') {
                    var file = "http://gport.com.ua/images/pansionat/"+obj.arg.years+"_"+obj.arg.mounth+"/"+folder+"_"+obj.i+".jpg"
                    download(file, 'zport-img/'+ folder +'/'+folder+'_'+obj.i+'.jpg', function(res){
                        getFromArr(arr)
                    });
                }else{
                    callback(null, arg, folder);
                }
            }
            getFromArr(arr)
        });
    },
/*    function(arg1, callback){
        function getFromArr(arr){
            var obj = arr.shift();
            if (typeof obj == 'string') {
                var file = "http://gport.com.ua/images/pansionat/2016_05/"+obj+".jpg"

                var filename = file.match(/[^\/]+(\.jpg)/)[0];
                var folder = file.match(/[^\/]+(?=\.jpg)/)[0]
                mkdirp('zport-img/'+ folder, function(err) {
                    var file = "http://gport.com.ua/images/pansionat/2016_05/"+obj+".jpg"
                    var filename = file.match(/[^\/]+(\.jpg)/)[0];
                    download(file, 'zport-img/'+ folder +'/'+ filename, function(){
                    });
                    var arr = [];
                    for(var i=0; i<20; i++){
                        arr.push({name: folder+'_'+i+'.jpg', folder: folder});
                        var file = "http://gport.com.ua/images/pansionat/2016_05/"+folder+"_"+i+".jpg"
                        download(file, 'zport-img/'+ folder +'/'+folder+'_'+i+'.jpg', function(){
                            console.log('done download');
                        });
                    }
                    getFromArr(arr);
                });
            }else{
                console.log('go next step')
                callback(null, arr, folder);
            }
        }
        getFromArr(arg1);
    },*/
    function(arg1,folder, callback){
        console.log('3 step')
        var arr = [];
        function getFromArr(arr){
            var obj = arr.shift();
            if (typeof obj == 'object') {
                gm('zport-img/'+ obj.folder +'/' +obj.name)
                    .size(function (err, size) {
                        if (!err){
                            console.log(size.width, size.height);
                            var width = size.width,
                                height = size.height
                            gm('zport-img/'+ obj.folder +'/' +obj.name)
                                .crop(width, height-60, 0, 0)
                                .write('zport-img/'+ obj.folder +'/resize/' +obj.name, function (err) {
                                    if (!err) console.log('done');
                                    getFromArr(arr);
                                });
                        }else{
                            getFromArr(arr);
                        }

                    });
            }else{
                callback(null, arg1);
                console.log('finish')
            }
        }
        mkdirp('zport-img/'+ folder+'/resize', function(err) {
            for(var i=0; i<20; i++){
                if(i==0){
                    arr.push({name: folder+'.jpg', folder: folder});
                }else{
                    arr.push({name: folder+'_'+i+'.jpg', folder: folder});
                }
            }
            getFromArr(arr);
        })
    },
    function(arg1, callback){
        // Здесь же arg1 будет равен уже "три"
        callback(null, 'Готово');
    }
], function (err, result) {
    // Сейчас результат будет равен 'Готово'
});

