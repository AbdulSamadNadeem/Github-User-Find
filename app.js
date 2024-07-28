let userInp = document.getElementById('search')
let icon = document.getElementById('icon')
let Username = document.querySelector('.name')
let bug = document.getElementById('error')
let userInfo = document.getElementById('userInfo')



function githubUser(){

    function validate(){
        if(userInp.value.trim() === ''){
            userInfo.classList.add("userInfo")
            bug.innerText="Input Is Empty"
             icon.src = 'assets/images/empty-folder.png'
              Username.innerHTML = ''

        }
        else{
            userInfo.classList.remove("userInfo")
            FindUser()
        }
    }
 validate()

async function FindUser(){
    fetch(`https://api.github.com/users/${userInp.value}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
         console.log(data)
         if(data.status == "404"){
            userInfo.classList.add("userInfo")
            bug.innerText=data.message
            icon.src = 'assets/images/404.png'
            Username.innerHTML = ''
         }  
         else{
            bug.innerText=''
            userInfo.classList.add("userInfo")
            showdata(data)
         }
    })
    .catch((error)=>{
        console.log(error)
    })

}

    
}

function showdata(data){


     
     icon.src = data.avatar_url
     
    Username.innerHTML = userInp.value

}
