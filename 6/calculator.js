function display() {
    const p = document.getElementsByName("products")[0];
    p.addEventListener('change', function(event){
        document.getElementById("choice_lang").classList.add("d-none"); 
        document.getElementById("choice_check").classList.add("d-none");
        if(p.value === "v2"){
            document.getElementById("choice_lang").classList.remove("d-none");
        }
        else if(p.value === "v3"){
            document.getElementById("choice_check").classList.remove("d-none");
        }
    });

}

function count() {
    let p = document.getElementsByName("products")[0];
    let q = document.getElementsByName("quantity")[0];
    let s2 = document.getElementsByName("select2")[0];
    let ch = document.getElementsByName("check2")[0];
    let r = document.getElementById("result");

    let regex = /^\d+$/;
    if (q.value === "" || !regex.test(q.value) || parseInt(q.value) <= 0) {
        r.innerHTML = "Введите корректное количество!";
        return false;
    }

    let price = {
        'v1': 2000,
        'v2': 1500,
        'v3': 1000,
    }
    let startPrice = price[p.value] || 0;

    let price_lang = {
        'l1': 0,
        'l2': 250,
        'l3': 500
    };
    let startPrice_lang = (p.value === "v2") ? price_lang[s2.value] : 0;
    
    let price_check = (p.value === "v3") && ch.checked ? 700 : 0;

    result = q.value*(startPrice + startPrice_lang + price_check);
    r.innerHTML ="Стоимость заказа: "+result+" рублей";
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByName("products")[0].addEventListener('change', count);
    document.getElementsByName("quantity")[0].addEventListener('input', count);
    if(document.getElementsByName("select2")[0])
        document.getElementsByName("select2")[0].addEventListener('change', count);
    
    if(document.getElementById("choice_check"))
        document.getElementsByName("check2")[0].addEventListener('change', count);

    display();
    count();
});
