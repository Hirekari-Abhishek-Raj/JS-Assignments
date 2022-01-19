function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence){
        if(isSober){
            if(isTired===false){
                return "You can drive"
            }
            else{
                return "You shouldn't drive"
            }
        }else{
            return "You shouldn't drive"
        }
    }else{
        return "You cannot drive"
    }
    return "You cannot drive"
}

module.exports = CanDrive;
