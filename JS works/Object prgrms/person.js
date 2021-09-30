var persons={
p_id:500,
p_name:"nandu",
p_age:25
}
 //chk for vaccinated key
 if("vaccinated" in persons){
     persons.vaccinated="true"
 }
  else{
    persons.vaccinated=1
 }
 //console.log(persons);


//chck for vaccinated and if found add +1 or set vaccinate=1
if("vaccinated" in persons){
    persons.vaccinated+=1
}
else{
    persons.vaccinated=1
}
console.log(persons);


