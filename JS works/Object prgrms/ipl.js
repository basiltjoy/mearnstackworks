//array of objects
var point_table = [
    { t_name: "csk", pld: 11, won: 8, loss: 2, pts: 18 },
    { t_name: "dc", pld: 11, won: 8, loss: 3, pts: 16 },
    { t_name: "rcb", pld: 11, won: 7, loss: 4, pts: 14 },
    { t_name: "kkr", pld: 11, won: 5, loss: 6, pts: 10 },
    { t_name: "mi", pld: 11, won: 5, loss: 7, pts: 10 },
    { t_name: "pkb", pld: 11, won: 4, loss: 7, pts: 8 },
    { t_name: "rr", pld: 11, won: 4, loss: 7, pts: 8 },
    { t_name: "srh", pld: 10, won: 2, loss: 8, pts: 4 }
]

//print details in pointtable
// for(teams of point_table){
//     console.log(teams);
// }


//no of team playing
// console.log(point_table.length);
    

//to access objects from array
//point_table.map(team=>team.t_name).forEach(team=>console.log(team));  //Internal Iteration
// or
// point_table.forEach(team=>console.log(team.t_name));  
//         or
// for(team of point_table){                                            //External Iteration
//    console.log(team.t_name);
// }


//print team details point>10
// for(let team of point_table){
//  if(team.pts>10){
//    console.log(team);
//  }
// }
//         or
// point_table.filter(team=>team.pts>10).forEach(team=>console.log(team));


//print team with pts>10 (pts & name)
// var pts=point_table.filter(team=>team.pts>10).forEach(team=>console.log(team.pts,team.t_name));


//find if kkr is playing
// var playing=point_table.some(team=>team.t_name="kkr")
// console.log(playing);


//sort wrt loss 
// var team_loss=point_table.sort((team1,team2)=>team2.loss-team1.loss)
// console.log(team_loss);

//details of kkr
// var team=point_table.find(team=>team.t_name=="srh")
// console.log(team);



//prnt team with max pts
// var points=point_table.reduceRight((team1, team2) => team1.pts > team2.pts ? team1 : team2)
// console.log(points);
//                or
// var point=point_table.sort((team1,team2)=>team2.pts-team1.pts)
// console.log(point);


//prnt team wrt loss in desc
// point_table.sort((team1,team2)=>team2.loss-team1.loss).forEach(team=>console.log(team));
//                or
// var point_sort=point_table.sort((team1,team2)=>team2.loss-team1.loss)
// console.log(point_sort);


// prnt team wrt loss=7 and sort in desc
// var team_loss=point_table.filter(team=>team.loss==7).sort((team1,team2)=>team2.pts-team1.pts)
// console.log(team_loss);


//prnt details of rr
// var team=point_table.find(team=>team.t_name="rr")
// console.log(team); 


//check if mi is playing
// var playing=point_table.some(team=>team.t_name="mi")
// console.log(playing);


//team who played=11 and from that list find team with highpoints
// var team_play=point_table.filter(team=>team.pld==11).reduce((team1,team2)=>team1.pts>team2.pts?team1:team2)
// console.log(team_play);


//categorise teams on base of win match history
// var w_count = {}
// for (let team of point_table) {
//    if (team.won in w_count) {
//        w_count[team.won].push(team.t_name)
//    }
//    else {
//        w_count[team.won] = [team.t_name]
//    }
// }
// console.log(w_count);


//categorise teams on base of pts
// var w_count = {}
// for (let team of point_table) {
//    if (team.pts in w_count) {
//        w_count[team.pts].push(team.t_name)
//    }
//    else{
//        w_count[team.pts]=[team.t_name]
//    }
// }
// console.log(w_count);


