 
 
async function apiCall(url){
    try{
        let res=await fetch(url)
        let data=await res.json();
        console.log(data)
        return data
        
    }
    catch(err){
        console.log(err);
    }
}

export {apiCall,appendArticles}


function appendArticles(articles,news){
    articles.forEach(el=>{

         

        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        let div4=document.createElement("div");
        let div=document.createElement("div");
        div.setAttribute("id","div")
        let img=document.createElement("img")
        img.src=el.urlToImage

        let author=document.createElement("p")
        author.innerText=el.author

        let content=document.createElement("p")
        content.innerText=el.content

        let description=document.createElement("p")
        description.innerText=el.description

        let title=document.createElement("p")
        title.innerText=el.title

        div1.append(title);
        div2.append(author,content)
        div3.append(description)
        div4.append(img)

        div.append(div1,div2,div3,div4)

      
      
        news.append(div)
    })
    

}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

   


   
