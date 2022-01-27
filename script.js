let curruser;
async function getRandomUser(){
 const response=await fetch('https://randomuser.me/api/');
 const data=await response.json();
   curruser=data.results[0];
  
    displayresults();
}

getRandomUser();


function displayresults(){
    let userprofile=document.querySelector("#profile");
    let form=document.querySelector("#updatedprofileform");
    form.style.display="none";
    if(userprofile.style.display==="none"){
        userprofile.style.display="block";
       
    }
  
    const name=document.getElementById('name');
    const gender=document.getElementById('gender');
    const email=document.getElementById('email');
    const image=document.getElementById("picture");
    const phone=document.getElementById("phone");
    const age=document.getElementById("age");
    const street=document.getElementById("street");
    const country=document.getElementById("country");
    const city=document.getElementById("city");
    const state=document.getElementById("state");
    const postalcode=document.getElementById("postalcode");
    const latitude=document.getElementById("latitude");
    const longitude=document.getElementById("longitude");
    const Timezone=document.getElementById("timezone");
    const username=document.getElementById("username");
    
   
    name.innerText=`${curruser.name.title} ${curruser.name.first} ${curruser.name.last}`;
    gender.innerHTML=`<b>gender: </b> ${curruser.gender}`;
    email.innerHTML=`<b>Email: </b>  ${curruser.email}`;
    phone.innerHTML=`<b>Phone: </b> ${curruser.phone}`;
    age.innerHTML=`<b>Age: </b> ${curruser.dob.age} years`;
    street.innerHTML=`<b>Street: </b> ${curruser.location.street.number},${curruser.location.street.name}`;
    country.innerHTML=`<b>Country: </b> ${curruser.location.country}`;
    city.innerHTML=`<b>City: </b> ${curruser.location.city}`;
    state.innerHTML=`<b>State: </b> ${curruser.location.state}`;
    postalcode.innerHTML=`<b>PostalCode:</b> ${curruser.location.postcode}`;
    latitude.innerHTML=`<b>Latitude:</b> ${curruser.location.coordinates.latitude}`;
    longitude.innerHTML=`<b>Longitude:</b> ${curruser.location.coordinates.longitude}`;
    Timezone.innerHTML=`<b>Timezone:</b> ${curruser.location.timezone.offset},${curruser.location.timezone.description}`;
    username.innerHTML=`<b>Username: </b> ${curruser.login.username}`;
    image.setAttribute('src',`${curruser.picture.large}`);
}


const btn=document.querySelector(".btn");

btn.addEventListener("click",function(){
    let form=document.querySelector("#updatedprofileform");
    let userprofile=document.querySelector("#profile");
    userprofile.style.display="none";
    form.style.display="block";
    document.getElementById('updatefirstname').value="";
    document.getElementById("updatelastname").value="";
    document.getElementById('updategender').value="";
    document.getElementById('updateemail').value="";
    document.getElementById('updatetitle').value="";
    document.getElementById('updateusername').value="";
    document.getElementById('updatecity').value="";
    document.getElementById('updatestate').value="";
    document.getElementById('updatecountry').value="";
    document.getElementById('updatepostalcode').value="";
    document.getElementById('updatephone').value="";
    document.getElementById('updatelatitude').value="";
    document.getElementById('updatelongitude').value="";
    document.getElementById('updateoffset').value="";
    document.getElementById('updatedescription').value="";
    document.getElementById('updateage').value="";
})

function displayform(){
    let form=document.querySelector("#updatedprofileform");
    if(form.style.display==="none"){
        form.style.display="block";
    }
    let updatefirstname=document.getElementById('updatefirstname').value;
    let updatelastname=document.getElementById("updatelastname").value;
    let updategender=document.getElementById('updategender').value;
    let updateemail=document.getElementById('updateemail').value;
    let updatetitle=document.getElementById('updatetitle').value;
    let updateusername=document.getElementById('updateusername').value;
    let updatecity=document.getElementById('updatecity').value;
    let updatecountry=document.getElementById('updatecountry').value;
    let updatestate=document.getElementById('updatestate').value;
    let updatepostalcode=document.getElementById('updatepostalcode').value;
    let updatephone=document.getElementById('updatephone').value;
    let updatelatitude=document.getElementById('updatelatitude').value;
    let updatelongitude=document.getElementById('updatelongitude').value;
    let updateoffset=document.getElementById('updateoffset').value;
    let updatedescription=document.getElementById('updatedescription').value;
    let updateage=document.getElementById('updateage').value;
    
    if(updatetitle!==""){
        curruser.name.title=updatetitle;
    }
    if(updatepostalcode!==""){
        curruser.location.postcode=updatepostalcode;
    }
    if(updateage!==""){
        curruser.dob.age=updateage;
    }
    if(updateoffset!==""){
        curruser.location.timezone.offset=updateoffset;
    }
    if(updatedescription!==""){
        curruser.location.timezone.description=updatedescription;
    }
    if(updatelatitude!==""){
        curruser.location.coordinates.latitude=updatelatitude;
    }
    if(updatelongitude!==""){
        curruser.location.coordinates.longitude=updatelongitude;
    }
    if(updatecity!==""){
        curruser.location.city=updatecity;
    }
    if(updatephone!==""){
        curruser.phone=updatephone;
    }
    if(updatestate!==""){
        curruser.location.state=updatestate;
    }
    if(updatecountry!==""){
        curruser.location.country=updatecountry;
    }
    if(updateusername!==""){
        curruser.login.username=updateusername;
    }
    if(updatefirstname!==""){
        curruser.name.first=updatefirstname;
    }
    if(updatelastname!==""){
        curruser.name.last=updatelastname;
        updatelastname="";
    }
    if(updateemail!==""){
        curruser.email=updateemail;
        updateemail="";
    }
    if(updategender!==""){
        curruser.gender=updategender;
        updategender="";
    }
   
}

