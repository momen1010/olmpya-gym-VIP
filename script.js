window.addEventListener("scroll",()=>{
 document.querySelectorAll(".reveal").forEach(el=>{
  if(el.getBoundingClientRect().top<window.innerHeight-100){el.classList.add("active")}
 })
})

document.querySelectorAll(".counter").forEach(counter=>{
 let update=()=>{
  let target=+counter.dataset.target
  let count=+counter.innerText
  let inc=target/200
  if(count<target){counter.innerText=Math.ceil(count+inc);requestAnimationFrame(update)}
  else{counter.innerText=target}
 }
 update()
})

function calcBMI(){
 let w=document.getElementById("weight").value
 let h=document.getElementById("height").value/100
 let bmi=w/(h*h)
 let res=document.getElementById("result")
 if(bmi<18.5)res.innerText="Underweight"
 else if(bmi<25)res.innerText="Normal"
 else if(bmi<30)res.innerText="Overweight"
 else res.innerText="Obese"
}

document.getElementById("themeToggle").onclick=()=>document.body.classList.toggle("light-mode")
