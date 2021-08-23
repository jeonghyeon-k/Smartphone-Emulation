
export const DelAlarm = (id,parsedUrl) => {
    // Convert location hash into an url.

    let alarms = JSON.parse(localStorage.getItem('alarm'));
    alarms.splice(id, 1);
    localStorage.setItem("alarm", JSON.stringify(alarms));
    location.href= (parsedUrl) ? `/#${parsedUrl}`: `/#/alarm`;

  };