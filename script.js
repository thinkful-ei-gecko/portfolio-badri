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
    </p>
    <div id="viewport" style="display:block; width: 45%;">
        <div id="viewport-body" style="height: 500px;">
        <iframe id="frame" src="https://thinkful-ei-gecko.github.io/badri-phoebe-day-5/" style="width: 300px; height: 500px; background-image: none; display: inline-block;">
        #document
        <html lang="en"><head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://fonts.googleapis.com/css?family=Roboto&amp;display=swap" rel="stylesheet">
            <link href="index.css" rel="stylesheet" type="text/css">
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css">
            <title>How Much Do You Know About Your Child's Bootcamp?</title>
            </head>
            <body>
            <header class="status-container">
            <div><span class="score">Your Score: 0</span><span class="questionNum">Question: 1/5</span></div>
            </header>
            <main>
            <div class="js-quiz-box"><div>
            <h1 class="page-title">What is my child doing? </h1>
            <form id="qForm" class="questionForm">
            <fieldset class="answer-options">
            <input type="radio" id="radio-1" class="input" name="quiz" value="Delaying adulthood" required="">  
            <label class="answer-option" for="radio-1">Delaying adulthood</label>
          
            <input type="radio" id="radio-2" class="input" name="quiz" value="Learning how to use the Google" required="">
            <label class="answer-option" for="radio-2">Learning how to use the Google</label>

          <input type="radio" id="radio-3" class="input" name="quiz" value="Learning part time" required="">
          <label class="answer-option" for="radio-3">Learning part time</label>    

          <input type="radio" id="radio-4" class="input" name="quiz" value="Spending 40-60 hours weekly in an intensive program to become a junior developer in five months!" required="">
          <label class="answer-option" for="radio-4">Spending 40-60 hours weekly in an intensive program to become a junior developer in five months!</label>

          <div class="submit">
            <button type="submit" class="submit-button">Submit</button>
          </div>
        </fieldset>
        </form>
        </div></div>
        </main>
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="datastore.js"></script>
        <script src="index.js"></script>

        </body>
        </html>
        </iframe>
    </div>
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
    <a href="https://linkedin.com/in/badritulsiram"><img src="https://image.flaticon.com/icons/svg/69/69406.svg" style="width: 50px;"></a>
    <a href="https://twitter.com/badri_tulsiram"><img src="https://image.flaticon.com/icons/svg/69/69480.svg" style="width: 50px;"></a>
    <a href="Https://badri2.tumblr.com"><img src="https://image.flaticon.com/icons/svg/69/69449.svg" style="width: 50px;"></a>
    <a href="https://instagram.com/badri"><img src="https://image.flaticon.com/icons/svg/1384/1384015.svg" style="width: 50px;"></a>
    <a href="https://github.com/Badri-narayan"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 50px;"></a>
    <a href="https://facebook.com/Badri.Nar"><img src="https://image.flaticon.com/icons/svg/69/69407.svg" style="width: 50px;"></a>
    `);
}

$('#about').on('click', event => generateAbout());
$('#projects').on('click', event => generateProjects());
$('#contact').on('click', event => generateContact());