const h1tag = document.querySelector("h1")

h1tag.addEventListener("mouseover",function(e){

    h1tag.style.borderWidth = '15px';
    h1tag.style.transition = '2s'

})

h1tag.addEventListener("mouseout",function(e){

    h1tag.style.borderWidth = '5px';
    h1tag.style.transition = '0.5s'

})

const  google = document.querySelector('#google')

google.addEventListener("mouseover",function(e){
    google.style.borderColor = "purple"
    google.style.borderWidth= "5px"
    google.style.transition = "0.2s"
})


google.addEventListener("mouseout",function(e){
   
    google.style.borderColor = "dodgerblue"
    google.style.borderWidth= "2px"
    google.style.backgroundColour=' rgb(232, 241, 224)'
    google.style.transition = "0.2s"
    google.style.opacity = "1"

})


google.addEventListener("mousedown",function(e){
    google.style.borderColor = "#F1C40F"

    google.style.borderWidth= "5px"

    google.style.backgroundColour = "#EC7063"

    google.style.opacity = '0.4'
    google.style.transition = "0.2s"
})

const apple = document.querySelector('#apple')
apple.addEventListener("mouseover",function(e){
    apple.style.borderColor = "purple"
    apple.style.borderWidth= "5px"
    apple.style.transition = "0.2s"
})


apple.addEventListener("mouseout",function(e){
   
    apple.style.borderColor = "dodgerblue"
    apple.style.borderWidth= "2px"
    apple.style.backgroundColour=' rgb(232, 241, 224)'
    apple.style.transition = "0.2s"
    apple.style.opacity = "1"

})

apple.addEventListener("mousedown",function(e){
    apple.style.borderColor = "#F1C40F"

    apple.style.borderWidth= "5px"

    apple.style.backgroundColour = "#EC7063"

    apple.style.opacity = '0.4'
    apple.style.transition = "0.2s"
})


const email = document.querySelector('#email')

email.addEventListener('click',function(e){
    email.style.borderColor = 'lime'
    email.style.borderWidth = '5px'
   
})

email.addEventListener('mouseout',function(e){
       email.style.borderColor = 'slateblue'
        email.style.borderWidth = '5px'
    
})

const pass = document.querySelector('#Password')

pass.addEventListener('click',function(e){
    pass.style.borderColor = 'lime'
    pass.style.borderWidth = '5px'
   
})

pass.addEventListener('mouseout',function(e){
    pass.style.borderColor = 'slateblue'
     pass.style.borderWidth = '5px'
 
})





    
    
