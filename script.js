'use strict'

function generateAbout(){
    $('.contents').empty();
    $('.contents').html(`<h2>Hi, I’m Badri and I’m a software engineer.</h2>
    <p class="body-par">
        I am a software engineer currently enrolled in Thinkful’s Engineering Immersion bootcamp. 
    I love coding because of the feeling you get when you finally get your code to work the way 
    it should after hours of working at it. It’s a lot like skateboarding to me-- you can try
    to land a kickflip for hours and hours, falling down and messing up along the way, but that 
    feeling you get when you land your trick, super dope. 

    I geek out on anything tech. I fancy finding out about how things do the things they do. I am 
    becoming increasingly interested in the capabilities of AI and Machine Learning and have an 
    interest in Blockchains and cryptocurrencies as well. 

    When I’m not at home on my computer, I’m usually at the beach, skating, swimming, or surfing.
    I like to try to stay as active as possible and always keep moving.
    </p>
`);
}

generateAbout();

function generateProjects() {
    $('.contents').empty();
    $('.contents').html(`<h2 style="text-align:left;"> Projects: </h2>
    <p class="body-par" id="project-body">
    <b> 1) Quiz App </b> <br>
    The Quiz App is an app developed by Phoebe Law and myself. It is to test the parents of
    bootcamp students on their knowledge on their child's bootcamp. <br>
    The Quiz App was made using: <br> JavaScript, CSS, HTML, and jQuery. <br>
    <a id="github-repo" href="https://github.com/thinkful-ei-gecko/badri-phoebe-day-5" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 45px;" alt="link to github repo" target="_blank"></a>
    <div id="link-desc">Link the the GitHub Repo</div>
    </p>
    <a href="https://thinkful-ei-gecko.github.io/badri-phoebe-day-5/" target="_blank"><img src="https://i.imgur.com/oHQWbuU.png" alt="An Image of the quiz app" class="proj-img"></a>
    
    <b> 2) Skateful </b> <br>
    Skateful is a full stack web application. It was one of my first solo projects at Thinkful. <br>
    Skateful was made using: <br> PERN Stack (Postgres, Express, React, and Node) <br>
    <a id="github-repo" href="https://github.com/thinkful-ei-gecko/skateful" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 45px;" alt="link to github repo" target="_blank"></a>
    <div id="link-desc">Link the the GitHub Repo</div>
    </p>
    <a href="https://build.badri-narayan.now.sh" target="_blank"><img src="https://i.ibb.co/mRH24GX/Screen-Shot-2019-10-25-at-7-05-40-AM.png" alt="An Image of Skateful" class="proj-img"></a>
    
    <b> 3) Learn Spanish Medical Terms </b> <br>
    Learn Spanish Medical Terms helps users do just that, using the spaced repetition learning method. This project was a collaboration between Laura Elias, Hubert Yang, and myself. <br>
    Learn Spanish Medical Terms was made using: <br> PERN Stack (Postgres, Express, React, and Node) <br>
    <a id="github-repo" href="https://github.com/thinkful-ei-gecko/Badri-Hubert-Lauara-client" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 45px;" alt="link to github repo" target="_blank"></a>
    <div id="link-desc">Link the the GitHub Repo</div>
    </p>
    <a href="https://github.com/thinkful-ei-gecko/Badri-Hubert-Lauara-client" target="_blank"><img src="https://i.imgur.com/1y1lInx.png" alt="An Image of Skateful" class="proj-img"></a>
    
    `);
}

function generateContact(){
    $('.contents').empty();
    //this needs to be fixed-- acts kind of funny presently. 
    //message box should be bigger
    //buttons should be spaced evenly
    $('.contents').html(`
    <h2> Contact me </h2>
    <h4> Send me an eMail! </h4>
    <form id="email-form" action="mailto:badritulsiram@gmail.com" method="post" enctype="text/plain">
    <label for="name">Name: </label>
    <input id="name" type="text" name="name" placeholder="what's your name?"><br>
    <label for="email">eMail: </label>
    <input id="email" type="text" name="mail" placeholder="your email goes here"><br>
    <label for="message"> Message: </label>
    <input id="message" type="text" name="message" placeholder="enter your message here"><br><br>
    <input type="submit" value="Send" class="form-button">
    <input type="reset" value="Reset" class="form-button">
    </form>
    <h2> You can also find me here: </h2>
    <a href="https://linkedin.com/in/badritulsiram" target="_blank"><img src="https://image.flaticon.com/icons/svg/69/69406.svg" style="width: 50px;"></a>
    <a href="https://twitter.com/badri_tulsiram" target="_blank"><img src="https://image.flaticon.com/icons/svg/69/69480.svg" style="width: 50px;"></a>
    <a href="Https://badri2.tumblr.com" target="_blank"><img src="https://image.flaticon.com/icons/svg/69/69449.svg" style="width: 50px;"></a>
    <a href="https://instagram.com/badri" target="_blank"><img src="https://image.flaticon.com/icons/svg/1384/1384015.svg" style="width: 50px;"></a>
    <a href="https://github.com/Badri-narayan" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 50px;"></a>
    <a href="https://facebook.com/Badri.Nar" target="_blank"><img src="https://image.flaticon.com/icons/svg/69/69407.svg" style="width: 50px;"></a>
    `);
}

$('#about').on('click', event => generateAbout());
$('#projects').on('click', event => generateProjects());
$('#contact').on('click', event => generateContact());