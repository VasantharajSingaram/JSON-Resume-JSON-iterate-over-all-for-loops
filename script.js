//Create your own resume data in JSON format

let myResume={
    "basics": {
      "first-name": "Vasantharaj",
      "last-name": "Singaram",
      "email": "heyiamvasanth@gmail.com",
      "phone": 9361529232,
      "location": {
        "address": "11 Gandhi Nagar 5th Street",
        "postalCode": 600118,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://vasantharajsingaram.com/",
          "github":"https://github.com/VasantharajSingaram"
        }
      ]
    },
    "education": [{
      "ug": {
        "institution": "University Of Madras",
        "department": "Psycology",
        "studyType": "Distance Education",
        "batch start year": 2022
      },
      "other": {
        "education provider": "Google Coursera",
        "department": "UI/UX Designer"
      }
}],
    "skills": [
      {
      "technical": "Figma,Adobe XD,Adobe Photoshop,After Effects,Premiere Pro,Illustrator"
      }
    ],
    "languages": [
      {
        "language": "HTML5,CSS,BootStrap,Javascript,jQuey",
      }
    ],
    "projects":[
      {
        "latest project": "https://www.riledtv.com/"
      }
    ]
    }
  console.log(myResume);
 
  
    //For the given JSON iterate over all for loops (for, for in, for of, for Each)
    
  var json = [{
    "loopName":{
      "loopType1": "This is for loop",
      "loopType2": "This is forEach loop",
      "loopType3": "This is forIn loop",
      "loopType4": "This is for of loop"
      
    },
    "id" : "Vasantharaj", 
    "title"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "Day 03 Task",
    "mail": "heyiamvasanth@gmail.com",
    "phone": 9361529232
},
];

//for loop
for(var i = 0; i < json.length; i++) {
  var resume = json[i];
  
  console.log(`Loop: ${(resume.loopName.loopType1)}`);
  console.log(`ID: ${(resume.id)}`);
  console.log(`Title: ${(resume.title)}`);
  console.log(`Task: ${(resume.task)}`);
  console.log(`E-Mail: ${(resume.mail)}`);
  console.log(`Phone: ${(resume.phone)}`);

  document.getElementById("txt").innerHTML = `
  <div class="card text-white bg-primary col-lg-12">
  <div class="card-header text-center col-lg-12">Loop: ${(resume.loopName.loopType1)}</div>
  <div class="card-body">
    <p class="card-text">ID: ${(resume.id)}</p>
    <p class="card-text">Title: ${(resume.title)}</p>
    <p class="card-text">Task: ${(resume.task)}</p>
    <p class="card-text">E-Mail: ${(resume.mail)}</p>
    <p class="card-text">Phone: ${(resume.phone)}</p>
  </div>
</div>
  `
  
}

//for Each

json.forEach(function(json){
  console.log(`Loop: ${(json.loopName.loopType2)}`);
  console.log(`ID: ${(json.id)}`);
  console.log(`Title: ${(json.title)}`);
  console.log(`Task: ${(json.task)}`);
  console.log(`E-Mail: ${(json.mail)}`);
  console.log(`Phone: ${(json.phone)}`);

  document.getElementById("txt").innerHTML += `
  <div class="card text-white bg-secondary col-lg-12">
  <div class="card-header text-center col-lg-12">Loop: ${(json.loopName.loopType2)}</div>
  <div class="card-body">
    <p class="card-text">ID: ${(json.id)}</p>
    <p class="card-text">Title: ${(json.title)}</p>
    <p class="card-text">Task: ${(json.task)}</p>
    <p class="card-text">E-Mail: ${(json.mail)}</p>
    <p class="card-text">Phone: ${(json.phone)}</p>
  </div>
</div>
  `
});

//for In

for(var key in json){

  console.log(`Loop: ${(json[key].loopName.loopType3)}`);
  console.log(`ID: ${(json[key].id)}`);
  console.log(`Title: ${(json[key].title)}`);
  console.log(`Task: ${(json[key].task)}`);
  console.log(`E-Mail: ${(json[key].mail)}`);
  console.log(`Phone: ${(json[key].phone)}`);

  document.getElementById("txt").innerHTML += `
  <div class="card text-white bg-success col-lg-12">
  <div class="card-header text-center col-lg-12">Loop: ${(json[key].loopName.loopType3)}</div>
  <div class="card-body">
    <p class="card-text">ID: ${(json[key].id)}</p>
    <p class="card-text">Title: ${(json[key].title)}</p>
    <p class="card-text">Task: ${(json[key].task)}</p>
    <p class="card-text">E-Mail: ${(json[key].mail)}</p>
    <p class="card-text">Phone: ${(json[key].phone)}</p>
  </div>
</div>
  `
}

//for of

for (let x of json) {
  console.log(`Loop: ${(x.loopName.loopType4)}`);
  console.log(`ID: ${(x.id)}`);
  console.log(`Title: ${(x.title)}`);
  console.log(`Task: ${(x.task)}`);
  console.log(`E-Mail: ${(x.mail)}`);
  console.log(`Phone: ${(x.phone)}`);

  document.getElementById("txt").innerHTML += `
  <div class="card text-white bg-danger col-lg-12">
  <div class="card-header text-center col-lg-12">Loop: ${(x.loopName.loopType4)}</div>
  <div class="card-body">
    <p class="card-text">ID: ${(x.id)}</p>
    <p class="card-text">Title: ${(x.title)}</p>
    <p class="card-text">Task: ${(x.task)}</p>
    <p class="card-text">E-Mail: ${(x.mail)}</p>
    <p class="card-text">Phone: ${(x.phone)}</p>
  </div>
</div>
  `
  
}

