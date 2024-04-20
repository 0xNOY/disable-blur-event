// scripts that disable the event of blur

orginalAddEventListener = window.addEventListener;

window.addEventListener = (type, listener, options) => {
    let t = ["blur", "visibilitychange"];
    if (t.indexOf(type) > -1) {
        console.log("Event " + type + " is disabled");
        return;
    }

    orginalAddEventListener(type, listener, options);
}
document.addEventListener = window.addEventListener;

console.log('main.js is loaded');