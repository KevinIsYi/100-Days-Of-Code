const updateState = () => {
    if (navigator.onLine) {
        console.log("YES");
    }
    else {
        console.log("No");
    }
}
window.addEventListener('online', updateState);
window.addEventListener('offline', updateState);
