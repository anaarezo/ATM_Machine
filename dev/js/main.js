// Checks if is a numerical value
var validateValue = {
    init: function(){
        this.validateValue();
    },
    validateValue: function() {
        $('#txtInputWithdraw').on('change keyup focus', function() {
            var removeLetters = $(this).val().replace(/[^0-9]/g, '');
            $(this).val(removeLetters);
        });
    }
}

var withDraw = {
    init: function() {
        this.withDraw();
    },
    withDraw:function() {
        console.log('-------- Bank Btatement --------'); 
        $('#btnGetMoney').click(function() {
            var money = $('#txtInputWithdraw').val();
            // Checks if the field is empty
            if($('#txtInputWithdraw').val() == ''){
                $(".info-statement").append("<p class='empty'>--------- Empty Field ---------</p>");
                console.log('------ Empty Field ------');
            // It's possible to withdraw this amount
            }else if($('#txtInputWithdraw').val() % 10 === 0){
                console.log('Informations:'); 
                $(".info-statement").append("<p class='value'>Informations:</p>");
                console.log('Withdraw value: $ '+ money +',00');
                $(".info-statement").append('<p>Withdraw value: $ '+ money +',00</p>');
                var cash = $('#txtInputWithdraw').val();
                var notes100 = 0;
                var notes50 = 0;
                var notes20 = 0;
                var notes10 = 0;
                while (cash > 0) {
                    if (cash > 100) {
                        notes100 = Math.floor(cash/100);
                        cash = cash % 100;
                        console.log(notes100 +' notes of $ 100,00');
                        $(".info-statement").append('<p>'+ notes100 +' notes of $ 100,00</p>');
                        continue;
                    }
                    else if (cash > 50) {
                        notes50 = Math.floor(cash/50);
                        cash = cash % 50;
                        console.log(notes50 +' notes of $ 50,00');
                        $(".info-statement").append('<p>'+ notes50 +' notes of $ 50,00</p>');
                        continue;
                    }
                    else if (cash > 20) {
                        notes20 = Math.floor(cash/20);
                        cash = cash % 20;
                        console.log(notes20 + ' notes of $ 20,00');
                        $(".info-statement").append('<p>'+ notes20 +' notes of $ 20,00</p>');
                        continue;
                    }
                    else if (cash > 10) {
                        notes10 = Math.floor(cash/10);
                        cash = cash % 10;
                        console.log(notes10 + ' notes of $ 10,00');
                        $(".info-statement").append('<p>'+ notes10 +' notes of $ 10,00</p>');
                        continue;
                    }else if (cash < 10) {
                        console.log('You can not withdraw this value! Choose a rounded value!');
                        $(".info-statement").append('<p>You can not withdraw this value! Choose a rounded value!</p>');
                        break;
                    }
                }
            // Checks whether the value is negative
            }else if($('#txtInputWithdraw').val() <= 0){
                console.log("You can't remove the value below zero.");
                $(".info-statement").append("<p class='error-notes'>You can't remove the value below zero.</p>");
            // Checks whether the value is negative
            }else{
                console.log('This value unavailable for withdrawal!');
                $(".info-statement").append("<p class='error-notes'>This value unavailable for withdrawal!</p>");
            }
        });
    }
};

$(document).ready(function () {
    validateValue.init();
    withDraw.init();
});