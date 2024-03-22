

describe("Payments test(with set up and tear down)", function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });


    it('should add a new payment to allPayments on submitPaymentInfo()', function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPaymeents['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
    it('should not add a new payment on submitPaymentInfo() with an empty input', function(){
        billAmtInput.value="";
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });
    it('should payment update #paymentTable on appendPaymentTable()', function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        
        
        expect(curTdList.length).toEqual(4);
        expect(curTdList.innerText[0]).toEqual('$100');
        expect(curTdList.innerText[1]).toEqual('$20');
        expect(curTdList.innerText[2]).toEqual('%20');
        expect(curTdList.innerText[3]).toEqual('X');
        
    });


    it('should create create a new payment on createCurPayment()', function(){
        let expectedPayment = {
            billAmt: '100', tipAmt: '20', tipPercent: 20, 
        };

        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should should not create new payment with empty input on createCurPayment()', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
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
    });
});