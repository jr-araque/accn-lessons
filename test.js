describe("Trivia Spec", function(){
    it("#1", function(){
        var conundrum = (true && true) && (false || true)  ;
        expect(conundrum).not.toBe(!!conundrum);
    });

    it("#2", function(){
        expect(conundrum).toBeFalsy();
    });
});

describe("Trivia Spec", function(){
    var conundrum = 0;

    beforeEach(function(){ conundrum += 1; });

    describe("Another suite", function(){
        beforeEach(function(){ conundrum += 2; });

        it("#3", function(){ expect(conundrum).toBe(2); });
    });

    it("#4", function(){ expect(conundrum).toBe(3); });
});

describe("Trivia Spec", function(){
    it("#5", function(){
        var conundrum;
        expect(conundrum).toBeNull(3);
    });

    xit("#6", function(){
        var result = 899 / 0;
        expect(result).toBe(0);
    });
});

describe("Trivia Spec", function(){
    it("#7", function(){
        var a = {
            just8: function() { return 8; }
        };

        spyOn(a, 'just8');
        var result = a.just8();
        expect(a.just8).toHaveBeenCalled();
        expect(result).toBe(4 * 2);
    });
});
