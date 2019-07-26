function FactoryRegistration(){
    var regNumber = [];

    function addList(reg){

        if(!regNumber.includes(reg)){
            regNumber.push(reg)
        }
    }

    function getRegistration(){
        return regNumber;
    }

    
return{
    addList,
    getRegistration
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

