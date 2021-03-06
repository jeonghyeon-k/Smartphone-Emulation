import { DelAlarm } from "../../services/DelAlarm";
import { parseRequestUrl } from "../../services/ParseUrl.js";
const AlertAlarm = {
  render: async (resource, verb, id) => {

    function alert(index,item) {
      const message = `${item.moon} ${item.hour}시 ${item.minute}분 알람 !! `;
      const { resource, id, verb } = parseRequestUrl();
      window.alert(message, false);
      if (resource === "alarm") {
        location.href = `/#/alarm/del/${index}`;
      } else {
        DelAlarm(index);
      }
    }

    const alertalarm = () => {
      const newDate = new Date();
      const currenttime = `${newDate.getHours()}${newDate.getMinutes()}`;

      const localalarm = JSON.parse(localStorage.getItem("alarm"));
      const alarmlist = [];

      const locallist = [];
      if (localalarm) {
        locallist.push(...localalarm);
      }
      for (let i = 0; i < locallist.length; i++) {
        const item = locallist[i];
        const localhours =
          item.moon === "오전" ? Number(item.hour) : Number(item.hour) + 12;
        const localMinutes = Number(item.minute);
        alarmlist.push(`${localhours}${localMinutes}`);
      }
      for (let i = 0; i < alarmlist.length; i++) {
        const item = alarmlist[i];
        if (item === currenttime) {
          alert(i,localalarm[i]);
        }
      }
    };
    alertalarm();
    setInterval(alertalarm, 1000);
  },
};
export default AlertAlarm;
