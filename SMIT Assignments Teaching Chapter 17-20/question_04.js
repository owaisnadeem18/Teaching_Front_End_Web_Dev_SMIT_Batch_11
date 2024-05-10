let ask_user = prompt("Please Enter a number for it's table:  ");

let ask_length = prompt("Enter the length you want to set: ");

table_entered_by_user = document.querySelector(".table_entered_by_user");
table_space = document.querySelector(".table_space");

table_entered_by_user.innerText = `Table entered by the user is ${ask_user} till ${ask_length} `;
for (let i = 1; i <= ask_length; i++) {
  table_space.innerText += `${ask_user} * ${i} = ${ask_user * i} \n`;
}
