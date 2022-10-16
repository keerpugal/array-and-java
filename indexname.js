
let names = ["seetha","raman","karthika","elen","seetha","karthika","keerthika","raman","karthika","seetha"];


function removeDuplicates(names) {
        var unique = [];
        names.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
 
    console.log(removeDuplicates(names));
         
   


