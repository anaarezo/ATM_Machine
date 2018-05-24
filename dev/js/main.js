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
        console.log('-------- Extract --------');
        
        $('#btnGetMoney').click(function() {

            var money = $('#txtInputWithdraw').val();
            // Checks if the field is empty
            if($('#txtInputWithdraw').val() == ''){
                $('.atm-footer p').addClass('warning');
                console.log('------ Empty Field ------');
                $(".info-extract").append("<p class='empty'>--------- Empty Field ---------</p>");
            }else{
                $("p.empty").remove();
                $('.atm-footer p').removeClass('warning');
                console.log('------- Value here -------');
                console.log('Withdraw value: $ '+ money +',00');
                var monay = $('#txtInputWithdraw').val();
                var notas100 = 0;
                var notas50 = 0;
                var notas20 = 0;
                var notas10 = 0;
                while (monay > 0) {
                    if (monay > 100) {
                        notas100 = Math.floor(monay/100);
                        monay = monay % 100;
                        continue;
                    }
                    else if (monay > 50) {
                        notas50 = Math.floor(monay/50);
                        monay = monay % 50;
                        continue;
                    }
                    else if (monay > 20) {
                        notas20 = Math.floor(monay/20);
                        monay = monay % 20;
                        continue;
                    }
                    else if (monay > 10) {
                        notas10 = Math.floor(monay/10);
                        monay = monay % 10;
                        continue;
                    }		
                }
                console.log('notas100:'+notas100);
                console.log('notas50:'+notas50);
                console.log('notas20:'+notas20);
                console.log('notas10:'+notas10);
            }
        });
    }
};

/*
var verifyNotes = {
    init: function() {
        this.verifyNotes();
    },
    verifyNotes: function(){
        $('#btnGetMoney').click(function(){
            //var monay = $('#txtInputWithdraw').val();
            //var value = 490;
            var monay = $('#txtInputWithdraw').val();
            var notas100 = 0;
            var notas50 = 0;
            var notas20 = 0;
            var notas10 = 0;
            while (monay > 0) {
                if (monay > 100) {
                    notas100 = Math.floor(monay/100);
                    monay = monay % 100;
                    continue;
                }
                else if (monay > 50) {
                    notas50 = Math.floor(monay/50);
                    monay = monay % 50;
                    continue;
                }
                else if (monay > 20) {
                    notas20 = Math.floor(monay/20);
                    monay = monay % 20;
                    continue;
                }
                else if (monay > 10) {
                    notas10 = Math.floor(monay/10);
                    monay = monay % 10;
                    continue;
                }		
            }
            console.log('notas100:'+notas100);
            console.log('notas50:'+notas50);
            console.log('notas20:'+notas20);
            console.log('notas10:'+notas10);
        });
    }
}
*/

$(document).ready(function () {
    validateValue.init();
    withDraw.init();
    //verifyNotes.init();
});