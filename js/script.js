
// 1. LOGIN PAGE (index.html)

document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("tombol_login");

    if (loginBtn) { // hanya berjalan jika tombol login ada
        loginBtn.addEventListener("click", function () {

            let username = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                alert("username dan password tidak boleh kosong");
                return;
            }

            if (username === "fakhri" && password === "24090113") {
                alert("Login berhasil!");
                window.location.href = "dashboard.html";
            } else {
                alert("Username atau password salah!");
            }
        });
    }

});


// 2. DASHBOARD PAGE (dashboard.html)

document.addEventListener("DOMContentLoaded", () => {

    const productShow = document.getElementById("showproduct");

    if (productShow) {
        const summary = {
            Totalproduct: 120,
            Totalsales: 85,
            Revenue: 12500000
        };

        document.getElementById("showproduct").textContent = summary.Totalproduct;
        document.getElementById("showsales").textContent = summary.Totalsales;
        document.getElementById("showrevenue").textContent = "Rp." + summary.Revenue;

        const btnList = document.getElementById("btnlistproduct");
        if (btnList) {
            btnList.addEventListener("click", () => {
                window.location.href = "products.html";
            });
        }
    }

});


// 3. PRODUCTS PAGE (products.html)

document.addEventListener("DOMContentLoaded", () => {

    const productTable = document.getElementById("productTable");

    if (productTable) {

        const products = [
            { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
            { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
            { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
        ];

        function renderTable() {
            productTable.innerHTML = "";

            products.forEach((item, index) => {
                productTable.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.stock}</td>
                        <td>
                            <img src="css/edit.svg" class="action-btn" onclick="editProduct(${index})">
                            <img src="css/delete.svg" class="action-btn" onclick="deleteProduct(${index})">
                        </td>
                    </tr>
                `;
            });
        }

        renderTable();

        window.deleteProduct = function (index) {

            const yakin = confirm("Apakah kamu yakin ingin menghapus produk ini?");

            if (yakin) {
                products.splice(index, 1);
                renderTable();
            }
        };


        window.editProduct = function (index) {
            const current = products[index];

            const newName = prompt("Nama produk:", current.name);
            const newPrice = prompt("Harga produk:", current.price);
            const newStock = prompt("Stok produk:", current.stock);

            if (newName !== null && newPrice !== null && newStock !== null) {
                products[index].name = newName;
                products[index].price = parseInt(newPrice);
                products[index].stock = parseInt(newStock);
                renderTable();
            }
        };


    }

});
