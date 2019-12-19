'use strict'

function generateAbout(){
    $('.contents').empty();
    $('.contents').html(`<h2>Hi, I’m Badri and I’m a software engineer.</h2>
    <img class='headshot' src='https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/49436022_10213217100397190_7081576007886438400_o.jpg?_nc_cat=101&_nc_ohc=HGpQLd5YZnoAQm8ASJK6N1_aJN2aFliqTPZJ4zj1ZCtMnhN-VdzNDLhGA&_nc_ht=scontent-lax3-1.xx&oh=19f79cdc875ad340ec6df9deaacf7b15&oe=5E77C440' alt='picture of me' />
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

generateProjects();

function generateProjects() {
    $('.contents').empty();
    $('.contents').html(`<h2 style="text-align:left;"> Projects: </h2>

    <div class='project'>
    <p class="body-par" id="project-body">
    <b> 1) Quiz App </b> <br>
    The Quiz App is an app developed by Phoebe Law and myself. It is to test the parents of
    bootcamp students on their knowledge on their child's bootcamp. <br>
    The Quiz App was made using: <br> JavaScript, CSS, HTML, and jQuery. <br>
    <a id="github-repo" href="https://github.com/thinkful-ei-gecko/badri-phoebe-day-5" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 45px;" alt="link to github repo" target="_blank"></a>
    <div id="link-desc">Link the the GitHub Repo</div>
    </p>
    <a href="https://thinkful-ei-gecko.github.io/badri-phoebe-day-5/" target="_blank"><img src="https://i.imgur.com/oHQWbuU.png" alt="An Image of the quiz app" class="proj-img"></a>
    </div>
    
    <div class='project'>
    <p class="body-par" id="project-body">
    <b> 2) Skateful </b> <br>
    Skateful is a full stack web application. It was one of my first solo projects at Thinkful. Skateful allows users to Register and Login using JWT Authentication. Users can also submit skateboarders and vote & comment on existing skateboarders. <br>
    Skateful was made using: <br> PERN Stack (Postgres, Express, React, and Node) <br>
    <a id="github-repo" href="https://github.com/thinkful-ei-gecko/skateful" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 45px;" alt="link to github repo" target="_blank"></a>
    <div id="link-desc">Link the the GitHub Repo</div>
    </p>
    <a href="https://build.badri-narayan.now.sh" target="_blank"><img src="https://i.ibb.co/mRH24GX/Screen-Shot-2019-10-25-at-7-05-40-AM.png" alt="An Image of Skateful" class="proj-img"></a>
    </p>
    </div>

    <div class='project'>
    <p class="body-par" id="project-body">
    <b> 3) Learn Spanish Medical Terms </b> <br>
    Get a simple start with learning Spanish Medical Terminology by way of spaced repetition. Users can first navigate to 'Study Mode' where they can study the spanish terms and english translations. Once they feel comfortable and want to prove their translation ability, they can switch over to 'Quiz Mode' and test their skills. <br>
    Learn Spanish Medical Terms was made using: <br> PERN Stack (Postgres, Express, React, and Node) <br>
    <a id="github-repo" href="https://github.com/thinkful-ei-gecko/Badri-Hubert-Lauara-client" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 45px;" alt="link to github repo" target="_blank"></a>
    <div id="link-desc">Link the the GitHub Repo</div>
    </p>
    <a href="https://spanishmedterms.ljelias.now.sh/" target="_blank"><img src="https://i.imgur.com/1y1lInx.png" alt="An Image of Skateful" class="proj-img"></a>
    </p>
    </div>

    <div class='project'>
    <p class="body-par" id="project-body">
    <b> 4) BreadCrumbs </b> <br>
    Breadcrumbs is a reenvisioned news aggregator that eliminates "gatekeepers" and the inevitable partisanship found on older platforms that rely on editors and manual aggregation. By empowering our users to anonymously determine an article's value, we have created a decentralized auditing system over which the users have total control. This decentralized system will affect the visibility of each automatically submitted article, with more valuable articles rising to the top of the user's feed. Every 15 minutes Breadcrumbs will feed fresh news from over 30,000 unique online publishers for its users to read, evaluate, archive, and publicly discuss. <br>
    BreadCrumbs was made using: <br> PERN Stack (Postgres, Express, React, and Node) <br>
    <a id="github-repo" href="https://github.com/thinkful-ei-gecko/BreadCrumbs-Client" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" style="width: 45px;" alt="link to github repo" target="_blank"></a>
    <div id="link-desc">Link the the GitHub Repo</div>
    </p>
    <a href="https://breadcrumbs.now.sh/" target="_blank"><img src="https://user-images.githubusercontent.com/25930687/70808522-c0dab200-1db7-11ea-8f8d-7cc082c04500.PNG" alt="An Image of BreadCrumbs" class="proj-img"></a>
    </p>
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
    <label for="message"> Message: </label><br />
    <textarea id="message" name="message" placeholder="enter your message here" rows="4" cols="32" /><br><br>
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