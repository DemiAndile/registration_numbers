function FactoryRegistration() {
    var regNumber = [];
     var capeTown = [];
    // var paarl = [];
    // var stelli = [];

     let get ;

    function addList(reg){
         get = reg;
        regNumber.push(reg)
    }
        // function displayAll(){
        //     return regNumber
        // }

      
       // console.log(capeTown)
        function cpRegNo(){
            // return capeTown;
        }


        // function paarlReg(){
        //     for (i=0; i< regNumber.length; i++) {
        //         if (regNumber.startsWith("GP")) {
        //             paarl.push(regNumber[i])
        //         }
        //     }
        //     return Paarl;
        // }

        // function stelliReg(){
        //     for (i=0; i < regNumber.length; i++) {
        //         if (regNumber.startsWith("CY")) {
        //             stelli.push(regNumber[i])
        //         }
        //     }
        //     return Stellenbosch;
        // }


    function getRegistration() {
        return regNumber;
    }

    function getOnlyOne(){
        return get
    }

    function cpReg(){
        console.log("*******")
        for (i=0; i< regNumber.length; i++) {
            var capeReg = regNumber[i]
            if (capeReg.startsWith("ca")) {
                capeTown.push(capeReg)
            }
        }
        console.log(capeTown)
         return capeTown
    }

        // regNumber.push(reg)
        // console.log(regNumber) 
return{
    addList,
    getRegistration,
    // displayAll,
    cpReg,
    // paarlReg,
    // stelliReg,
    getOnlyOne,
    cpRegNo,
  }

}








// function getReg(registrations , town){

    //     if (town === "Cape Town") {
    //         return registrations;
    //     }

    //     else if (town === "Stellenbosch") {
    //         return  registrations;
    //     }

    //     else if (town === "Paarl") {
    //         return   registrations ;
    //     }
    // }

