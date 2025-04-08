    //Quiz 1
    function stringLength(arr){
    return arr.map(strng => strng.length);
    }
    console.log(stringLength(["Angie","Makuto","Ruby"]));
    
        //Quiz 2
     function evenNumbers(numbers){
        let x = numbers.filter( num => num % 2 == 0);
        return x
     }
    console.log(evenNumbers([1,2,3,4,5,6,7,8,9,10]));

     //Quiz 3
     function topScorers(students){
        return students.filter((student,index)=>student.score>75);
     }
     console.log(topScorers([{name:"Mercy",score:88},{name:"Ruby",score:100},{name:"Ameer",score:70}]));

     //Quiz 4
     function squares(numbers){
        let y = numbers.map(item => item*item);
        return y
     }
     console.log(squares([12,14,16,15,11,10]))

        //Quiz 5
        function uppercaseString(array){
            let m = array.filter(item => typeof item === "string")
            let n = m.map(strng => strng.toUpperCase());
            return n
        }
        console.log(uppercaseString(["java",2000,56.8,"coding","akirachix"]));