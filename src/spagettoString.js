module.exports = {
    //Reverse string
    strReverse: function (string) {
        return string.split("").reverse().join("");
    },

    //Compare every word(string) with find and return the combined amount.
    strCompare: function (string, find) {
        let found = 0;

        if(!find){
            throw "strCompare(string, find) find needs a word to compare with";
        }

        string.split(" ").forEach(word => {
            if(word.toLowerCase() === find.toLowerCase()){
                found++;
            }
        });

        return found;
    },

    //Sort string by alphabetical or descending.
    strSort: function(string, order){
        if(!order){
            throw "strSort(string, order) order needs to be defined";
        }

        if(order.toLowerCase() === "asc"){
            return string.split(" ").sort().join(" ");
        }else if(order.toLowerCase() === "desc"){
            return string.split(" ").sort().reverse().join(" ");
        }else{
            throw "ERROR: You can order by ASC and DESC not "+order;
        }
    }
}