document.onreadystatechange = subSomething;
function subSomething() {
    //当页面加载状态
    if (document.readyState == "complete") {
        //延迟一秒关闭loading
        $('#sys-loading').delay(1300).hide(0);
        $('.spinner').delay(1300).fadeOut('slow');
    }
}
