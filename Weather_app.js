 

let input = document.getElementById("input")

let btn = document.getElementById("btn")

let stat = document.getElementById("clo")

let temp = document.getElementById("temp")

let desc = document.getElementById("desc")

let info = document.getElementById("info")

const apikey = "1ab40de2e7a7b4fa952290b811aa591c" 

btn.addEventListener("click",function()
{
    if(input.value=="")
    {
        input.setAttribute("placeholder","Please enter the location")
    }
    else
    {

        let loc = input.value

        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`

        fetch(url).then(res => res.json())
        .then(data =>{

            console.log(data)

            const{name} = data

            const{feels_like}=data.main

            const{description}=data.weather[0]

            stat.innerHTML="<span id='icon' class='material-symbols-outlined'>partly_cloudy_day</span>"

            temp.innerHTML=`<span>${Math.floor(feels_like-273)}&#8451;</span>`

            info.innerText=name

            desc.innerText=description

            input.value = ""

            input.setAttribute("placeholder","Location ..")
        })
        .catch(()=>{

            console.log(3)

            input.value = ""

            input.setAttribute("placeholder","Enter a valid location")
        })
    }
})