function GradeCalculater(score){
    //let score=80;
    switch(true){
        case score>=90 && score<=100:{
                console.log("Passed with Grade A")
                break;
            }
        case score>=70 && score<=90:{
                 console.log("Passed with Grade B")
                 break;
        }
        case score>=50 && score<=70:{
            console.log("Passed with Grade C")
            break;
        }
        default:{
            console.log("FAIL,Better Luck next time")
        
        }
    }
}
GradeCalculater(80);