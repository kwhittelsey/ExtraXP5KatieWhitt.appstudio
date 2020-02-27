let userName = prompt("Enter your first name please. ");
let userAge = prompt("Enter your current age in years. ");
let userGrade = prompt("Enter your current year in school. ");
let masters = "You should get your masters"
let noMasters = "Have a nice day"

userAge > 30 && userName == "Cindy" || userGrade == "Junior" ?(
  noMasters = "Have a nice day",
  alert(masters)
) : (
  alert(noMasters)
  )