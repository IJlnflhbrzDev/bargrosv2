let formNewAddress = document.getElementById("formNewAddress");
let btnFormNewAddress = document.querySelector(".btnFormNewAddress");
let tableDropship = document.querySelector(".tableDropship");

let lengthDataTableProduct = [];
let listDataDropship = [];
let choiceAdress = [];

btnFormNewAddress.addEventListener("click", function () {
     formNewAddress.classList.toggle("show");
});

// untuk selec dari table
function choiceAddress(address_id) {
     choiceAdress = listDataDropship.filter(item => {
          return item.address_id == address_id;
     });

     drawAddressUse();
     checkFilter(`form-check-input-${address_id}`)
}
// get dari tombol set alamat saya
function choiceAddressDefault() {
     choiceAdress = listDataDropship.filter(item => {
          if (item.is_default == 1) {
               let infoCustomer = document.querySelector("#infoCustomer");

               let html = ` `;
               html += ` <div class="col-md-4"></div>`;
               html += `<div class="col-md-4" id="infoCustomerContent">`;
               html += `<p>${item.receive_name}</p>`;
               html += `<p>${item.receive_phone}</p>`;
               html += `</div>`;
               html += `<div class="col-md-4" id="infoCustomerAddress">`;
               html += `<p>${item.district_name} - ${item.province_name}</p>`;
               html += `<p>${item.full_address}</p>`;
               html += `</div>`;

               infoCustomer.innerHTML = html;
          };
     });
}
// yg di mana dari tombol new address
function newAddress() {
     let inputCustomerName = document.querySelector("#inputCustomerName").value;
     let inputCustomerPhone = document.querySelector("#inputCustomerPhone").value;
     let inputCustomerEmail = document.querySelector("#inputCustomerEmail").value;
     let inputCustomerKodePos = document.querySelector("#inputCustomerKodePos").value;
     let fullAddressCustomer = document.querySelector("#fullAddressCustomer").value;
     let listProvinceCustomer = document.querySelector("#listProvinceCustomer").value;
     let listDistrictCustomer = document.querySelector("#listDistrictCustomer").value;
     let listSubDistrictCustomer = document.querySelector("#listSubDistrictCustomer").value;
     let newAddress = {
          receive_name: inputCustomerName,
          receive_phone: inputCustomerPhone,
          receive_email: inputCustomerEmail,
          receive_kodepos: inputCustomerKodePos,
          receive_fulladdress: fullAddressCustomer,
          receive_listProvinceCustomer: listProvinceCustomer,
          receive_listDistrictCustomer: listDistrictCustomer,
          receive_listSubDistrictCustomer: listSubDistrictCustomer,
     }
     listDataDropship.push(newAddress)
     let infoCustomer = document.querySelector("#infoCustomer");

     let html = ` `;
     html += ` <div class="col-md-4"></div>`;
     html += `<div class="col-md-4" id="infoCustomerContent">`;
     html += `<p>${listDataDropship[2].receive_name}</p>`;
     html += `<p>${listDataDropship[2].receive_phone}</p>`;
     html += `</div>`;
     html += `<div class="col-md-4" id="infoCustomerAddress">`;
     html += `<p>${listDataDropship[2].receive_listDistrictCustomer} - ${listDataDropship[2].receive_listProvinceCustomer}</p>`;
     html += `<p>${listDataDropship[2].receive_fulladdress}</p>`;
     html += `</div>`;

     infoCustomer.innerHTML = html;
}
function checkFilter(inputID) {
     let listCheckbox = document.getElementsByClassName("form-check-input");
     for (let i = 0; i < listCheckbox.length; i++) {
          listCheckbox[i].checked = false;
     }

     document.getElementById(inputID).checked = true;
}

// mungsi ini untuk draw ke table
function drawAddress() {
     listDataDropship.forEach(items => {
          let html = ``;
          html += `<tr>`;
          html += `<td class="responsive-text">Nama : ${items.receive_name} - ${items.receive_phone}
          <br />
          <span>Email : ${items.full_address}</span>
          <br />
          <span>Provinsi : ${items.province_name}</span>
          <br />
          <span>Kabupaten : ${items.district_name}</span>
          </td>

          `
          // html += `<td>${items.receive_phone}</td>`
          // html += `<td>${items.province_name}</td>`
          // html += `<td>${items.district_name}</td>`
          // html += `<td>${items.full_address}</td>`
          html += `<td>`
          // html += `<button type="button" data-bs-toggle="modal" data-bs-target="#modalDefaulAlamat" onclick ="choiceAddress(${items.address_id})" class="btn btn-info btn-sm text-white">Gunakan Alamat Ini</button>`
          html += `<input class="form-check-input" id="form-check-input-${items.address_id}" data-bs-toggle="modal" data-bs-target="#modalDefaulAlamat" onclick ="choiceAddress(${items.address_id})"  type="checkbox" value="" id="flexCheckDefault">`
          html += `</td>`
          html += `</tr>`
          tableDropship.innerHTML += html;
     })
}
// fungsi ini di jalankan k
function drawAddressUse() {
     let infoCustomer = document.querySelector("#infoCustomer");

     let html = ` `;
     html += ` <div class="col-md-4"></div>`;
     html += `<div class="col-md-4" id="infoCustomerContent">`;
     html += `<p>${choiceAdress[0].receive_name}</p>`;
     html += `<p>${choiceAdress[0].receive_phone}</p>`;
     html += `</div>`;
     html += `<div class="col-md-4" id="infoCustomerAddress">`;
     html += `<p>${choiceAdress[0].district_name} - ${choiceAdress[0].province_name}</p>`;
     html += `<p>${choiceAdress[0].full_address}</p>`;
     html += `</div>`;

     infoCustomer.innerHTML = html;
}

function getData() {
     $.ajax({
          type: "GET",
          url: "./checkout.json",
          success: function (result) {
               listDataDropship = result.data;
               drawAddress()
          },
          error: function (reject) {
               alert("ERORR GET API ", reject);

          }
     });
}

function checkFilter(inputID) {
     let listCheckbox = document.getElementsByClassName("form-check-input");
     let infoCustomer = document.getElementById("infoCustomer");
     let btnTambahAlamatBaru = document.querySelector(".btnTambahAlamatBaru");
     let btnPakaiAlamatSaya = document.querySelector(".btnPakaiAlamatSaya");
     for (let i = 0; i < listCheckbox.length; i++) {
          listCheckbox[i].checked = false;
     }

     if (inputID == "checkResiMarketplace") {

          btnTambahAlamatBaru.setAttribute("disabled", true)
          btnPakaiAlamatSaya.setAttribute("disabled", true)
          infoCustomer.style.display = "none";
     } else {
          btnTambahAlamatBaru.removeAttribute("disabled", true)
          btnPakaiAlamatSaya.removeAttribute("disabled", true)
          infoCustomer.style.display = "flex";
     }
     document.getElementById(inputID).checked = true;
}

const numberFormat = (value) => {
     if (value.toString()[0] == "-") {
          var negative = "-";
     } else {
          negative = "";
     }
     var raw = value.toString().replace(/(?!\.)\D/g, "").split(".");
     var whole = raw[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     var decimal = false;
     if (raw.length > 1) {
          decimal = raw[1];
     }
     if (decimal !== false && (decimal !== "0" || decimal !== "00")) {
          return negative + whole + "." + decimal;
     } else {
          return negative + whole;
     }
}

const calculatePrice = (action, id) => {
     let availableStok = parseInt(document.getElementById(`inputHidden${id}`).value);
     let tagStok = document.getElementById(`valueStok${id}`);
     let nowStok = parseInt(tagStok.innerText);

     // number format
     let inputHargaHidden = parseInt(document.querySelector(`#inputHargaHidden${id}`).value)
     let inputHargaTotalHidden = document.querySelector(`#valueTotalPrice${id}`);
     let valueQty = document.querySelector(`#inputHargaHiddenQty${id}`).value;



     if (action == "minus") {

          nowStok--;
          valueQty = nowStok;
          console.log(valueQty);


          if (nowStok < 1) {
               alert("Stok tidak boleh dibawah satu!");
               tagStok.innerText = 1;
               nowStok = 1;
               valueQty = nowStok;
          } else {
               tagStok.innerText = nowStok;
          }
     } else {
          nowStok++;
          valueQty = nowStok;
          console.log(valueQty);


          if (nowStok > availableStok) {
               alert("Stok melebihi jumlah yang tersedia");
               nowStok = availableStok;
               valueQty = nowStok;
          } else {
               tagStok.innerText = nowStok;
          }
     }
     let totalPrice = inputHargaHidden * valueQty;
     inputHargaTotalHidden.innerText = `Rp. ${numberFormat(totalPrice)}`;

}
function valSellPriceToQty() {

     $.ajax({
          type: "GET",
          url: "./checkout.json",
          success: function (response) {
               let data = response.table_product;
               data.forEach(items => {
                    let inputHargaHidden = parseInt(document.querySelector(`#inputHargaHidden${items.product_id}`).value)
                    let inputHargaTotalHidden = document.querySelector(`#valueTotalPrice${items.product_id}`);
                    let valueQty = document.querySelector(`#inputHargaHiddenQty${items.product_id}`).value;
                    let totalPrice = inputHargaHidden * valueQty;
                    inputHargaTotalHidden.innerText = `Rp. ${numberFormat(totalPrice)}`;
               })

          }
     });

}

function getTableProduct() {
     $.ajax({
          type: "GET",
          url: "./checkout.json",
          success: function (result) {
               let data = result.table_product;


               lengthDataTableProduct.push(data)
               data.forEach(items => {
                    let tableProduct = document.getElementById("tableProduct");
                    let html = ` `;
                    html += `<tr class="tableProduct${items.product_id}">`;
                    html += `<td>${items.cart_id}</td>`;
                    html += `<td class="td_image">`;
                    html += `<img src="${items.photo}" alt="Product Image" class="img-fluid" style="max-height: 200px; width: 100%; object-fit: cover ; ">`;
                    html += `</td>`;
                    html += `<td>${items.warehouse_name}</td>`;
                    html += `<td>${items.product_name}</td>`;
                    html += `<td>merah</td>`;
                    html += `<td class="sell_price${items.product_id}">${items.sell_price}</td>`;
                    html += `<td class="btn_plusMinus">`;

                    html += `<div class="input-jumlah d-flex justify-content-between align-items-center">`;

                    html += `<button class="btn btn-primary btn-sm" onclick="calculatePrice('minus', '${items.product_id}')" type="button"id="btnMinusStok${items.product_id}">-</button>`;
                    html += `<span id="valueStok${items.product_id}">${items.total_qty}</span>`;

                    html += ` <button class="btn btn-primary btn-sm" onclick="calculatePrice('minus', '${items.product_id}')" type="button"id="btnMinusStok${items.product_id}">-</button>`;
                    html += `<span id="valueStok${items.product_id}" class="mx-3">${items.total_qty}</span>`;

                    html += `<button class="btn btn-primary btn-sm" onclick="calculatePrice('plus', ${items.product_id})" type="button" id="btnPlusStok${items.product_id}">+ </button>`;
                    html += `<input type="text" class="d-none" id="inputHidden${items.product_id}" value="${items.stok}"></input>`;
                    html += `<input type="text" class="d-none" id="inputHargaTotalHidden${items.product_id}" value="${items.total_sell_price}"></input>`;
                    html += `<input type="text" class="d-none" id="inputHargaHidden${items.product_id}" value="${items.sell_price}"></input>`;
                    html += `<input type="text" class="d-none" id="inputHargaHiddenQty${items.product_id}" value="${items.total_qty}"></input>`;
                    html += `</div>`;

                    html += `</td>`;
                    html += `<td id="valueTotalPrice${items.product_id}">${items.total_sell_price}</td>`;
                    html += `</tr>`;


                    tableProduct.innerHTML += html;
               });

          },
          error: function (reject) {
               alert("ERORR GET API ", reject);

          }
     });
}


getData();
getTableProduct();
valSellPriceToQty();


// new ui product to ui cart product

$.ajax({
     type: "GET",
     url: "../cart/datacart.json",
     success: function (response) {
          let parentCheckoutProduk = document.querySelector(".items-product-cart");
          let html = '';

          response.data.forEach((dataCart, id) => {
               html += `<div class="item">`;
               html += `<div class="item-main">`
               html += `<div class="produk-main">`
               html += `<img src="${dataCart.cart_img}" alt="">`
               html += `</div>`
               html += `<div class="produk-content">`
               html += `<a href="cart.html">`
               html += `<h2 class="title mb-0">${dataCart.cart_name}</h2>`
               html += `</a>`
               html += `<h3 class="price mt-2 mb-2">${dataCart.cart_harga}</h3>`


               html += ` <div class="parent-badge">`
               html += `  <span class="card-badge-title">Maklone</span>`
               html += `  </div>`


               html += `<div class="text-muted d-flex align-items-center qty"> Qty :`
               html += `<div class="input-jumlah mx-3 m-2">`
               html += `<button  class="btn btn-primary btn-sm mx-2 bgr-btn-mobile" onclick="calculatePrice('minus')" type="button" id="btnMinusStok${dataCart.cart_id}">-</button>`
               html += `<span id="valueStok">${dataCart.cart_jumlah_barang}</span>`
               html += `<button class="btn btn-primary btn-sm mx-2 bgr-btn-mobile" onclick="calculatePrice('plus')" type="button" id="btnPlusStok${dataCart.cart_id}">+ </button>`
               html += `<input type="hidden" value="${dataCart.stok}" id="inputStokHidden">`
               html += `</div>`
               html += `</div>`
               html += `<div class="clearfix"></div>`
               html += `</div>`
               html += `</div>`
               html += `<a  href="cart.html">`
               html += `<svg  id="hapusItemCart${dataCart.cart_id}"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash remove-cart" viewBox="0 0 16 16"> <path     d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />           <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg>`
               html += `</a>`
               html += `</div>`
               html += `<hr />`;
          });

          parentCheckoutProduk.innerHTML += html;

     },

     error: function (reject) {
          alert("EROR GET API CART" + reject)

     }
});