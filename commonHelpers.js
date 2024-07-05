(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s=document.querySelector(".card-container"),u=document.querySelector(".search-form");u.addEventListener("submit",p);function p(t){t.preventDefault();const n=t.currentTarget,i=n.elements.query.value.toLowerCase();l(i).then(c=>a(c.hits)).catch(f).finally(()=>n.reset())}function f(t){console.error("Fetch Error:",t)}function l(t){const r=`https://pixabay.com/api/?key=44784729-ebc9a0f5cc587c2700d41657d&q=${t}&image_type=photo&orientation=horizontal&safesearch=${!0}`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}l().then(t=>console.log(t)).catch(t=>console.error("Fetch Error : ",t));function a(t){return s.innerHTML="",t.map(({largeImageURL:n,previewURL:i,likes:c,views:e,comments:r,downloads:o})=>`<ul class="gallery">
        <li class="gallery-item">
            <img src="${i}" alt="" />
                <ul class="galery-item-description">
                    <li>
                        <p>Likes</p>
                        <p>${c}</p>
                    </li>
                    <li>
                        <p>Views</p>
                        <p>${e}</p>
                    </li>
                    <li>
                        <p>Comments</p>
                        <p>${r}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p>${o}</p>
                    </li>
                </ul>
        </li>
    </ul>
      `).join("")}s.insertAdjacentHTML("afterbegin",a(imeges));
//# sourceMappingURL=commonHelpers.js.map
