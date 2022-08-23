document.addEventListener('DOMContentLoaded', function(){
let btn=document.querySelector("form")
btn.addEventListener('submit',function(e){
e.preventDefault();
let n=(e.target.searchByID.value)
fetch(`http://localhost:3000/movies/${n}`)
.then(movie=>movie.json())
.then(data=>{
    const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');

      title.innerText = data.title;
      summary.innerText = data.summary;
})
  })
})
