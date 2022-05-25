
document.addEventListener("DOMContentLoaded", function () {
     dataProduk();
     GETlist_category();
});





// TOGGLE DROPDOWN KATEGORY

let btn_toggle_kategori = document.querySelector(".toggle-btn-kategori");
let btn_close_kategori = document.querySelector(".kategori-info .btn-close");
if (btn_toggle_kategori) {
     btn_toggle_kategori.addEventListener("click", function () {
          document.querySelector(".dropdown-content").classList.toggle("show-kategori")
     });
     btn_close_kategori.addEventListener("click", function () {
          document.querySelector(".dropdown-content").classList.toggle("show-kategori")
     });
}


// ========================== GET REQUEST API ==========================
function GETlist_category() {
     let displayResources = document.querySelector(".list-menu-kategori");
     let displayResourcesSubCategoryTitle = document.querySelector(".content-menu-kategori .kategori-info .kategori-info-title h4");

     $.ajax({
          type: "GET",
          url: "data/list-category.json",
          success: function (result) {
               console.log(result)
               if (result.found) {
                    let data_success = result.data;
                    data_success.forEach(valueData => {
                         let id = valueData.category_id;

                         let html = '';
                         html += `<a class="list-link" id="list-link-${id}" onclick="getSubCategory(${id})">`;
                         html += `<span> ${valueData.category_name} </span>`;
                         html += `</a>`;
                         displayResources.innerHTML += html;
                         // displayResourcesSubCategoryTitle content sub-categori title
                         let list_link = document.querySelectorAll(`.list-link`);
                         let list_links = document.querySelector(`.list-link`);
                         displayResourcesSubCategoryTitle.innerText = list_links.textContent;
                         list_link.forEach(element => {
                              element.addEventListener("click", function (e) {
                                   displayResourcesSubCategoryTitle.innerText = e.target.textContent;
                              })
                         })
                    })
               } else {
                    let html = ``;
                    html += `<p style="text-align: center  ; justify-content:center ;  align-items: center ; height: 100% ;  display:flex;">Request Api Gagal</p>`;
                    alert("Gagal Request Data List Sub Kategori")
                    displayResources.innerHTML += html;
               }

          },
          error: function (reject) {
               alert("ERORR GET API ", reject);

          }
     });
}

function GETsub_category() {
     let displayResources = document.querySelector(".subcategory");

     $.ajax({
          type: "GET",
          url: "data/sub-category.json",
          success: function (result) {
               if (result.found) {
                    let data_success = result.data;
                    // $.each(data_success, function (indexData, valueData) {
                    //      let html = '';
                    //      html += `<a href="index.html" id="list-link-info-${indexData}">${valueData.subcategory_name}</a>`;
                    //      displayResources.innerHTML += html;
                    // });
                    // data_success.filter(item => {
                    //      return item.subcategory_id == OBJ_SubSubCategory.listSubCategory[0].category_id;
                    // });
               } else {
                    let html = ``;
                    html += `<p style="text-align: center  ; justify-content:center ;  align-items: center ; height: 100% ;  display:flex;">Request Api Gagal</p>`;
                    alert("Gagal Request Data List Sub Kategori")
                    displayResources.innerHTML += html;
               }

          },
          error: function (reject) {
               alert("ERORR GET API ", reject);

          }
     });
}

let btn_category = document.querySelector(".toggle-btn-kategori");
btn_category.addEventListener("click", function () {
     // GETsub_category();
})

function dataProduk() {
     let strukture_default = document.querySelector(".strukture-template")
     let belanja_lagi_yuk = document.getElementById("belanja_lagi_yuk");
     $.ajax({
          type: "GET",
          url: "data/produk.json",
          success: function (result) {
               console.log(result);
               if (result.found) {
                    let produk_belanja_lagi_yuk_success = result.data;
                    $.each(produk_belanja_lagi_yuk_success, function (indexData, valueData) {
                         let html = '';
                         html += `<div class="col-xl-2 col-lg-3 col-md-4">`;
                         html += `<a href="index.html">`;
                         html += `<div class="card card-portrait" id="targetLazy">`;
                         html += `<img loading="lazy" src="${valueData.imgdefault}" data-src="${valueData.imgreal}" class="card-img-top lazy" alt="IMAGE-${valueData.title}">`;
                         html += `<div class="card-body">`
                         html += `<h5 class="card-title">${valueData.title}</h5>`;
                         html += `<p class="card-price">${valueData.price}</p>`;
                         html += `<div class="card-discount">`;
                         html += `<div class="parent-badge">`;
                         html += `<span class="card-badge-title">Maklone</span>`;
                         html += `</div>`;
                         html += `<div class="card-discount-title">${valueData.discount}</div>`;
                         html += `<div class="card-discount-potongan-harga">${valueData.potongan}</div>`;
                         html += `</div>`
                         html += `<div class="card-lokasi-toko">`;
                         html += `<a href="index.html nav-link"> `;
                         html += `<div class="card-lokasi-toko-image">`;
                         html += `<i class="${valueData.iconmarket}"></i>`;
                         html += `</div>`;
                         html += `<div class="card-lokasi-toko-title">`;
                         html += `<span class="card-lokasi-toko-name">${valueData.lokasi}</span>`;
                         html += `</div>`;
                         html += `</a>`;
                         html += `</div>`;
                         html += `<div class="rating-toko">`;
                         html += `<i class="${valueData.icontoko}"></i>`;
                         html += `<span class="rating-toko-terjual">${valueData.namatoko}</span>`;
                         html += `</div>`
                         html += `</div>`
                         html += `</div>`
                         html += `</a>`
                         html += `</div>`

                         setTimeout(() => {
                              strukture_default.classList.add("d-none");
                              belanja_lagi_yuk.innerHTML += html;
                              parent_lazyload();
                         }, 2000);
                    });
               } else {
                    let html = ``;
                    html += `<p style="text-align: center  ; justify-content:center ;  align-items: center ; height: 100% ;  display:flex;">Request Api Gagal</p>`;
                    alert("UPS... Gagal Request Data")
                    displayResources.innerHTML += html;
               }
          },
          error: function (reject) {
               alert("ERORR GET API ", reject);
          }
     });
}


function parent_lazyload() {
     // LAZYLOAD SCRIPTING PURE JAVASCRIPT
     function LazyLoadCallback(entries, callback) {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    // Selection img default
                    let imgElement = entry.target.querySelector("img");
                    // Selection img real
                    let realSrc = imgElement.dataset.src;
                    imgElement.setAttribute("src", realSrc);
               }
          });
     }
     const options = {
          root: document.querySelector("#rootArea"),
          threshold: 1.0,
     }
     let observer = new IntersectionObserver(LazyLoadCallback, options);
     // target elemt eventscroll
     let targetLazys = document.querySelectorAll("#targetLazy");
     targetLazys.forEach(targetLazy => {
          observer.observe(targetLazy);
     });


}

// SUB SUB CATEGORY
let OBJ_SubSubCategory = {
     listSubCategory: [],
     listSubSubCategory: []
}

function getSubCategory(categoryID) {
     if (OBJ_SubSubCategory.listSubCategory.length == 0) {
          $.ajax({
               type: "GET",
               url: "data/sub-category.json",
               success: function (result) {
                    OBJ_SubSubCategory.listSubCategory = result.data;
                    drawSubCategory(categoryID);
               }
          })
     } else {
          drawSubCategory(categoryID);
     }
}

function drawSubCategory(id) {
     let displayResources = document.querySelector(".subcategory");
     let OBJ_Filter = OBJ_SubSubCategory.listSubCategory.filter(item => {
          return item.category_id == id;
     });

     let html = '';
     html += `<div class="grid-subsubkategori" onclick="getSubSubCategory(${id})" >`;
     html += `<a class="list-link"  id="list-link-info-${id}">${OBJ_Filter[0].subcategory_name}</a>`;
     html += `<i class="fas fa-chevron-right"></i>`;
     html += `</div>`;
     displayResources.innerHTML = html;
}

function getSubSubCategory(categoryID) {
     if (OBJ_SubSubCategory.listSubSubCategory.length == 0) {
          $.ajax({
               type: "GET",
               url: "data/sub-sub-category.json",
               success: function (result) {
                    OBJ_SubSubCategory.listSubSubCategory = result.data;
                    drawSubSubCategory(categoryID);
               }
          })
     } else {
          drawSubSubCategory(categoryID);
     }
}

function drawSubSubCategory(id) {
     let displayResources = document.querySelector(".subsubcategory");
     let OBJ_Filter = OBJ_SubSubCategory.listSubSubCategory.filter(item => {
          return item.subcategory_id == id;
     });

     let html = '';
     html += `<a class="list-link" id="list-link-info-sub-sub-${id}">${OBJ_Filter[0].subsubcategory_name}</a>`;
     displayResources.innerHTML = html;

}
