 <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid ">
        <!-- LOGO BRAND -->
        <div class="navbar-wrapper">
          <div class="navbar-wrapper-content">

            <div class="brand-app">
              <a class="navbar-brand" href="index.html">
                <!-- <b> Bargros.id</b> -->
                <img src="assets/bargros-logo.png" class="d-inline-block align-text-top navbar-bargros-logo">
              </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <form class="d-flex">
                <div class="input-group ">
                  <input type="search" class="form-control" id="search" name="search" placeholder="Cari starp masker"
                    aria-label="Cari starp masker" aria-describedby="basic-addon1">
                  <span class="input-group-text" id="basic-addon1">
                    <button type="submit" class="submit-search">
                      <i class="fas fa-search"></i>
                    </button>
                  </span>
                </div>
              </form>


              <!-- icons navbar  -->
              <div class="navbar_icon_kategori">
                <div class="navbar-icon ">
                  <div class="icon-keranjang">
                    <i class="fas fa-shopping-cart"></i>
                  </div>
                </div>

                <div class="dropdown">
                  <div class="toggle-btn-kategori d-flex justify-content-center align-items-center">

                    <i class="fas fa-bars" style="font-size: 11px; line-height: 13px;"></i>
                    <button class="dropbtn">Kategory</button>
                  </div>
                  <div class="dropdown-content">
                    <div class="row">
                      <!-- list kategory -->
                      <div class="col-4">
                        <div class="list-menu-kategori">
                          <!-- DRAWWING LIST CATEGORI IN JAVASCRIPT -->
                        </div>
                      </div>
                      <!-- KONTENT KATEGORI -->
                      <div class="col-8">
                        <div class="content-menu-kategori">
                          <div class="kategori-info">
                            <div class="kategori-info-title">
                              <h4></h4>
                            </div>
                            <button type="button" class="btn-close" aria-label="Close"></button>
                          </div>

                          <div class="list-menu-kategori-info mt-3">
                            <!-- DRAWWING-LIST-SUB CATEGORI IN JAVASCRIPT -->
                            <div class="subcategory">

                            </div>
                            <div class="subsubcategory">

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end parent  -->
              </div>



              <div class="separator-right"></div>
              <div class="menu-user d-flex justify-content-around align-items-center">
                <!-- KETIKA USER SUDAH LOGIN SHOW 2 MENU INI START -->
                <div class="nama-toko ">
                  <i class="fas fa-tachometer-alt"></i>
                  <span class="nama-toko-title">
                    Dashboard
                  </span>
                </div>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-user"></i>

                    IJlal Naufal Hibrizi
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><a class="dropdown-item" href="index.html">Profile Saya</a></li>
                    <li><a class="dropdown-item" href="index.html">Logout</a></li>
                  </ul>
                </li>
                <!-- KETIKA USER SUDAH LOGIN SHOW 2 MENU INI END -->


                <!-- KETIKA USER BLUM LOGIN SHOW 2 BUTTON INI START -->
                <div class="btn-register me-2">

                  <button type="button" class="btn btn-info mx-2 text-white">
                    Register
                  </button>
                </div>

                <!-- KETIKA USER BLUM LOGIN SHOW 2 BUTTON INI START -->
                <div class="btn-login me-2 ">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalLogin">
                    Masuk
                  </button>




                  <!-- Modal -->
                  <div class="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Masuk Ke Akun Kamu </h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form class="w-100">
                            <div class="mb-3">
                              <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Email">
                            </div>
                            <div class="mb-3">
                              <input type="password" aria-describedby="passwordHelp" class="form-control"
                                id="exampleInputPassword1" placeholder="Password">
                              <div class="input-info mt-1 d-flex justify-content-between align-items-center w-100">
                                <div class="lupa-kata-sandi">
                                  <small>Lupa Kata Sandi? </small>
                                  <a href="index.html">Klik Disini</a>
                                </div>
                                <div class="aktivasi-akun">
                                  <small>Aktivasi Akun? </small>
                                  <a href="index.html">Klik Disini</a>
                                </div>
                              </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Masuk</button>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <small>Belum Punya Akun?</small>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#modalRegister">
                            Silahkan Daftar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- register  -->
                <div class="btn-register d-none">

                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-outline-success" data-bs-toggle="modal"
                    data-bs-target="#modalRegister">
                    Daftar
                  </button>

                  <!-- Modal -->
                  <div class="modal fade" id="modalRegister" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Daftar Akun Baru Sekarang </h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form class="w-100">
                            <div class="mb-3">
                              <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Email">
                            </div>
                            <div class=" mb-3">
                              <input id="exampleInputNomorTelepon" type="number" class="form-control"
                                placeholder="Nomor Telepon" aria-label="Nomor Telepon" aria-describedby="basic-addon1">
                            </div>
                            <div class="mb-3">
                              <input type="password" aria-describedby="passwordHelp" class="form-control" id="password"
                                placeholder="Password">
                            </div>
                            <div class="mb-3">
                              <input type="password" aria-describedby="passwordHelp" class="form-control"
                                id="confirm-password" placeholder="Confirm Password">
                            </div>
                            <button type="submit" class="btn btn-primary">Daftar</button>
                          </form>
                        </div>
                        <div class="modal-footer">

                          <small>Sudah Punya Akun?</small>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#modalLogin">
                            Login Disini
                          </button>


                          <div class="syarat-ketentuan">
                            <small>Dengan mendaftar, Saya menyetujui <a href="index.html" class="aturan-pengunaan">
                                Aturan Pengunaan</a> dan <a href="index.html" class="kebijakan-privasi">Kebijakan
                                Privasi</a></small>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                <!-- KETIKA USER BLUM LOGIN SHOW 2 BUTTON INI END  -->
              </div>


            </ul>
          </div>
        </div>
      </div>
    </nav>


<!-- styling -->

.navbar-wrapper {
// 	width: 100%;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	.navbar_icon_kategori {
// 		display: flex;
// 		justify-content: end;
// 		align-items: center;
// 		width: auto;
// 		.dropdown-toggle::after {
// 			border: 0 !important;
// 		}

// 		.dropbtn {
// 			font-size: 16px;
// 			border: none;
// 			outline: 0;
// 			background-color: transparent;
// 		}

// 		.dropdown {
// 			display: inline-block;
// 			position: static;
// 		}

// 		.dropdown-content {
// 			display: none;
// 			transition: all .5s ease;
// 			position: absolute;
// 			background-color: #f1f1f1;
// 			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
// 			left: 0;
// 			padding: 5px 2.1rem 10px 2.1rem;
// 			z-index: 3;
// 			margin-top: 20px;
// 			a {
// 				color: black;
// 				padding: 12px 1rem;
// 				text-decoration: none;
// 				display: block;
// 			}

// 			.content-menu-kategori {
// 				padding: 12px 0px;
// 				.list-menu-kategori-info {
// 					height: 500px;
// 					overflow: hidden scroll;
// 					display: grid;
// 					grid-template-columns: 1fr 1fr;
// 					position: relative;
// 					.grid-subsubkategori {
// 						margin-bottom: 5px;
// 						display: grid;
// 						justify-content: start;
// 						align-items: center;
// 						grid-template-columns: 90% 10%;

// 						&:hover {
// 							background-color: #ddd;
// 							opacity: .8;
// 							cursor: pointer;
// 						}
// 						i {
// 							text-align: right;
// 							padding-right: 1rem;
// 						}
// 					}
// 				}

// 				.kategori-info {
// 					width: 100%;
// 					display: flex;
// 					justify-content: space-between;
// 					align-items: center;
// 					padding-right: 20px;

// 					.kategori-info-title {
// 						display: flex;
// 						justify-content: center;
// 						align-items: center;
// 						i {
// 							margin-right: 5px;
// 						}
// 						h4 {
// 							margin: 0;
// 						}
// 					}
// 				}
// 			}
// 		}
// 		.show-kategori {
// 			width: 100% !important;
// 			display: block !important;
// 			transition: all .6s ease-in;
// 			background-color: rgb(249, 249, 249);
// 			box-shadow: #0003 0px 20px 30px;
// 			.list-menu-kategori {
// 				height: 557px;
// 				overflow: hidden scroll;
// 				position: relative;

// 				.list-link {
// 					cursor: pointer;
// 				}
// 			}
// 		}

// 		.dropdown-content a:hover {
// 			background-color: #ddd;
// 		}

// 		.dropdown:hover .dropbtn {
// 			color: gray;
// 		}
// 	}

// 	.navbar-wrapper-content {
// 		display: flex;
// 		justify-content: space-around;
// 		align-items: center;
// 	}
// 	.brand-app {
// 		a.navbar-brand {
// 			font-size: 25px;
// 		}
// 	}
// 	.modal {
// 		form {
// 			margin: 0 !important;
// 		}
// 		.modal-title {
// 			font-weight: 600;
// 		}
// 		.modal-dialog {
// 			position: static;
// 		}
// 		.modal-footer {
// 			font-size: 14px;
// 			justify-content: start;

// 			.btn {
// 				width: max-content;
// 				padding: 0;
// 				background-color: transparent;
// 				font-size: 14px;
// 				border: 0;
// 				text-decoration: underline;
// 				color: #0d6efd;
// 			}
// 		}
// 		.btn {
// 			width: 100%;
// 		}
// 		.input-info {
// 			font-size: 13px;
// 			color: gray;
// 		}
// 		.form-control {
// 			font-size: 14px;
// 		}
// 	}
// 	.navbar-collapse {
// 		justify-content: center;
// 		.navbar-nav {
// 			width: 100%;
// 			justify-content: end;
// 			align-items: center;
// 			// form search produk
// 			form {
// 				width: 100%;
// 				margin: 0 20px;

// 				#search {
// 					padding: 3px 10px;
// 					border-radius: 9px;
// 				}
// 				.input-group {
// 					position: relative;
// 					border-radius: 0px;
// 					overflow: hidden;
// 					.input-group-text {
// 						right: 0;
// 						height: 100%;
// 						position: absolute;
// 						top: 50%;
// 						transform: translateY(-50%);
// 						z-index: 3;
// 						border: 1px solid #e5e5e5;
// 						background-color: #e5e5e5;
// 					}
// 				}
// 				.submit-search {
// 					display: flex;
// 					justify-content: center;
// 					align-items: center;

// 					padding: 0;
// 					margin: 0;
// 					border: 0;
// 					outline: none;
// 				}
// 			}
// 			// navbar icon
// 			.navbar-icon {
// 				display: flex;
// 				justify-content: start;
// 				width: max-content;
// 				align-items: center;

// 				div {
// 					display: flex;
// 					justify-content: center;
// 					align-items: center;
// 					margin-right: 15px;
// 					padding: 5px;
// 					&:hover {
// 						background-color: rgb(243, 244, 245);
// 						cursor: pointer;
// 					}
// 				}
// 				.icon-keranjang {
// 					position: relative;
// 					.badge-notification {
// 						position: absolute;
// 						top: -4px;
// 						right: -6px;
// 						background-color: red;
// 						color: white;
// 						height: max-content;
// 						width: 15px;
// 						border-radius: 50%;
// 						font-size: 11px;
// 						text-align: center;
// 					}
// 				}
// 			}

// 			// menu user
// 			.menu-user {
// 				width: auto;
// 				.nama-toko {
// 					display: flex;
// 					align-items: center;
// 					cursor: pointer;
// 					width: 50%;
// 					.nama-toko-title {
// 						padding: 8px;
// 						text-overflow: ellipsis;
// 						font-size: 15px;
// 						-webkit-font-smoothing: antialiased;
// 						overflow: hidden;
// 						white-space: nowrap;
// 					}
// 					&:hover {
// 						opacity: .8;
// 					}
// 				}
// 				.nama-user {
// 					display: flex;
// 					align-items: center;
// 					width: 50%;
// 					cursor: pointer;
// 					.nama-user-title {
// 						padding: 8px;
// 						text-overflow: ellipsis;
// 						font-size: 15px;
// 						-webkit-font-smoothing: antialiased;
// 						overflow: hidden;
// 						white-space: nowrap;
// 					}
// 					&:hover {
// 						opacity: .8;
// 					}
// 				}
// 			}
// 		}
// 		.separator-right {
// 			width: 1.2px;
// 			min-width: 1.2px;
// 			height: 24px;
// 			background: rgb(224, 224, 224);
// 			margin: 0px 0px 0px 16px;
// 			margin-right: 20px;
// 		}
// 	}
// }

// @media screen and (max-width: 768px) {
// 	.navbar-wrapper {
// 		display: block;
// 		.navbar-wrapper-content {
// 			justify-content: space-between;
// 		}
// 		.dropdown-content {
// 			top: 90%;
// 		}
// 		.navbar-collapse {
// 			.navbar-nav {
// 				justify-content: start;
// 				align-items: start;

// 				form {
// 					margin: 15px 0;
// 				}
// 			}
// 			.separator-right {
// 				display: none;
// 			}
// 		}
// 	}
// }
// @media screen and (max-width: 552px) {
// 	.list-menu-kategori-info {
// 		grid-template-columns: 1fr !important;
// 	}
// 	.navbar-nav .dropdown-menu {
// 		position: absolute;
// 	}
// 	.navbar-wrapper {
// 		display: block;
// 		.navbar_icon_kategori {
// 			width: 100%;

// 			.show-kategori {
// 				padding: 5px 0rem 10px 0rem;
// 			}
// 		}
// 		.navbar-wrapper-content {
// 			justify-content: space-between;
// 		}
// 		.navbar-collapse {
// 			.navbar-nav {
// 				form {
// 					margin: 15px 0;
// 				}

// 				.menu-user {
// 					width: 100%;
// 					justify-content: space-between !important;
// 				}
// 				.navbar-icon {
// 					div {
// 						margin-left: 0;
// 						margin-right: 15px;
// 						padding: 0px !important;
// 					}
// 				}
// 			}
// 			.separator-right {
// 				display: none;
// 			}
// 		}
// 	}
// 	.mt-5 {
// 		margin-top: 1rem !important;
// 	}

// 	// all produk
// 	.all-product {
// 		.col-md-4 {
// 			width: 50% !important;
// 		}
// 		.card.card-portrait {
// 			box-shadow: none !important;
// 		}
// 	}

// 	// banner-large

// 	.banner-large {
// 		.carousel-item {
// 			img {
// 				// height: 130px;
// 			}
// 		}
// 	}

// 	// banner small
// 	.banner-small-image-promo {
// 		margin-bottom: 15px;
// 	}
// 	#homePage h2 {
// 		font-size: 20px !important;
// 	}
// }

// .badge-mobile {
// 	.navbar-icon {
// 		display: none;
// 		justify-content: start;
// 		width: max-content;
// 		align-items: center;
// 		position: relative;
// 		.icon-keranjang,
// 		.icon-notifikasi,
// 		.icon-chat {
// 			margin-right: 10px;
// 			padding: 5px;
// 			&:hover {
// 				background-color: rgb(243, 244, 245);
// 				cursor: pointer;
// 			}
// 		}
// 		.icon-keranjang {
// 			position: relative;
// 			.badge-notification {
// 				position: absolute;
// 				top: -3px;
// 				right: -6px;
// 				background-color: red;
// 				color: white;
// 				height: max-content;
// 				width: 15px;
// 				border-radius: 50%;
// 				font-size: 11px;
// 				text-align: center;
// 			}
// 		}
// 	}
// }

// @media screen and (max-width: 992px) {
// 	.badge-mobile {
// 		.navbar-icon {
// 			display: flex !important;
// 		}
// 	}
// 	.navbar-icon-dekstop {
// 		display: none !important;
// 	}
// }