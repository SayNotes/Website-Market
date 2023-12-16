<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jasa Joki</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body class="bg-slate-100 h-screen">


    <div class="w-full h-screen absolute top-0 left-0 -z-50 bg-gradient-to-t from-slate-100 to-blue-100"></div>
    <nav id="nav" class="w-full h-max px-4 pt-4 flex-all-center">
        <div class="w-11/12 flex justify-between items-center">
            <h1 class="font-poppins text-lg text-slate-700 font-semibold">Keranjang</h1>
            <a class="nav-bag" href="index.php">
                <img class="h-6" src="../public/css/img-logo/back-arrow.png" alt="bag logo" class="img-logo">
            </a>
        </div>
    </nav>

    <section id="home-page" class="mt-2 w-full flex-all-center">
        <div id="home-wrap" class="w-11/12">

            <div class="flex flex-col sm:w-full">
                <div
                    class="w-full border border-blue-200 bg-gradient-to-t from-blue-200 to-blue-50 shadow-md flex-col flex p-1 text-white rounded-md mt-4">
                    <div class="w-full p-2 gap-x-1">
                        <?php
                        for ($i = 0; $i < 6; $i++) {
                        ?>
                        <div class="product-card">
                            <img src="../public/css/img-logo/honkai-star-rail.webp" alt="Genshin Impact"
                                class="product-img">
                            <div class="product-info">
                                <div class="flex flex-col">
                                    <h1 class="text-slate-700 text-sm">Product Name</h1>
                                    <h1 class="product-price">Rp.10.000</h1>
                                </div>
                                <div class="flex flex-row-reverse">
                                    <form class="quantity-btn">
                                        <button type="button" class="btn-minus font-poppins">-</button>
                                        <input class="quantity-input quantity" type="number" name="quantity" min="0"
                                            step="10">
                                        <button type="button" class="btn-plus font-poppins">+</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <?php
                        }
                        ?>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <script src="js/script.js"></script>

</body>

</html>