window.onload = () => {
    let chebupeliCount = 0;
    let baltikaCount = 0;
    let doshickCount = 0;

    let chebupeliCounter = document.querySelector(".chebupeli .count");
    let chebupeliDec = document.querySelector(".chebupeli .dec");
    let chebupeliInc = document.querySelector(".chebupeli .inc");
    chebupeliDec.onclick = () => {
        if (--chebupeliCount < 0) 
            chebupeliCount = 0;
        chebupeliCounter.textContent = chebupeliCount.toString();
    }
    chebupeliInc.onclick = () => {
        chebupeliCounter.textContent = (++chebupeliCount).toString();
    }

    let baltikaCounter = document.querySelector(".baltika .count");
    let baltikaDec = document.querySelector(".baltika .dec");
    let baltikaInc = document.querySelector(".baltika .inc");
    baltikaDec.onclick = () => {
        if (--baltikaCount < 0) 
            baltikaCount = 0;
        baltikaCounter.textContent = baltikaCount.toString();
    }
    baltikaInc.onclick = () => {
        baltikaCounter.textContent = (++baltikaCount).toString();
    }

    let doshickCounter = document.querySelector(".doshick .count");
    let doshickDec = document.querySelector(".doshick .dec");
    let doshickInc = document.querySelector(".doshick .inc");
    doshickDec.onclick = () => {
        if (--doshickCount < 0) 
            doshickCount = 0;
        doshickCounter.textContent = doshickCount.toString();
    }
    doshickInc.onclick = () => {
        doshickCounter.textContent = (++doshickCount).toString();
    }
}