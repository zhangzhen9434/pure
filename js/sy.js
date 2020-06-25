function search() {
    if (document.getElementById("search_input").value != "") {
        window.location.href = "www.baidu.com/s?word=" + document.getElementById("search_input").value;
        document.getElementById("search_input").value = "";
    }
    return false;
}
