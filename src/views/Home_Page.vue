<template>
   <header class="header">
    <a href="#" class="logo">Shopping Center</a>
    <nav class="nav-items">
      <router-link to ="/">Home </router-link>
      <a href="#">About us</a>
      <a href="#">Destination</a>
      <a href="#">Packages</a>
      <a href="#">Contact</a><br>
      <input type="text">
      <button>  Search</button>

    </nav>
    
  </header>
  <!-- <div> -->
    <!-- <div class="intro">
      <h1>Book store.</h1>
      <p>BEST DSSTINATION AROUND THE WORLD.</p>
      <button>Call to action</button>
    </div>
     <div class="achievements">
      <div class="work">
        <img src="../img/images (1).jpg" alt="">
        <p class="work-heading">Cancun, Mexico</p>
        <p class="work-text">* * * * *  8,90$</p>
        <router-link to ="/page1">Buy Now</router-link>
      </div>
      <div class="work">
        <img src="../img/images (8).jpg" alt="">
        <p class="work-heading">Five star Book</p>
        <p class="work-text">* * * * *  8,90$</p>
        <router-link to ="/page1">Buy Now</router-link>
      </div>
      <div class="work">
        <img src="../img/images (3).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (12).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (1).jpg" alt="">
        <p class="work-heading">Cancun, Mexico</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (3).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      
    </div>
    <div class="achievements">
      <div class="work">
        <img src="../img/images (1).jpg" alt="">
        <p class="work-heading">Cancun, Mexico</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (2).jpg" alt="">
        <p class="work-heading">Five star Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (14).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (3).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (1).jpg" alt="">
        <p class="work-heading">Cancun, Mexico</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (13).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
    </div>
    <div class="achievements">
      <div class="work">
        <img src="../img/images (9).jpg" alt="">
        <p class="work-heading">Cancun, Mexico</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (2).jpg" alt="">
        <p class="work-heading">Five star Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (3).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (12).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (1).jpg" alt="">
        <p class="work-heading">Cancun, Mexico</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
      <div class="work">
        <img src="../img/images (14).jpg" alt="">
        <p class="work-heading">Network Book</p>
        <p class="work-text">* * * * *  8,90$</p>
      </div>
    </div>
    <div class="about-me">
      <div class="about-me-text">
        <h2>Destination</h2>
        <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <div class="about-me-text">
        <h2>Five star Book</h2>
        <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <div class="about-me-text">
        <h2>Quality book</h2>
        <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <img src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="me">
    </div>
  </div>
  <footer class="footer">
    <div class="copy">&copy; 2023 Developer Book Store.</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Page</span>
        <router-link to ="/page1">Page 1   |</router-link>
        <router-link to ="/page2">Page 2  |</router-link>
        <router-link to ="/page3">Page 3  |</router-link>
      </div>
      <div class="links">
        <span>More Page</span>
        <router-link to ="/page4">Page 4  |</router-link>
        <router-link to ="/page5">Page 5  |</router-link>
        <router-link to ="/page6">Page 6  |</router-link> 
      </div> -->
    <!-- </div>
  </footer> -->
        <div class="homepage">
        <!-- <h1>HomePage</h1>
        <img src="../img/Page1.PNG" alt=""><br> -->     
        </div>
</template>

  <!-- <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple HTML HomePage</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> -->
  <style>
    /* @import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap'); */

    body {
      margin: 0;
      box-sizing: border-box;
    }

    /* CSS for header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #edeeeb;
    }

    .header .logo {
      font-size: 25px;
      font-family: 'Sriracha', cursive;
      color: #000;
      text-decoration: none;
      margin-left: 30px;
    }

    .nav-items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #f5f5f5;
      margin-right: 20px;
    }

    .nav-items a {
      text-decoration: none;
      color: #000;
      padding: 35px 20px;
    }

    /* CSS for main element */
    .intro {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 520px;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .intro h1 {
      font-family: sans-serif;
      font-size: 60px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
    }

    .intro p {
      font-size: 20px;
      color: #d1d1d1;
      text-transform: uppercase;
      margin: 20px 0;
    }

    .intro button {
      background-color: #5edaf0;
      color: #000;
      padding: 10px 25px;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.4)
    }

    .achievements {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 40px 80px;
    }

    .achievements .work {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
    }

    .achievements .work i {
      width: fit-content;
      font-size: 50px;
      color: #333333;
      border-radius: 50%;
      border: 2px solid #333333;
      padding: 12px;
    }

    .achievements .work .work-heading {
      font-size: 20px;
      color: #333333;
      text-transform: uppercase;
      margin: 10px 0;
    }

    .achievements .work .work-text {
      font-size: 15px;
      color: #585858;
      margin: 10px 0;
    }

    .about-me {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 80px;
      border-top: 2px solid #eeeeee;
    }

    .about-me img {
      width: 500px;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
    }

    .about-me-text h2 {
      font-size: 30px;
      color: #333333;
      text-transform: uppercase;
      margin: 0;
    }

    .about-me-text p {
      font-size: 15px;
      color: #585858;
      margin: 10px 0;
    }

    /* CSS for footer */
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #302f49;
      padding: 40px 80px;
    }

    .footer .copy {
      color: #fff;
    }

    .bottom-links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 40px 0;
    }

    .bottom-links .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
    }

    .bottom-links .links span {
      font-size: 20px;
      color: #fff;
      text-transform: uppercase;
      margin: 10px 0;
    }

    .bottom-links .links a {
      text-decoration: none;
      color: #a1a1a1;
      padding: 10px 20px;
    }
  </style>