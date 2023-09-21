import{r as l,a as m}from"./hamburger-menu-cfd7f356.js";const L=document.querySelector(".js-list-fav"),h=document.querySelector(".js-fav-wrapper"),c=document.querySelector(".js-hero-img");let u=localStorage.getItem("favoriteRecipes"),t=u?JSON.parse(u):[];t=Array.isArray(t)?t:[];window.addEventListener("resize",v);v();function v(){window.innerWidth<768&&c.classList.add("visually-hidden"),window.innerWidth>=768&&c.classList.remove("visually-hidden")}function d(e){let a,r;if(e.length)a=l(t),c.classList.remove("visually-hidden"),L.innerHTML=a;else return r=`<li class="hero-mob-wrapper">
            <svg class="hero-fav-svg">
            <use href="./img/icons.svg#hat"></use>
          </svg>
            <p class="hero-text-fav">
              It appears that you haven't added any recipes to your favorites yet.
              To get started, you can add recipes that you like to your favorites
              for easier access in the future.
            </p>
          </li>`,h.insertAdjacentHTML("beforeend",r)}d(t);const f=document.querySelector(".js-categories-container"),S=t.map(e=>e.category);function y(e){const a=[...new Set(e)],r=a.map(s=>`<button class="fav-category-fltr-btn" id='${s}' type="button" data-category="${s}">${s}</button>`).join(""),i=()=>a.length?`<button class="fav-category-fltr-btn  active-category-fav" id="all" type="button">All categories</button>${r}`:f.innerHTML="";f.innerHTML=i()}y(S);const w=document.querySelector(".js-list-fav"),T=document.querySelector(".js-categories-container");T.addEventListener("click",e=>{const a=document.querySelectorAll(".fav-category-fltr-btn");if(e.target.nodeName==="BUTTON")if(a.forEach(r=>r.classList.remove("active-category-fav")),e.target.classList.toggle("active-category-fav"),e.target.id!=="all")b(e.target.id);else{let r=localStorage.getItem("favoriteRecipes"),i=r?JSON.parse(r):[];d(i)}});function b(e){const a=t.filter(r=>r.category===e);w.innerHTML=l(a)}const j=document.querySelector(".js-list-fav");j.addEventListener("click",q);function q(e){var r;const a=document.querySelector(".js-list-fav");if(((r=e.target.closest("svg"))==null?void 0:r.nodeName)=="svg"){let s=e.target.closest("svg").dataset._id,g=t.findIndex(o=>o._id===s),p=[...new Set(t.map(o=>o.category))];if(g!==-1){t.splice(g,1),t.length>0?a.innerHTML=l(t):(a.innerHTML="",d(t)),localStorage.setItem("favoriteRecipes",JSON.stringify(t));let o=[...new Set(t.map(n=>n.category))];p.filter(n=>!o.includes(n)).length&&y(o)}}e.target.nodeName==="BUTTON"&&m(e)}
