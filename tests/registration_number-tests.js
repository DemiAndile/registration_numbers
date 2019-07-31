describe('Registration Numbers' , function(){
   

    it('should return only one registration number if the same registration is entered' , function(){
        let registration = FactoryRegistration();
        registration.addList("CA 1234")
        registration.addList("CA 1234")   
        assert.deepEqual(registration.getOnlyOne(),"CA 1234");
    });

    it('should return all the registration numbers entered from all towns' , function(){
        let registration = FactoryRegistration();
        registration.addList("CA 1234")
        registration.addList("CL 5678") 
        registration.addList("CY 9028")

        assert.deepEqual(registration.displayAll(),["CA 1234","CL 5678","CY 9028"]);
    });

    it('should return all registrations from Cape Town' , function(){
        let registration = FactoryRegistration();
        registration.addList("CA 1234")
        registration.addList("CY 6903") 
        registration.addList("CA 5432") 
        assert.deepEqual(registration.allTowns(),["CA 1234","CA 5432"]);
    });

    it('should return all registrations from Stellenbosch' , function(){
        let registration = FactoryRegistration();
        registration.addList("CL 6348")
        registration.addList("CF 8230")   
        assert.deepEqual(registration.allTowns(),["CL 6348"]);
    });

    it('should return all registrations from Paarl' , function(){
        let registration = FactoryRegistration();
        registration.addList("CJ 6348")
        registration.addList("CL 8230")
        registration.addList("CA 3330")   
        assert.deepEqual(registration.allTowns(), ['CJ 6348']);
    });

    it('should return upper case ' , function(){
        let registration = FactoryRegistration();
        registration.addList("cl 6480")
         
        assert.deepEqual(registration.getOnlyOne(),"CL 6480");
    });
});
