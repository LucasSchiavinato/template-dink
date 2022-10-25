//Const
const buttonItem = document.querySelectorAll('.filter button');
const productItem = document.querySelectorAll('.products .product');

    buttonItem.forEach(button => {
        button.onclick = function() {
        //active
        buttonItem.forEach(button => {
            button.classList.remove("active");
        })
        button.classList.add("active");

        //Filter
        const filter = button.textContent.toLowerCase();

        productItem.forEach(product => {
            product.style.display = 'none';
            let dataFilter = product.getAttribute('data-filter').split(" ")

            dataFilter.forEach(palavra => {
                if(palavra === filter){
                    product.style.display = 'block';
                }
            })
        })
        }
    });