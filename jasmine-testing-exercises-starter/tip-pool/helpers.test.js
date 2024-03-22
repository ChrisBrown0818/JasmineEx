

describe('Utilities test (with setup and tear down', function(){
    beforeEach(function(){
        billAmtInput.value =  100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it("should sum total tip amount of all payments on sumPaymentTotal()", function(){
        expect(submitPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect(submitPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should sum total bill amount of all payments on sumPaymentTotal()', function(){
        expect(submitPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect(submitPaymentTotal('billAmt')).toEqual(300);


    });

    it('should sum tip total percent on sumPaymentTotal()', function(){
        expect(submitPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(submitPaymentTotal('tipPercent')).toEqual(40);


    });


    it('should sum tip percent of a single tip on a calculateTipPercent()', function(){
        expect(calculateTipPercent(100, 14)).toEqual(14);
        expect(calculateTipPercent(100, 44)).toEqual(44);
    });



    it("should generate new td from value and append to tr on an appendTd(tr, value)", function(){
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });


    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function(){
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.childElementCount.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})