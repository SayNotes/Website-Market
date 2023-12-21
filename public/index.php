<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jasa Joki</title>
    <!-- <link rel="stylesheet" href="css/style.css" type="text/css"> -->
    <link rel="stylesheet" type="text/css" href="css/style.css?version=1" />
</head>

<body class="bg-slate-100 h-screen">


    <div class=" w-full h-screen absolute top-0 left-0 -z-50 bg-gradient-to-t from-slate-100 to-blue-100">
    </div>
    <nav id="nav" class=" w-full h-max p-4 flex-all-center flex-col">
        <ul class=" w-11/12 flex justify-between items-center">
            <img class="h-7" src="../src/img/home/logo-dark.png">
            <li class="hidden text-slate-100">
                <a href="" class="hover-navbar">home</a>
                <a href="" class="hover-navbar">Product</a>
                <a href="" class="hover-navbar">Testimoni</a>
                <a href="" class="hover-navbar">About</a>
            </li>
            <a class="nav-bag" href="shop-cart.php">
                <img class="h-6" src="../src/img/home/shopping_cart_dark.png" alt="bag logo" class="img-logo">
            </a>

        </ul>
        <div class="w-full mt-4">
            <form class="flex items-center">
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5" fill="rgb(100 116 139)" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="simple-search"
                        class="bg-slate-100 shadow-sm border border-blue-200 w-full placeholder:text-slate-500 text-slate-900 text-sm rounded-md block pl-10 p-2.5"
                        placeholder="Search items..." required>
                </div>
                <button type="submit"
                    class="shadow-md p-2.5 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg
                        class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg></button>
            </form>
            <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </div>
    </nav>



    <section id="home-page" class=" w-full flex-all-center">
        <div id="home-wrap" class="w-11/12">
            <div class="flex flex-col sm:w-full">
                <div class="bg-slate-800 shadow-md flex-all-center w-full text-white rounded-md h-40 sm:h-56 md:h-80">
                    <img class="object-cover h-full object-center rounded-md" src="../src/img/home/one.webp"
                        alt="Home Product">
                </div>
                <div
                    class="w-full border border-blue-200 bg-gradient-to-t from-blue-200 to-blue-50 shadow-md flex-col flex p-1 text-white rounded-md mt-4">
                    <div class="w-full py-2">
                        <h1 class="font-poppins py-1 text-md font-semibold text-slate-700 rounded-md text-center">
                            Choose Game
                        </h1>
                    </div>
                    <div class="w-full flex gap-2 sm:flex-row flex-col p-1">
                        <div class="flex-all-center bg-blue-300 py-2 px-2 rounded-md w-full">
                            <img src="../public/css/img-logo/honkai-star-rail.webp" alt="Genshin Impact"
                                class="h-6 rounded-md shadow-sm">
                            <a href="" class="font-poppins text-sm ml-2 text-blue-800 font-normal tracking-wide">Honkai:
                                Star Rail</a>
                        </div>
                        <div class="flex-all-center bg-blue-300 py-2 px-2 rounded-md w-full">
                            <img src="../public/css/img-logo/genshin-impact.webp" alt="Genshin Impact"
                                class="h-6 rounded-md shadow-sm">
                            <a href="" class="font-poppins text-sm ml-2 text-blue-800 font-normal tracking-wide">Genshin
                                Impact</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <section id="item-page" class="w-full flex-all-center">
        <div class="flex flex-col w-11/12 mt-8 pb-4">

            <div class="flex w-full justify-between items-center">
                <h1 class="font-poppins text-lg text-slate-700 font-semibold">Product</h1>
                <img src="css/img-logo/filter-svgrepo-com.png" class="h-5 fill-whiteImage" alt="filter">
            </div>
            <div class="list-category relative gap-2 overflow-hidden flex items-center w-full my-2">
                <button type="button" class="select-category btn-category btn-category-highlight">Rawat Akun</button>
                <button type="button" class="select-category btn-category">Event</button>
                <button type="button" class="select-category btn-category">Fishing</button>
                <button type="button" class="select-category btn-category">Material Ascend</button>
                <button type="button" class="select-category btn-category">Material Monster</button>
                <button type="button" class="select-category btn-category">Quest</button>
                <button type="button" class="select-category btn-category">Spam Resin</button>
            </div>
            <div class="info-category flex items-center justify-end">
                <h1 class="text-base text-right font-semibold text-slate-700">List 1</h1>
                <img src="css/img-logo/information.png" alt="infomation" srcset="" class="h-4 ml-1">
            </div>
            <div class="list-card flex gap-4 mt-2 overflow-hidden items-center w-full my-2">
                <div class="card">
                    <div class="card-img w-32 aspect-square">
                        <img class="object-cover w-full h-full rounded-md" src="../src/img/error-404.png" alt="Item">
                    </div>
                    <h1 class="name-item">Name Item Lorem</h1>
                    <h1 class="price-item">Rp10,000</h1>
                    <div class="discount-price flex items-center">
                        <h1 class="font-poppins text-slate-500 text-xs line-through">Rp15,000</h1>
                        <h1 class="font-poppins text-red-900 bg-red-300 text-xs ml-1.5 py-0.5 px-1 rounded-md">66%</h1>
                    </div>
                    <form class="btn-plus-and-minus w-full flex-all-center h-6 mt-2">
                        <button type="button" class="btn-minus font-poppins">-</button>
                        <input
                            class="quantity bg-slate-50 text-slate-800 w-full h-full mx-2 rounded-md text-center text-sm"
                            type="number" name="quantity" min="0" step="10">
                        <button type="button" class="btn-plus font-poppins">+</button>
                    </form>
                    <button class="btn-submit">Masukkan</button>
                </div>
                <div class="card">
                    <div class="card-img w-32 aspect-square">
                        <img class="object-cover w-full h-full rounded-md" src="../src/img/error-404.png" alt="Item">
                    </div>
                    <h1 class="name-item">Name Item Lorem</h1>
                    <h1 class="price-item">Rp10,000</h1>
                    <div class="discount-price flex items-center">
                        <h1 class="font-poppins text-slate-500 text-xs line-through">Rp15,000</h1>
                        <h1 class="font-poppins text-red-900 bg-red-300 text-xs ml-1.5 py-0.5 px-1 rounded-md">66%</h1>
                    </div>
                    <form class="btn-plus-and-minus w-full flex-all-center h-6 mt-2">
                        <button type="button" class="btn-minus font-poppins">-</button>
                        <input
                            class="quantity bg-slate-50 text-slate-800 w-full h-full mx-2 rounded-md text-center text-sm"
                            type="number" name="quantity" min="0" step="10">
                        <button type="button" class="btn-plus font-poppins">+</button>
                    </form>
                    <button class="btn-submit">Masukkan</button>
                </div>
                <div class="card">
                    <div class="card-img w-32 aspect-square">
                        <img class="object-cover w-full h-full rounded-md" src="../src/img/error-404.png" alt="Item">
                    </div>
                    <h1 class="name-item">Name Item Lorem</h1>
                    <h1 class="price-item">Rp10,000</h1>
                    <div class="discount-price flex items-center">
                        <h1 class="font-poppins text-slate-500 text-xs line-through">Rp15,000</h1>
                        <h1 class="font-poppins text-red-900 bg-red-300 text-xs ml-1.5 py-0.5 px-1 rounded-md">66%</h1>
                    </div>
                    <form class="btn-plus-and-minus w-full flex-all-center h-6 mt-2">
                        <button type="button" class="btn-minus font-poppins">-</button>
                        <input
                            class="quantity bg-slate-50 text-slate-800 w-full h-full mx-2 rounded-md text-center text-sm"
                            type="number" name="quantity" min="0" step="10">
                        <button type="button" class="btn-plus font-poppins">+</button>
                    </form>
                    <button class="btn-submit">Masukkan</button>
                </div>
            </div>
            <div class="info-category flex items-center justify-end">
                <h1 class="text-base text-right font-semibold text-slate-700">List 2</h1>
                <img src="css/img-logo/information.png" alt="infomation" srcset="" class="h-4 ml-1">
            </div>
            <div class="list-card flex gap-4 mt-2 overflow-hidden items-center w-full my-2">
                <div class="card">
                    <div class="card-img w-32 aspect-square">
                        <img class="object-cover w-full h-full rounded-md" src="../src/img/error-404.png" alt="Item">
                    </div>
                    <h1 class="name-item">Name Item Lorem</h1>
                    <h1 class="price-item">Rp10,000</h1>
                    <div class="discount-price flex items-center">
                        <h1 class="font-poppins text-slate-500 text-xs line-through">Rp15,000</h1>
                        <h1 class="font-poppins text-red-900 bg-red-300 text-xs ml-1.5 py-0.5 px-1 rounded-md">66%</h1>
                    </div>
                    <form class="btn-plus-and-minus w-full flex-all-center h-6 mt-2">
                        <button type="button" class="btn-minus font-poppins">-</button>
                        <input
                            class="quantity bg-slate-50 text-slate-800 w-full h-full mx-2 rounded-md text-center text-sm"
                            type="number" name="quantity" min="0" step="10">
                        <button type="button" class="btn-plus font-poppins">+</button>
                    </form>
                    <button class="btn-submit">Masukkan</button>
                </div>
                <div class="card">
                    <div class="card-img w-32 aspect-square">
                        <img class="object-cover w-full h-full rounded-md" src="../src/img/error-404.png" alt="Item">
                    </div>
                    <h1 class="name-item">Name Item Lorem</h1>
                    <h1 class="price-item">Rp10,000</h1>
                    <div class="discount-price flex items-center">
                        <h1 class="font-poppins text-slate-500 text-xs line-through">Rp15,000</h1>
                        <h1 class="font-poppins text-red-900 bg-red-300 text-xs ml-1.5 py-0.5 px-1 rounded-md">66%</h1>
                    </div>
                    <form class="btn-plus-and-minus w-full flex-all-center h-6 mt-2">
                        <button type="button" class="btn-minus font-poppins">-</button>
                        <input
                            class="quantity bg-slate-50 text-slate-800 w-full h-full mx-2 rounded-md text-center text-sm"
                            type="number" name="quantity" min="0" step="10">
                        <button type="button" class="btn-plus font-poppins">+</button>
                    </form>
                    <button class="btn-submit">Masukkan</button>
                </div>
                <div class="card">
                    <div class="card-img w-32 aspect-square">
                        <img class="object-cover w-full h-full rounded-md" src="../src/img/error-404.png" alt="Item">
                    </div>
                    <h1 class="name-item">Name Item Lorem</h1>
                    <h1 class="price-item">Rp10,000</h1>
                    <div class="discount-price flex items-center">
                        <h1 class="font-poppins text-slate-500 text-xs line-through">Rp15,000</h1>
                        <h1 class="font-poppins text-red-900 bg-red-300 text-xs ml-1.5 py-0.5 px-1 rounded-md">66%</h1>
                    </div>
                    <form class="btn-plus-and-minus w-full flex-all-center h-6 mt-2">
                        <button type="button" class="btn-minus font-poppins">-</button>
                        <input
                            class="quantity bg-slate-50 text-slate-800 w-full h-full mx-2 rounded-md text-center text-sm"
                            type="number" name="quantity" min="0" step="10">
                        <button type="button" class="btn-plus font-poppins">+</button>
                    </form>
                    <button class="btn-submit">Masukkan</button>
                </div>
            </div>
        </div>
    </section>
    <section id="footer-page" class="bg-gradient-to-b from-blue-600 to-blue-900 w-full flex-all-center flex-col py-4">
        <div class="wrap-footer w-11/12">
            <div id="logo-footer" class="flex-all-center p-2">
                <img class="w-24" src="../src/img/home/logo.png" alt="logo">
            </div>
            <div class="footer-menu mt-4">
                <h1 class="font-poppins text-lg text-slate-100">
                    Tentang Wesbsite
                </h1>
                <p class="font-poppins text-xs text-blue-300 mt-2 text">Situs ini dirancang untuk memudahkan pengalaman
                    berbelanja Anda. Pilih produk, tambahkan ke keranjang, dan selesaikan pembelian dengan mudah.
                    Konfirmasi pesanan Anda di halaman kontak. Semoga fitur ini memberikan kenyamanan pada setiap
                    langkah transaksi Anda.</p>
            </div>
            <div class="footer-menu mt-4">
                <h1 class="font-poppins text-lg text-slate-100">
                    Sosial Media & Kontak
                </h1>
                <div class="mt-2 grid grid-cols-2 gap-1.5">
                    <a
                        class="font-poppins text-xs text-blue-600 p-1.5 bg-slate-100 font-semibold rounded-md text-center">Facebook</a>
                    <a
                        class="font-poppins text-xs text-blue-600 p-1.5 bg-slate-100 font-semibold rounded-md text-center">Instagram</a>
                    <a
                        class="font-poppins text-xs text-blue-600 p-1.5 bg-slate-100 font-semibold rounded-md text-center">WhatsApp</a>
                    <a
                        class="font-poppins text-xs text-blue-600 p-1.5 bg-slate-100 font-semibold rounded-md text-center">Telegram</a>
                </div>
            </div>
        </div>
    </section>


    <script src="js/script.js"></script>
</body>

</html>