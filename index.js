const listEl = document.querySelector("ul");
const btnEl = document.querySelector("button");
const saveBtn = document.querySelector(".close");
let currentPage = 1;
let blockPage = 3;
const apiKey = `43120738-5c40ac738bb9cceb9c8b4f8fd`;

function getPosts() {
    const url = `https://pixabay.com/api/?key=${apiKey}&per_page=${blockPage}&page=${currentPage}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => createEl(data.hits));
  }
  
  function loadPosts() {
    currentPage++;
    getPosts();
  }
  
  function createEl(hits) {
    hits.forEach((el) => {
      const cardEl = document.createElement("li");
      cardEl.innerHTML = `
      <li>
            <img src="${el.previewURL}" alt="el.tags">
        </li>
      `
      listEl.appendChild(cardEl);
    });
  }
  
  btnEl.addEventListener("click", loadPosts);

  saveBtn.addEventListener("click", ()=>{
    btnEl.removeEventListener("click", loadPosts)
  })
 
  getPosts();