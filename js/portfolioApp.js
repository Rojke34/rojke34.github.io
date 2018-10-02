angular.module('portfolio', []).controller('PortfolioController', function() {
    var workList = this;
    workList.works = [
      [
        {
          title:'Appimotion',
          description: "Appimotion is a digital platform to allow companies to contribute to the enviromente, earn points and exchange them for prizes. It's not cool no?",
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/appimotion1.png?alt=media&token=42197740-64ef-42e6-9091-ffd2879ab7dd"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/appimotion2.png?alt=media&token=5277cac4-a883-4fa9-a921-358bbbf6a588"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/appimotion4.png?alt=media&token=1181c1a4-db9d-4789-9eaf-6ea46fa45ab3"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/appimotion3.png?alt=media&token=312a1b28-a479-43f2-979e-e983641b5749"}
          ],
          platforms: [
            { name: "iOS", icon: "assets/apple_logo.png", url: "https://itunes.apple.com/co/app/hidrix/id1321450235?l=en&mt=8" },
          ],
          hashtags: [
            { hashtag: "Work", color: "red"},
            { hashtag: "Office", color: "blue" },
            { hashtag: "Panter", color: "blue" },
            { hashtag: "iOS Swift", color: "blue" }
          ]
        },
        {
          title:'ForAnimals',
          description: "Just a little hobby, to teach children about the important is recycle and don't destroy animals' environment, the assets I got from Freepik. I'm not good at Illustration... 😅",
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ForAnimals%2F1.png?alt=media&token=27386294-f200-4b84-ac19-5386e9ffcecc"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ForAnimals%2F2.png?alt=media&token=78ec1717-95a5-4367-9024-d3b5a45f68fd"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ForAnimals%2F3.png?alt=media&token=313737e9-a43f-42a2-8290-85a008db720d"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ForAnimals%2F4.png?alt=media&token=9f0af3a9-aa29-4dc7-a746-baadd3b169b3"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ForAnimals%2F5.png?alt=media&token=b0521e82-ccc1-4eb6-978c-694180d5cf42"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ForAnimals%2F6.png?alt=media&token=e7dfc359-3ee3-446d-ac8e-e4f8bce08c59"}
          ],
          platforms: [
            
          ],
          hashtags: [
            { hashtag: "Ideas", color: "red"},
            { hashtag: "Hobby", color: "blue" },
            { hashtag: "Passion", color: "green"}
          ]
          },
          {
            title:'ConecTaT',
            description: "That was a big app e-commerce, the interesting thing about is everything was made by code, I did not used the storyboard maybe isn't important but I liked it. It's not at the Apple Store why? 🤔",
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
      ],
      [
        {
          title:'Hidrix',
          description: 'That was my first project in which I use Cocos2d-x framework to build a semi game to teach children about hydrography, correct use of the water and other information in relation to it.',
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
          description: 'This one to supply a need, after lunchtime my corworkers and I played SSB 4, but the common issue was we all use the same character, now whit this creation each one get a random character and know it before starting, It was too funny when a player had a character like Jigglypuff, Olimar something similar.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ssb41.png?alt=media&token=3dd08355-a99f-44b0-9ad1-037ec3cbfb71"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ssb42.png?alt=media&token=c460d2d9-561d-46d9-bb2e-99287307fc9b"},
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/ssb43.png?alt=media&token=ac077182-eab4-4583-8519-ddff9dfe827a"}
          ],
          platforms: [

          ],
          hashtags: [
            { hashtag: "Idea", color: "red"},
            { hashtag: "Hobby", color: "green"},
            { hashtag: "iOS Swift", color: "green"}
          ]
        },
        {
          title:'Don Perro',
          description: 'This one was a big app I learned new things and it was very funny to work on that. Together my co-worker who worked in the backend to complete all functionalities and also we were able to share ideas to improve the app.',
          images: [
            {url: "https://firebasestorage.googleapis.com/v0/b/iosportfolio-42855.appspot.com/o/app4.png?alt=media&token=7d950a62-e3a4-4a11-a8be-35042ffa8880"}
          ],
          platforms: [
            { name: "iOS", icon: "assets/apple_logo.png", url: "https://itunes.apple.com/co/app/don-perro/id1118704484?l=en&mt=" },
          ],
          hashtags: [
            { hashtag: "Frelance", color: "blue" }
          ]
        }
      ],
      [
        
        {
          title:'Vision',
          description: "There were already certain things done and I finished it, Vision allow to customers access to services such as consult medical history, detect visual problems with the helps test visual acuity and Ishihara, and show them information important about medical treatments offers.",
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
        },
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
        }
      ],
      [
        {
          title:'Some Ideas',
          description: 'They were ideas I worked for a while ago, like Ping Pong Marker or app to follow your favorite brands and stay pending to a new offer or new product, pocket manager... and I used Firebase like backend in some cases.',
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
            { hashtag: "Hobby", color: "blue"},
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
