angular.module('portfolio', []).controller('PortfolioController', function() {
    var workList = this;
    workList.works = [
      [
        {
          title:'ConecTaT',
          description: "That was a big app too, the interesting about that's it that everything was made by code, I did not used the storyboard maybe isn't important but I liked it. It's not at the Apple Store why? I don't know.",
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/conectat1.png?alt=media&token=99efb136-4465-4063-b181-3e666e9db5f4"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/conectat2.png?alt=media&token=ecbbc5b9-93d8-4c6f-8902-6537d5fd5967"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/conectat3.png?alt=media&token=c80743c7-370e-48f9-9811-9f9c923979ee"}
          ],
          platforms: [
            
          ],
          hashtags: [
            { hashtag: "Work", color: "red"},
            { hashtag: "Office", color: "blue" },
            { hashtag: "Panter", color: "blue" },
            { hashtag: "iOS Swift", color: "blue" }
          ]
        },
        {
          title:'Hidrix',
          description: 'That was my first project where I use Cocos2d-x framework to build a semi game to teach to littles about hydrography, correct use of the water and other information relative.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/caldas1.png?alt=media&token=76e55b8f-6fc6-4adf-84b1-50c6575c94b7"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/caldas2Android.png?alt=media&token=858ec542-c921-4064-b49b-d8444986c649"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/caldas4.png?alt=media&token=25539e87-5ee7-4068-b1b7-c96b2f6eee5e"}
          ],
          platforms: [
            { name: "Android", icon: "assets/android_logo.png", url: "https://play.google.com/store/apps/details?id=com.panter.hidrix&hl=en" },
            { name: "iOS", icon: "assets/apple_logo.png", url: "https://itunes.apple.com/co/app/hidrix/id1263619143?l=en&mt=8" },
            { name: "Web", icon: "assets/html_logo.png", url: "http://expedicionhidrix.com/" }
          ],
          hashtags: [
            { hashtag: "Work", color: "red"},
            { hashtag: "Office", color: "blue" },
            { hashtag: "Panter", color: "blue" }
          ]
        },
        {
          title:'SSBCharacters Ban',
          description: 'Was to supply a need, after lunchtime my corworkers and I played SSB 4 eight players in total, but the mostly always used the same character, whit this every one get a random character and know it before start, It was too funny when a player had a character like Jigglypuff, Olimar something like that. One day I want to add new functionality create tournament.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ssb41.png?alt=media&token=3dd08355-a99f-44b0-9ad1-037ec3cbfb71"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ssb42.png?alt=media&token=c460d2d9-561d-46d9-bb2e-99287307fc9b"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ssb43.png?alt=media&token=ac077182-eab4-4583-8519-ddff9dfe827a"}
          ],
          platforms: [

          ],
          hashtags: [
            { hashtag: "Idea", color: "red"},
            { hashtag: "Free time", color: "green"},
            { hashtag: "iOS Swift", color: "green"}
          ]
        }
      ],
      [
        {
          title:'Don Perro',
          description: 'That was a big app, I learned new things and it was very funny to work on that. Together my co-worker who worked in the backend to complete all functionalities and also we were able to share ideas to improve the app.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app4.png?alt=media&token=7d950a62-e3a4-4a11-a8be-35042ffa8880"}
          ],
          platforms: [
            { name: "iOS", icon: "assets/apple_logo.png", url: "https://itunes.apple.com/co/app/don-perro/id1118704484?l=en&mt=" },
          ],
          hashtags: [
            { hashtag: "Frelance", color: "blue" }
          ]
        },
        {
          title:'Vision',
          description: "There were already certain things done and I finished it, Vision allow to customers access to services such as consult medical history, detect visual problems with the helps test visual acuity and Ishihara, and show them information important about medical treatments that offers.",
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app5.png?alt=media&token=b4ac9f7c-66d3-4137-bb9f-05c547c4df38"}
          ],
          platforms: [
            { name: "iOS", icon: "assets/apple_logo.png", url: "https://itunes.apple.com/co/app/instituto-de-la-visi%C3%B3n/id1112685930?l=en&mt=8" }
          ],
          hashtags: [
            { hashtag: "Frelance", color: "blue" }
          ]
        },
        {
          title:'iOS Dev Proposal',
          description: 'It was a simple test to get a job in Barranquilla, but I wanted to move to Medellín, Colombia. Time later I met a new co-worker from Venezuela who did the same test but for android.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app9.png?alt=media&token=91d10f31-d26a-47c5-8789-b36541543f2d"}
          ],
          platforms: [
            { name: "Github", icon: "assets/github_logo.png", url: "https://github.com/Rojke34/PruebaiOs-RAPPI" }
          ],
          hashtags: [
            { hashtag: "Test", color: "red"},
            { hashtag: "Work", color: "blue" },
            { hashtag: "Oportunity", color: "green"}
          ]
        }
      ],
      [
        {
          title:'UI Copies',
          description: 'That was a way to learn about Swift programming language, in more situation help me to complete quickly apps in this case ConecTaT, a good way to pass the boredom.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app1.png?alt=media&token=4a0f1e63-0d30-4ebc-b5c1-6e7ccd23ab31"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app12.png?alt=media&token=ee6a22fb-5628-4630-b514-32e61b4529fb"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app14.png?alt=media&token=ad18dc3f-d3d2-4c1a-9daf-ac0ca653c034"}
          ],
          platforms: [
            
          ],
          hashtags: [
            { hashtag: "Idea", color: "red"},
            { hashtag: "#LetsBuildThatApp", color: "blue" },
            { hashtag: "Courses", color: "blue" },
          ]
        },
        {
          title:'Ideas',
          description: 'They are ideas that I worked for a while ago, like Ping Pong Marker or app to follow your favorite brands and stay pending to a new offer or new product, pocket manager... and I used Firebase like backend in some cases.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app13.png?alt=media&token=aba009e4-c53d-44cc-bf5b-ecc6fc80a8e2"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app2.png?alt=media&token=c1e7cd1d-ab9b-4142-8ce0-1bd122bef8b4"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app3.png?alt=media&token=6167a6c6-d73e-4862-8bd6-b302938e8f65"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app6.png?alt=media&token=2a861520-f29e-46fc-8143-8bc576c18617"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app8.png?alt=media&token=70e78dc7-0232-41d5-9cb2-ef52d3f72c8f"},
          ],
          platforms: [
            { name: "iOS PingPong", icon: "assets/apple_logo.png", url: "https://github.com/Rojke34/pingpong" }
          ],
          hashtags: [
            { hashtag: "Ideas", color: "red"},
            { hashtag: "Free time", color: "blue" },
            { hashtag: "Passion", color: "green"}
          ]
        },
        {
          title:'Luyiman',
          description: 'When I was in Barranquilla, I worked in a company bought monthly mecatos (potato ship, ice cream, pringles...), all could not wait for the day of purchase because we were all anxious to going to the kitchen. Try to recreate something similar with an infinite runner. A good thing to remember ex coworkers.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app7.png?alt=media&token=2eb7c74c-ddc8-455a-82ef-6ee083dee74b"}
          ],
          platforms: [
            { name: "Github", icon: "assets/github_logo.png", url: "https://github.com/Rojke34/Luyiman" }
          ],
          hashtags: [
            { hashtag: "Unity", color: "red"},
            { hashtag: "Idea", color: "blue" },
            { hashtag: "Freetime", color: "green"}
          ]
        }
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
