import {DelAlarm} from './DelAlarm.js';

const AlertAlarm = {

     render: async (resource, verb, id) => {

        const parsedUrl =
        (resource ? '/' + resource : '/') +
        (verb ? '/' + verb : '');
        
        function alert(index){
            window.alert("알람",false)
            if(resource==="alarm"){
                location.href=`/#/alarm/del/${index}`;
            }else{
                DelAlarm(index,parsedUrl);
            }
        }
          
        const alertalarm = () => {
            const newDate = new Date()
            const currenttime = `${newDate.getHours()}${newDate.getMinutes()}`;
          
            const localalarm = JSON.parse(localStorage.getItem('alarm'));
            const alarmlist = []
          
            const locallist  = []
            if (localalarm){
              locallist.push(...localalarm);
            }
            for(let i=0;i<locallist.length;i++){
              const item = locallist[i]
              const localhours = (item.moon==="오전")? item.hour : Number(item.hour)+12;
              const localMinutes = Number(item.minute);
              alarmlist.push(`${localhours}${localMinutes}`)
            }
            for(let i=0;i<alarmlist.length;i++){
              const item = alarmlist[i]
              if(item === currenttime){
                alert(i);
              }
            }
          };
          alertalarm();
          setInterval(alertalarm, 1000);
    }
  };
  export default AlertAlarm;
  