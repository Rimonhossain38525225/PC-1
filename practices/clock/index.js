// const button = document.querySelector("#button")
    setInterval(() => {
        const clock = document.querySelector(".demo")
        const date = new Date()
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000);

