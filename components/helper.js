/**
 * Created by semianchuk on 28.04.16.
 */
var data={

}
data.type =  function(data){
    var type=''
    switch (data){
        case 'chast':
            type = 'Частный сектор'
            break;
        case 'pansionat':
            type = 'Пансионат'
            break;
        case 'hotel':
            type = 'Готель'
            break;
        case 'sanatoriy':
            type = 'Санаторий'
            break;
        case 'otel':
            type = 'Отель'
            break;
        case 'children':
            type = 'Детский лагерь'
            break;
        case 'basi':
            type = 'База отдыха'
            break;
        case 'room':
            type = 'Квартира'
            break;
        default :
            type = 'Частный сектор'
    }
    return type;
};
data.filterData =[
    {type: 'chast', distance: '100', toilet: true,  tv: true, refrigeter: true, conditioner: true, wifi: true, eat: true, children: true, swiming: true, parking: true},
    {type: 'pansionat', distance: '200', toilet: false,  tv: false, refrigeter: false, conditioner: false, wifi: false, eat: false, children: false, swiming: false, parking: false},
    {type: 'hotel', distance: '300'},
    {type: 'sanatoriy', distance: '400'},
    {type: 'otel', distance: '500'},
    {type: 'children', distance: '600'},
    {type: 'basi', distance: '700'},
    {type: 'room', distance: '800'},
    {type: 'children', distance: '900'}

];
data.endPoint = [
    {
        name: "stambul",
        label: "Стамбул",
        lng: 32.29299187660217,
        lat: 46.1172700513178,
        url: 'stambul.jpeg',
        description: 'Рынок это супер рынов желзеном порту'
    },
    {
        name: "briz",
        label: "Бриз",
        lng: 32.291562259197235,
        lat: 46.11757125158769,
        url: 'briz.jpg',
        description: 'Рынок это супер рынов желзеном порту'
    },
    {
        name: "bazarOld",
        label: "Старый рынок",
        lng: 32.30046719312668,
        lat: 46.11692050819993,
        url: 'bazar-old.jpg',
        description: 'Старый рынок'
    },
    {
        name: "bazarNew",
        label: "Рынок паритет",
        lng: 32.2871071100235,
        lat: 46.12479026908993,
        url: 'bazar-new.jpg',
        description: 'Рынок паритет'
    },
    {
        name: "sovet",
        label: "Сельський совет",
        lng: 32.29328691959381,
        lat: 46.12309296475996,
        url: 'selsovet.jpg',
        description: 'Сельський совет'
    },
    {
        name: "medicin3",
        label: "Аптека №3",
        lng: 32.293001264333725,
        lat: 46.1228289762,
        url: 'medicin.jpg',
        description: 'Аптека №3'
    },
    {
        name: "medicin1",
        label: "Аптека №1",
        lng: 32.28106141090393,
        lat: 46.126437329320,
        url: 'medicin.jpg',
        description: 'Аптека №1'
    },
    {
        name: "bus1",
        label: "Автостанция №1",
        lng: 32.28007435798645,
        lat: 46.1266975826389,
        url: 'bus.png',
        description: 'Автостанция №1'
    },
    {
        name: "bus2",
        label: "Автостанция №2",
        lng: 32.28765159845352,
        lat: 46.1241563422655,
        url: 'bus.png',
        description: 'Автостанция №2'
    },
    {
        name: "bus3",
        label: "Автостанция №3",
        lng: 32.29310318827629,
        lat: 46.123228676668,
        url: 'bus.png',
        description: 'Автостанция №3'
    },
    {
        name: "bus4",
        label: "Автостанция №4",
        lng: 32.291473746299744,
        lat: 46.1189600982000,
        url: 'bus.png',
        description: 'Автостанция №4'
    },
    {
        name: "bus5",
        label: "Автостанция №5",
        lng: 32.29784667491913,
        lat: 46.12254081834422,
        url: 'bus.png',
        description: 'Автостанция №5'
    },
    {
        name: "bus6",
        label: "Автостанция №6",
        lng: 32.29784667491913,
        lat: 46.12254081834422,
        url: 'bus.png',
        description: 'Автостанция №6'
    },
    {
        name: "bus7",
        label: "Автостанция №7",
        lng: 32.296414375305176,
        lat: 46.1181160108,
        url: 'bus.png',
        description: 'Автостанция №7'
    },
    {
        name: "bus8",
        label: "Автостанция №8",
        lng: 32.29680061340332,
        lat: 46.118532478474,
        url: 'bus.png',
        description: 'Автостанция №8'
    },
    {
        name: "bus9",
        label: "Автостанция №9",
        lng: 32.302175760269165,
        lat: 46.118086263049705,
        url: 'bus.png',
        description: 'Автостанция №9'
    },
    {
        name: "atm1",
        label: "Банкомат №1",
        lng: 32.30254992842674,
        lat: 46.11941839130809,
        url: 'atm.jpg',
        description: 'Банкомат №1'
    },
    {
        name: "atm2",
        label: "Банкомат №2",
        lng: 32.29308307170868,
        lat: 46.12321008601553,
        url: 'atm.jpg',
        description: 'Банкомат №2'
    },
    {
        name: "atm3",
        label: "Банкомат №3",
        lng: 32.28768244385719,
        lat: 46.11851760468566,
        url: 'atm.jpg',
        description: 'Банкомат №3'
    }
]

module.exports = data;