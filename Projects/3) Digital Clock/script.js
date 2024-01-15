
function digitalClock()
{
    let time = new Date();
    let getCurrentHour = time.getHours();
    let getCurrentMinute = time.getMinutes();
    let getCurrentSecond = time.getSeconds();
    //let getCurrentMillisecond = time.getMilliseconds();

    if(getCurrentHour > 12)
    {
        getCurrentHour -= 12;
        document.getElementById('ampm').innerHTML = 'PM';
    }

    document.getElementById("hours").innerHTML = padZero(getCurrentHour);
    document.getElementById("minutes").innerHTML = padZero(getCurrentMinute);
    document.getElementById("seconds").innerHTML = padZero(getCurrentSecond);
    //document.getElementById("milliseconds").innerHTML = padZero(getCurrentMillisecond);
}

function padZero(number)
{
    return (number < 10) ? '0'+number : number;
}

setInterval(digitalClock, 500);