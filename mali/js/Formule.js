$(document).on('click','.districtCal',function(){
    const districtPrice = $('.districtPrice').val()
    let consequense

    if($('.certainly').is(":checked")){
        consequense =  districtPrice * 10/100
        $('.District-Court').text(consequense)
    }
    else if(districtPrice <= 500000000){
        lessthan50 = districtPrice * 8/100
        $('.District-Court').text(lessthan50)
    }
    else if( 500000000 < districtPrice <= 2000000000){
        morethan50 = ((districtPrice-500000000) * 7/100)+(500000000*8/100)
        $('.District-Court').text(morethan50)
    }
    else if( 2000000000 < districtPrice <= 10000000000){
        morethan200 = ((districtPrice - 2500000000) * 5/100) + (2000000000 * 7/100) + (500000000*8/100)
        $('.District-Court').text(morethan200)
    }
    else if( 10000000000 < districtPrice <= 30000000000){
        morethan1000 = ((districtPrice - 12500000000) * 4/100) +(10000000000 * 5/100) + (2000000000 * 7/100) + (500000000*8/100)
        $('.District-Court').text(morethan1000)
    }
    else if( 30000000000 < districtPrice ){
        morethan3000 = ((districtPrice - 32500000000) * 3/100) +(30000000000 * 4/100) +(10000000000 * 5/100) + (2000000000 * 7/100) + (500000000*8/100)
        $('.District-Court').text(morethan3000)
    }
})
$(document).on('click','.daviCalculation',function(){
    const daviPrice = ($('.daviPrice').val())
    const davival = +($('.davi').val())
    var daviconsequense

    switch(davival){
        case 1 :
            daviconsequense  = daviPrice/4;
            $('.daviconsequense').text(daviconsequense)
        break;
        case 2 :
            daviconsequense  = daviPrice/2;
            $('.daviconsequense').text(daviconsequense)
        break;
        case 3 :
            daviconsequense  = daviPrice;
            $('.daviconsequense').text(daviconsequense)
        break;
        
        case 4 :
            daviconsequense  = daviPrice/4;
            $('.daviconsequense').text(daviconsequense)
        break;

        case 5 :
            daviconsequense  = daviPrice/2;
            $('.daviconsequense').text(daviconsequense)
        break;

        case 6 :
         if(daviPrice <= 500000000){
            $('.daviconsequense').text('20 میلیون ریال')
         }else if(daviPrice > 500000000 && daviPrice <= 2000000000){
            $('.daviconsequense').text('40 میلیون ریال')
         }else if(daviPrice > 2000000000 && daviPrice <= 10000000000){
            $('.daviconsequense').text('60 میلیون ریال')
         }else if(daviPrice > 10000000000 && daviPrice <= 30000000000){
            $('.daviconsequense').text('80 میلیون ریال')
         }else if(30000000000 < daviPrice){
            $('.daviconsequense').text('100 میلیون ریال')
         }
        break;   
    }
   
})
