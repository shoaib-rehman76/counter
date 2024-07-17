const timerfun = () => {
    const futureDate = new Date("aug 19, 2024 00:00:00");
    // 19.08.24 (00:00 Uhr) CET
    const dayTag = document.querySelector('.day')
    const hourTag = document.querySelector('.hour')
    const minTag = document.querySelector('.minute')
    const secondTag = document.querySelector('.second')

    const updateTimer = () => {
        const now = new Date();
        const diff = futureDate - now;

        if (diff <= 0) {
            clearInterval(intervalId);
            console.log("The countdown is over!");
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        dayTag.innerHTML = days
        hourTag.innerHTML = hours
        minTag.innerHTML = minutes
        secondTag.innerHTML = seconds
    };

    const intervalId = setInterval(updateTimer, 1000);
};

timerfun();