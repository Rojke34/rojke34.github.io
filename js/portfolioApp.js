angular.module('portfolio', []).controller('PortfolioController', function() {
    var workList = this;
    workList.works = [
      [
        {
          title:'ConecTaT',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/conectat1.png?alt=media&token=99efb136-4465-4063-b181-3e666e9db5f4"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/conectat2.png?alt=media&token=ecbbc5b9-93d8-4c6f-8902-6537d5fd5967"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/conectat3.png?alt=media&token=c80743c7-370e-48f9-9811-9f9c923979ee"}
          ],
          platforms: [
            { name: "Android", icon: "assets/android_logo.png", url: "www.qwerty.com" },
            { name: "iOS", icon: "assets/apple_logo.png", url: "www.qwerty.com" },
            { name: "Web", icon: "assets/html_logo.png", url: "www.qwerty.com" }
          ],
          hashtags: [
            { hashtag: "idea", color: "red"},
            { hashtag: "frelance", color: "blue" },
            { hashtag: "idea", color: "green"}
          ]
        },
        
      ]
      
    ];

  });



//   {
//     title:'UI Youtube',
//     description: 'Just is style like Youtube app.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app1.png?alt=media&token=4a0f1e63-0d30-4ebc-b5c1-6e7ccd23ab31',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'WHATLu',
//     description: "It's a kind of app for discovering new friend while you participate in a lot of games to win a prize. Just works in place specify like a Shopping Center.",
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app2.png?alt=media&token=c1e7cd1d-ab9b-4142-8ce0-1bd122bef8b4',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'Pokect Manager',
//     description: 'To register any kind of event when it is necessary pay for something, create a shopping list, compare prices according measurement unit.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app3.png?alt=media&token=6167a6c6-d73e-4862-8bd6-b302938e8f65',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   }
// ],
// [
//   {
//     title:'Don Perro',
//     description: 'It is an application for a veterinary clinic, a sales system products for animals, information relevant to their customers is implemented.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app4.png?alt=media&token=7d950a62-e3a4-4a11-a8be-35042ffa8880',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'Vision',
//     description: 'Playing, to create an app to looking for coupons at store that I like them...',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app5.png?alt=media&token=b4ac9f7c-66d3-4137-bb9f-05c547c4df38',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'ThingsFav',
//     description: 'lorem ipso',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app6.png?alt=media&token=2a861520-f29e-46fc-8143-8bc576c18617',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   }
// ],
// [
//   {
//     title:'Luyiman',
//     description: 'That was the first game for iOS, just is infinity runner that is catching coins and display the points.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app7.png?alt=media&token=2eb7c74c-ddc8-455a-82ef-6ee083dee74b',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'Finding Things',
//     description: 'To share any kind of information about new products, coupons with countdown and allow to create contest to the users.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app8.png?alt=media&token=70e78dc7-0232-41d5-9cb2-ef52d3f72c8f',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'Free Apps',
//     description: 'Playing with Apple Store API to display free apps with their description.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app9.png?alt=media&token=91d10f31-d26a-47c5-8789-b36541543f2d',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   }
// ],
// [
//   {
//     title:'UI Facebook',
//     description: 'Just is style like Facebook app.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app12.png?alt=media&token=ee6a22fb-5628-4630-b514-32e61b4529fb',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'Ping Pong Marker',
//     description: 'That was the first project to learn Swift, playing with sound too.',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app13.png?alt=media&token=aba009e4-c53d-44cc-bf5b-ecc6fc80a8e2',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   },
//   {
//     title:'Taxi.ec',
//     description: 'That was just the UI for a company #freelance',
//     image: 'https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app14.png?alt=media&token=ad18dc3f-d3d2-4c1a-9daf-ac0ca653c034',
//     goolePlay: 'dlas',
//     appStore: 'sksks'
//   }