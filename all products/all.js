
const manageSpinner = (status) => {
    if (status) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("productDisplay").classList.add("hidden");
    } else {
        document.getElementById("spinner").classList.add("hidden");
        document.getElementById("productDisplay").classList.remove("hidden");
    }
};

const allProducts = () => {
    manageSpinner(true);
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            cardContainer(data);
            manageSpinner(false);
        })
    const cardContainer = (data) => {
        const productDisplay = document.getElementById("productDisplay");
        productDisplay.innerHTML = "";
        data.forEach((datas) => {
            const btnDiv = document.createElement("div");
            btnDiv.innerHTML = `
            <div class="card mx-auto bg-gray-100 rounded-2xl border border-gray-200 shadow-2xl mb-5">
              <figure>
                <img src="${datas.image}" class="h-80 object-contain"/>
              </figure>
              <div class="card-body bg-white rounded-b-2xl">
                <div class="flex justify-between items-center">
                  <h2 class="card-tag btn h-5 bg-fuchsia-200 hover:bg-fuchsia-600 rounded-4xl text-gray-500">${datas.category}</h2>
                  <p class="text-end"><i class="fa-solid fa-star fa-beat-fade" style="color: rgba(255, 212, 59, 1);"></i>${datas.rating.rate} (${datas.rating.count})</p>
                </div>
                <p class="w-3/4 truncate text-gray-400">${datas.title}</p>
                <h2 class="text-2xl font-semibold">$ ${datas.price}</h2>
                <div class="card-actions justify-between gap-5">
                  <div onclick="productDetails(${datas.id})" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><i class="fa-solid fa-eye"></i>Details</div>
                  <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-fuchsia-300 hover:bg-fuchsia-600 hover:text-white md:flex-1"><i class="fa-brands fa-opencart hover:text-white"></i>Add</button>
                </div>
              </div>
            </div>`;
            productDisplay.appendChild(btnDiv);
        });
    };
};
allProducts();
