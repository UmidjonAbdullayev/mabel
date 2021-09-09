let choosebtn= document.getElementById('choose'),
      text=document.getElementsByTagName('h3')[0],
      FormNew=document.getElementById('newForm'),
      delA=document.getElementsByClassName('del')[0],
      me=document.getElementsByName('me')[0];
      textarea=document.getElementsByName('textarea')[0],
      body=document.getElementsByTagName('body')[0],
      loader=document.getElementsByClassName('loader')[0],
      conta= document.getElementsByClassName('conta')[0],
      span=document.getElementsByTagName('span')[0]
      child=document.getElementsByClassName('child')[1]
      console.log(child);
      




      
      
      


    text.addEventListener('mouseenter',function(){
    text.textContent='hello'
    })
    text.addEventListener('mouseleave',function(){
        text.textContent='lorem ipsum dolor sit amet.'
    })
   

   choosebtn.addEventListener('click',function(){
    
      
            FormNew.style.display='grid'
     
   })
   delA.addEventListener('click',function(){
   
   
        FormNew.style.display='none'
 
  
   })
    me.addEventListener('input',function(){
         textarea.value=`mening ismim ${me.value} `
    }
       
    )
    conta.style.display='none'
     setTimeout(function(){
      
         conta.style.display='inline-block'
      
      
     },1000)

    setTimeout(function(){
     
        setTimeout(function(){
      
         loader.style.display='none'
        },500)
    },1000)


    child.addEventListener('mouseenter',function(){
          span.textContent=2;
    })



