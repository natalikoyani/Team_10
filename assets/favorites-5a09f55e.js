import{r as c,a as m}from"./hamburger-menu-cfd7f356.js";const L=document.querySelector(".js-list-fav");document.querySelector(".js-fav-wrapper");const n=document.querySelector(".js-hero-img");let g=localStorage.getItem("favoriteRecipes"),t=g?JSON.parse(g):[];t=Array.isArray(t)?t:[];window.addEventListener("resize",f);f();function f(){window.innerWidth<768&&n.classList.add("visually-hidden"),window.innerWidth>=768&&n.classList.remove("visually-hidden")}function v(e){let a,r;if(e.length)a=c(t),n.classList.remove("visually-hidden"),L.innerHTML=a;else return r=`<li class="hero-mob-wrapper">
            <svg class="hero-fav-svg">
            <use href="./img/icons.svg#hat"></use>
          </svg>
            <p class="hero-text-fav">
              It appears that you haven't added any recipes to your favorites yet.
              To get started, you can add recipes that you like to your favorites
              for easier access in the future.
            </p>
          </li>`,div.insertAdjacentHTML("beforeend",r)}v(t);const u=document.querySelector(".js-categories-container"),h=t.map(e=>e.category);function y(e){const a=[...new Set(e)],r=a.map(s=>`<button class="fav-category-fltr-btn" id='${s}' type="button" data-category="${s}">${s}</button>`).join(""),l=()=>a.length?`<button class="fav-category-fltr-btn  active-category-fav" id="all" type="button">All categories</button>${r}`:u.innerHTML="";u.innerHTML=l()}y(h);const S=document.querySelector(".js-list-fav"),w=document.querySelector(".js-categories-container");w.addEventListener("click",e=>{const a=document.querySelectorAll(".fav-category-fltr-btn");if(e.target.nodeName==="BUTTON")if(a.forEach(r=>r.classList.remove("active-category-fav")),e.target.classList.toggle("active-category-fav"),e.target.id!=="all")T(e.target.id);else{let r=localStorage.getItem("favoriteRecipes");r&&JSON.parse(r)}});function T(e){const a=t.filter(r=>r.category===e);S.innerHTML=c(a)}const b=document.querySelector(".js-list-fav");b.addEventListener("click",j);function j(e){var r;const a=document.querySelector(".js-list-fav");if(((r=e.target.closest("svg"))==null?void 0:r.nodeName)=="svg"){let s=e.target.closest("svg").dataset._id,d=t.findIndex(o=>o._id===s),p=[...new Set(t.map(o=>o.category))];if(d!==-1){t.splice(d,1),t.length>0?a.innerHTML=c(t):(a.innerHTML="",v(t)),localStorage.setItem("favoriteRecipes",JSON.stringify(t));let o=[...new Set(t.map(i=>i.category))];p.filter(i=>!o.includes(i)).length&&y(o)}}e.target.nodeName==="BUTTON"&&m(e)}