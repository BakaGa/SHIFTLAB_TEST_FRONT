document.querySelector("#search-button").addEventListener("click", function search() {
    val = document.querySelector("#search-input").value.trim().toLowerCase();
    colItems = document.querySelectorAll(".col-1 p");
    counter = 0;
    if (val != "") {
        colItems.forEach(function(elem) {
            if (elem.innerText.toLowerCase().indexOf(val) != -1) {
                elem.style.cssText = "background-color: #f77;";
                counter += 1;
            } else {
                elem.removeAttribute("style");
            }
            if (counter != 0) {
                document.getElementById("output").innerText = "Найденных совпадений: " + counter;
                document.getElementById("output").style.display = "block";
                document.getElementById("output").classList.add("success");
                document.getElementById("output").classList.remove("error");
            } else {
                document.getElementById("output").innerText = "Ничего не найденно";
                document.getElementById("output").style.display = "block";
                document.getElementById("output").classList.add("error");
                document.getElementById("output").classList.remove("success");
            }
        });
    } else {
        colItems.forEach(function(elem) {
            elem.removeAttribute("style");
        });
        document.getElementById("output").innerText = "Введите данные для поиска";
        document.getElementById("output").style.display = "block";
        document.getElementById("output").classList.add("error");
        document.getElementById("output").classList.remove("success");
    }
});