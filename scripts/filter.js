//Const
const buttonItem = document.querySelectorAll('.filter button');
const imgItem = document.querySelectorAll('.product a img');

    buttonItem.forEach(button => {
        button.onclick = function() {
        //active
        buttonItem.forEach(button => {
            button.className = "";
        })
        button.className = "active";

        //Filter
        const value = button.textContent;
        imgItem.forEach(img => {
            img.style.display = 'none';
            if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All Menu") {
                img.style.display = 'block';
            }
        })
        }
    });