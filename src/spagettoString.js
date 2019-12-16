function spagettoString(string, options){
    if(options.reverse){
        return string.split("").reverse().join("");
    }else{
        console.error("ERROR: spagettoString didn't find option!");
        return string;
    }
}

module.exports = spagettoString;