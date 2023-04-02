function toggleFullScreen(el) {
    // // ## The below if statement seems to work better ## 
    // if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    //     //if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
    //     if (elem.requestFullScreen) {
    //         elem.requestFullScreen();
    //     } else if (elem.mozRequestFullScreen) {
    //         elem.mozRequestFullScreen();
    //     } else if (elem.webkitRequestFullScreen) {
    //         elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    //     } else if (elem.msRequestFullscreen) {
    //         elem.msRequestFullscreen();
    //     }
    // } else {
    //     if (document.cancelFullScreen) {
    //         document.cancelFullScreen();
    //     } else if (document.mozCancelFullScreen) {
    //         document.mozCancelFullScreen();
    //     } else if (document.webkitCancelFullScreen) {
    //         document.webkitCancelFullScreen();
    //     } else if (document.msExitFullscreen) {
    //         document.msExitFullscreen();
    //     }
    // }

    var el = document.documentElement,
        rfs = // for newer Webkit and Firefox
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;
    if (typeof rfs != "undefined" && rfs) {
        rfs.call(el);
    } else if (typeof window.ActiveXObject != "undefined") {
        // for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
            wscript.SendKeys("{F11}");
        }
    }



}