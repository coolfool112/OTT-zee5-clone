let detailsArr=[
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5512788/cover/1920x7703d2fd39f63454242b8dec6e15515a9b88fc7a952fba743a2891a7b8723220d654f1f37cabcdb44719b984f546fd7ae5e.jpg",
        name:"The Kerela Story",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5528544/cover/1920x7702bf1bf90b7984f46a6bdc22d3b523b7fd43dc54370d64f0688efb490029c5f79.jpg",
        name:"Mai Atal Hoon",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5500337/cover/1920x7708a04a298918b4019b14f31483da8df0b84401b510c7744be87655f7a2bccc47e.jpg",
        name:"Sam Bahadur",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x770e991ff42036846069132040f0afde52253bdd2c1deaf485f9ff8309bdd1a867f.jpg",
        name:"Bhagya Lakshmi",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5535565/cover/1920x770393a4613452942edb101b347b756e282.jpg",
        name:"Farrey",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x7700c8fce49121b4d509d4d89bfee1992846ce5dbc804da48008e5e96619d7f3d3e.jpg",
        name:"Kundali Bhagya",
        text1:"WATCH",
        text2:"BUY NOW"
    },
    {
        videoImage:"https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5234663/cover/1920x7708f2251201adf41988e18982f4dc2b7e6.jpg",
        name:"Commando Arjun",
        text1:"WATCH",
        text2:"BUY NOW"
    }
];
let btnNext=document.querySelector("#next");
let btnPrev=document.querySelector("#prev");

let currentBox=0;
let showImg=document.querySelector("#Image");
let Name=document.querySelector("#sliderTop>h1");
let toWatch=document.querySelector("#slider>button:nth-child(3)>h4");
let toBuy=document.querySelector("#slider>button:nth-child(4)>h4");

btnNext.addEventListener("click",function(){
    goNext(detailsArr);
});

btnPrev.addEventListener("click",function(){
    goPrev(detailsArr);
});


function goNext(detailsArr)
{
    currentBox++;
    if(currentBox===detailsArr.length)
    {
        currentBox=0;
    }
    showImg.src=detailsArr[currentBox]["videoImage"];
    Name.innerText=detailsArr[currentBox]["name"];
    toWatch.innerText=detailsArr[currentBox]["text1"];
    toBuy.innerText=detailsArr[currentBox]["text2"];
}

function goPrev(detailsArr)
{
    currentBox--;
    if(currentBox===-1)
    {
        currentBox=detailsArr.length-1;
    }
    showImg.src=detailsArr[currentBox]["videoImage"];
    Name.innerText=detailsArr[currentBox]["name"];
    toWatch.innerText=detailsArr[currentBox]["text1"];
    toBuy.innerText=detailsArr[currentBox]["text2"];
}

var myIndex = currentBox;
// carousel();

function carousel() {
  var i;
  for (i = 0; i < detailsArr.length; i++) {
    showImg.src=detailsArr[i]["videoImage"];
    Name.innerText=detailsArr[i]["name"];

    showImg.style.display = "none"; 
    Name.style.display="none"; 
  }

  showImg.src=detailsArr[myIndex]["videoImage"];
  showImg.style.display = "block";
  Name.innerText=detailsArr[i]["name"];
  Name.style.display = "block";
  myIndex++;
  if (myIndex > detailsArr.length-1) {myIndex = 0}    
    
  setTimeout(carousel,2000); // Change image every 2 seconds
}

// Body Part

// let vidCont=document.querySelector("#videoContainer");
// let vidCard=document.querySelector(".videoCard");

// let btnNxt=document.querySelector(".nxtBtn");
// btnNxt.addEventListener("click",nextOne);

// function nextOne()
// {
//     vidCont.append(vidCard[0]);
// }

const productContainers = [...document.querySelectorAll('.videoContainer')];
const nxtBtn = [...document.querySelectorAll('.nxtBtn')];
const preBtn = [...document.querySelectorAll('.preBtn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

let loginValue=JSON.parse(localStorage.getItem("loginContent")) || [];
let bttn=document.querySelectorAll(".videoContainer button");

for(let i=0;i<bttn.length;i++)
{
    bttn[i].addEventListener("click",checkToOpen)
}

function checkToOpen()
{
    if(loginValue.length>0)
    {
        location.href="https://www.youtube.com/watch?v=YVvAI08Gmpc&list=PLU2X-6cCyi6Q_lNyfJywvmW1fq74STg5c&index=7&t=850s";
    }
    else
    {
        alert("Please login to access the contents!");
    }
}

if(loginValue.length>0)
{
    let changeLogin=document.querySelector("#lastTab h3");
    changeLogin.innerHTML="LOGOUT";
    
}
document.querySelector("#lastTab").addEventListener("click",loginChanges);
function loginChanges()
{
    if(loginValue.length>0)
    {
    localStorage.removeItem("loginContent");
    location.href="index.html";
    }
    else
    {
        location.href="logIn.html";
    }
}


