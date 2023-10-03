let articleContiner=document.querySelector(".continer");


fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    return response.json()
})
.then((data)=>{
   data.forEach((oneData)=>{
     let div=document.createElement("div");
     let title =document.createElement("h3")
     let titleContent=document.createTextNode(oneData.title);
     title.appendChild(titleContent);
     let body =document.createElement("p")
     let bodyContent=document.createTextNode(oneData.body);
     body.appendChild(bodyContent);
     div.appendChild(title)
     div.className="div-Article"
     div.appendChild(body)

articleContiner.appendChild(div)

   })

})