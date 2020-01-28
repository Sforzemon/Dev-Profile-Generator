const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = required("html-pdf")

inquirer
  .prompt({
    message: "What is your favorite color?",
    favoriteColor: "color"
  })
  .prompt({
      message: "what is your Github username?",
      name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios.get(queryUrl).then(function(res) {
        const Names = res.data.map(function(repo) {
          return repo.name;
        });
  
        // const repoNamesStr = repoNames.join("\n");
  
        // fs.writeFile("repos.txt", repoNamesStr, function(err) {
        //   if (err) {
        //     throw err;
        //   }  
        //   console.log(`Saved ${repoNames.length} repos`);
        // });
      });
    });