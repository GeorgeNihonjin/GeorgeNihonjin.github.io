document.addEventListener("DOMContentLoaded",  ( ) => {
    const image= document.querySelectorAll |("img");

    for (const  of image) {
        fetch("https://dog.ceo/api/breeds/image/random"  
        ).then( Response=> Response.json)
        
        .then (data => Image.src. = data.message)
        image.width= 100px
        image.height= 100; 
    }
 })