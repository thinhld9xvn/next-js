import TimeAgo from 'javascript-time-ago'
function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

export function getFormatDate(date) {
    const day = date.getDate(),
          month = date.getMonth() + 1,
          year = date.getFullYear(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
    return {day, month, year, hour, min, sec};
}

export function getFormatDateStr(d) {
    //let {day, month, year, hour, min, sec} = getFormatDate(d);
    //const {day : nowDay, month : nowMonth, year : nowYear} = getFormatDate(new Date());
    const timeAgo = new TimeAgo('vi-VN');
    return timeAgo.format(d);
    /*if ( nowDay === day && nowMonth === month && nowYear === nowYear ) {
        
    }
    return `${zeroPad(hour, 2)}:${zeroPad(min, 2)} ${zeroPad(day, 2)}-${zeroPad(month, 2)}-${year}`;*/
}

export function parseDateStr(str) {
    if ( /[-T :]/.test(str) ) {        
        const t = str.split(/[-T :]/);
        t[5] = parseInt(t[5]).toString();
        return new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
    }
    return new Date(str);
}

export function formatDateStr(d) {
    const date = parseDateStr(d);
    date.setHours(date.getHours() + 7);
    return getFormatDateStr(date);
}
