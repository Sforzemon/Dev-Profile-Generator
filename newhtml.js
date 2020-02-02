function generateHTML(data,resp,star) {
    return `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
          <title>Document</title>
          <style>
          html{
            height: 100%;
            }
            body {
              margin: 0;
              height:100%
            }
            .wrapper {
            background-color: ${data[3][0]};
            padding-top: 125px;
            }
            body {
            background-color: ${data[3][0]};
            -webkit-print-color-adjust: exact !important;
            font-family: 'Cabin', sans-serif;
            }
            main {
            background-color: ${data[1][0]};
            height: auto;
            width:100%;
            padding-top: 30px;
            }
            h1, h2, h3, h4, h5, h6 {
            font-family: 'BioRhyme', serif;
            margin: 0;
            }
            h1 {
            font-size: 3em;
            }
            h2 {
            font-size: 2.5em;
            }
            h3 {
            font-size: 2em;
            }
            h4 {
            font-size: 1.5em;
            }
            h5 {
            font-size: 1.3em;
            }
            h6 {
            font-size: 1.2em;
            }
            .photo-header {
            position: relative;
            margin: 0 auto;
            margin-bottom: -50px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            background-color: ${data[5][0]};
            box-shadow: ${data[0][1]}4d 4px 1px 20px 4px;
            color: ${data[5][1]};
            padding: 15px;
            width: 90%;
            border-radius: 15px;
            }
            .photo-header img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            margin-top: -75px;
            border: 6px solid ${data[6][0]};
            box-shadow: ${data[0][1]}4d 4px 1px 20px 4px;
            }
            .photo-header h1, .photo-header h2 {
            width: 100%;
            text-align: center;
            }
            .photo-header h1 {
            margin-top: 10px;
            }
            .links-nav {
            width: 100%;
            text-align: center;
            padding: 20px 0;
            font-size: 1.1em;
            }
            .nav-link {
            display: inline-block;
            margin: 5px 10px;
            }
            .workExp-date {
            font-style: italic;
            font-size: .7em;
            text-align: right;
            margin-top: 10px;
            }
            .container {
            padding: 50px;
            padding-left: 100px;
            padding-right: 100px;
            }
            .row {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin-top: 20px;
              margin-bottom: 20px;
            }
            ul{
              border-top: ${data[5][1]} solid 3px;
            }
            .card {
              padding: 20px;
              border-radius: 15px;
              background-color: ${data[0][0]};
              color: ${data[0][1]};
              border: solid 6px ${data[6][0]};
              box-shadow: ${data[0][1]}4d 4px 1px 20px 4px;
              margin: 20px;
              min-width: 260px;
            }
            .col {
            flex: 1;
            text-align: center;
            }
            a {
             text-decoration: none;
             color:inherit;
            }
            a:hover {
            text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
            text-decoration: none;
            color: inherit;
            font-weight: bold;
            }
            .footer {
              font-size: x-small;
              text-align: center;
              padding-bottom: 1%;
            }
          </style>
        </head>
        <body>
          <header class="wrapper">   
            <div class="photo-header"> <img src = ${resp.data.avatar_url}></img>
              <p><h1>Hello!</h1></p>
              <p><h2>My Name is ${resp.data.name}</h2></p>
              <p><h4>Currently studying development @UCONN Bootcamp<br></h4></p>
              <ul class= "links-nav">
                <li class= "nav-link"><h5><i class="fas fa-location-arrow"></i>${resp.data.location}&nbsp;</h5></li> 
                <li class= "nav-link"><h5><i class="fab fa-github-alt"></i><a href ="${resp.data.html_url}" target = "_blank">Github Profile</a>&nbsp;</h5></li>
                <li class= "nav-link"><h5><i class="fas fa-rss"></i><a href ="${resp.data.blog}" target = "_blank">Personal Page</a></h5></li>
              </ul>
            </div>
          </header>
          <main>
            <div class="container">
              <div class="row">
                <p><h3>${resp.data.bio}</h3></p>
              </div>
              <div class="row">
                <div class="col card">
                  <h2>Public Repositories<br>${resp.data.public_repos}</h2>
                </div>
                <div class="col card">
                  <h2>Followers<br>${resp.data.followers}</h2>
                </div>
              </div>
              <div class ="row">
                <div class="col card">
                  <h2>Github Stars<br>${Object.keys(star.data).length}</h2>
                </div>
                <div class="col card">
                  <h2>Following<br>${resp.data.following}</h2>
                </div>
              </div>
            </div>
          </main>
          <footer class="wrapper"><div class=footer>Lovingly made by MH Designs Profile Generator</div></footer>
        </body>
      </html>`
    }
    
    module.exports = {
      generateHTML:generateHTML
    };