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

module.exports = data;