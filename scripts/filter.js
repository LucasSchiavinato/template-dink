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
        const value = button.textContent;
        productItem.forEach(product => {
            product.style.display = 'none';

            console.log(product.getAttribute('data-filter'));
            console.log(value);

            if (product.getAttribute('data-filter') == value.toLowerCase() || value == "All") {
                product.style.display = 'block';
            }
        })
        }
    });