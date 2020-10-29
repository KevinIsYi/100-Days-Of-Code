document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log("Reproducir");
    }
    else {
        console.log("Parar video");
    }
})