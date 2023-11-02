
var categories = ["humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  'love',
  "marriage",
  'medical',
  "men",,
  'mom',
  'money',
  'morning',
  'movies',
  'success']
  let category=""
let url = `https://api.api-ninjas.com/v1/quotes?category=${category}`


document.addEventListener("DOMContentLoaded", function () {
  
  
      const categ=document.getElementById('select');
      categories.forEach((c)=>{
        const option=document.createElement('option')
        option.setAttribute('id',c)
        option.innerHTML=c
        categ.appendChild(option)

      })

  categ.addEventListener('change',function(e){    
    category=e.target.value;
    console.log("category:", category)
  });




  document.getElementById("greetingButton").addEventListener("click", async function () {

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
         'X-Api-Key': 'hFGgRRPKvdXFUdzvsEUFFQ==sykDZUOz4l4Zvy5k' },
  
    });

    const Q = await response.json();
    console.log(Q);
    let quote = Q[0].quote;
    let author = Q[0].author;
    console.log(quote)
    document.getElementById("greeting").innerHTML = `"`+quote+`"`;
    document.getElementById("author").innerHTML = `(`+author+`)`;
  });





});