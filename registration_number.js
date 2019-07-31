function FactoryRegistration() {
    var regNumber = [];

    let get;

    function addList(reg) {
        var number = reg.toUpperCase();
        get = number;

        if (regNumber[reg] === undefined) {
            regNumber.push(reg);
        }
    }

    function allTowns() {
        var allReg = [];
        for (let i = 0; i < regNumber.length; i++) {

            var registrations = regNumber[i]

            if (registrations.startsWith("CA")) {
                allReg.push(registrations)
            }
            else if (registrations.startsWith("CJ")) {
                allReg.push(registrations)
            }
            else if (registrations.startsWith("CL")) {
                allReg.push(registrations)
            }
        }
        return allReg
    }


    function displayAll() {
        return regNumber
    }

    function getRegistration() {
        return regNumber;
    }

    function getOnlyOne() {
        return get
    }


    return {
        addList,
        getRegistration,
        displayAll,
        allTowns,
        //cpReg,
        //paarlReg,
        // stelliReg,
        getOnlyOne,
    }

}



// function cpReg(){
//     var capeTown = [];
//     for (let i=0; i< regNumber.length; i++) {
//         var capeReg = regNumber[i]
//         if (capeReg.startsWith("CA")) {
//             capeTown.push(capeReg)
//         }
//     }
//      return capeTown
// }

// function paarlReg(){
//     var paarl = [];
//     for (let i=0; i< regNumber.length; i++) {
//         if (regNumber[i].startsWith("CJ")) {
//             paarl.push(regNumber[i])
//         }
//     }
//     return paarl;
// }

// function stelliReg(){
//     var stelli = [];
//     for (let i=0; i < regNumber.length; i++) {
//         if (regNumber[i].startsWith("CL")) {
//             stelli.push(regNumber[i])
//         }
//     }
//     return Stellenbosch;
// }





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


    //define a method that take two arguments which is reg and towns
        // defineempty arry to store filtered registrtions
        // check if town == all towns
            // return all registratons
        // loop through the list of registrations
        // check if current reg starts with town
            // push into empty array 
        // return empty array 
