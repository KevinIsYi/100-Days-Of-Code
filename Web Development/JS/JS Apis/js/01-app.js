const notificarBtn = document.querySelector('#notificar');
const verNoti = document.querySelector('#verNotificacion');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission()
        .then(res => {
            console.log(`Res: ${ res }`);
        })
})

verNoti.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notif = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Este es el cuerpo'
        });

        notif.onclick = () => {
            window.open('https://www.google.com');
        }

    }
})