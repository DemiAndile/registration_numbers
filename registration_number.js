function FactoryRegistration() {
    var regNumber = [];
    var CapeTown = [];
    var Paarl = [];
    var stelli = [];

    let get;

    function addList(reg) {
        getPlates = reg;
        regNumber.push(reg)
        // if(!regNumber.includes(reg)){
        //     regNumber.push(reg)
        // }
    }

    function all(){
        return regNumber;
    }

    function regNo() {
        for (i = 0; i < reNumber.length; i++) {
            if (regNumber.startsWith("CA")) {
                CapeTown.push(regNumber[i])
            }
        }
        return CapeTown
    }

    function addreg() {
        for (i = 0; i < reNumber.length; i++) {
            if (regNumber.startsWith("GP")) {
                Paarl.push(regNumber[i])
            }
        }
        return paarl;
    }

    function regList() {
        for (i = 0; i < reNumber.length; i++) {
            if (regNumber.startsWith("CY")) {
                stelli.push(regNumber[i])
            }
        }
        return paarl;
    }

    function getRegistration() {
        return regNumber;
    }

    function getOnlyOne() {
        return getPlates;
    }

    // console.log(regNumber);

    return {
        addList,
        getRegistration,
        getOnlyOne,
        regNo,
        addreg,
        regList,
        all


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

