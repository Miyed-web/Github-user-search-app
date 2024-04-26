const content = document.querySelector(".content")
const inputfield = document.getElementById('input');
const searchbtn= document.getElementById('searchbtn');
const username = document.querySelector(".name")
const userloginName = document.querySelector(".userName");
const joindate= document.querySelector("code");
const userimg = document.querySelector(".img");
const userbio = document.querySelector(".userbio");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers-num");
const following = document.querySelector(".following");
const userlocation = document.querySelector(".userlocation");
const userblog = document.querySelector(".userblog");
const usertwitter = document.querySelector(".usertwitter");
const usercompany = document.querySelector(".usercompany");
const learnMore = document.querySelector(".learnMore");

async function userSearch(){
  try{
 const url = `https://api.github.com/users/${inputfield.value}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data)
  userimg.src = `${data.avatar_url}`;
  userloginName.textContent = `@${data.login}`;
  username.textContent = `${data.name || "No name found"}`;
  if (username.textContent === "No name found") {
    username.style.color = "red";
    username.style.fontWeight = "400";
  }else{
    username.style.color = "#ffffffdd";
  }
  joindate.textContent = `Joined ${data.created_at.slice(0,data.created_at.length -10)}`;
  userbio.textContent=`${data.bio || "No bio found"} `;
  
  // if (userbio.textContent==="No bio found") {
//     userbio.classList.add("error")
//   }
  repos.textContent=`${data.public_repos}`;
  followers.textContent=`${data.followers}`;
  following.textContent=`${data.following}`;
  userlocation.textContent=`${data.location}`;
  if (userlocation.textContent==="null"  ) {
    userlocation.textContent= "no company "
    userlocation.style.color= "red"
  }
  else{
    userlocation.style.color= "#f5f5f5dd"
  }
  userblog.textContent=`${data.blog}`;
  if (userblog.textContent==="") {
    userblog.textContent= "no blog "
    userblog.style.color= "red"
  }
  else{
    userblog.style.color= "#f5f5f5dd"
  }
  
  
  usercompany.textContent=`${data.company}`;
  if (usercompany.textContent==="null"  ) {
    usercompany.textContent= "no company "
    usercompany.style.color= "red"
  }
  else{
    usercompany.style.color= "#f5f5f5dd"
  }
  usertwitter.textContent=`@${data.twitter_username}`;
  if (usertwitter.textContent==="@null"  ) {
    usertwitter.textContent= "no twitter username "
    usertwitter.style.color= "red"
  }
  else{
    usertwitter.style.color= "#f5f5f5dd"
  }
  

  learnMore.href=`${data.html_url}`;
}
catch(e){
  content.innerHTML= `<p style="color:red;text-align:center;
  ">No user found</p>`;
  setTimeout(function() {
    location.reload()
  }, 3000);
}
}
searchbtn.addEventListener("click", userSearch);
inputfield.addEventListener("keydown",(e )=>{
  if (e.key==="Enter") {
  userSearch()  
  }
})
