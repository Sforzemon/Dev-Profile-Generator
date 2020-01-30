const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");


 console.log("hi there") 
 inquirer
  .prompt([
    {
      color: 'faveColor',
      message: 'What is your favorite reptile?',
    },
    {
      name: 'username',
      message: 'Cool! And what is your Github name?',
    },
  ])
  .then(answers => {
    console.info('Answer:', answers.username);
  });  
// inquirer
//   .prompt({
//     message: "What is your favorite color?",
//     favoriteColor: "color"
//   })
//   .prompt({
//       message: "what is your Github username?",
//       name: "username"
//   })
  // .then(function({ username }) {
  //   const queryUrl = `https://api.github.com/search/users/${username}`;
  //   axios.get(queryUrl).then(function(res) {
  //       // const names = res.data.map(function(repo) {
  //       //   return repo.name;
  //       return res;

  //       });
  //       console.log(res);
        // const repoNamesStr = repoNames.join("\n");
  
        // fs.writeFile("repos.txt", repoNamesStr, function(err) {
        //   if (err) {
        //     throw err;
        //   }  
        //   console.log(`Saved ${repoNames.length} repos`);
        // });
    //   });
    // });