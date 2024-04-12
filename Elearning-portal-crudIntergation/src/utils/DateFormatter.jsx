
import Moment from 'moment';

function DateFormatter(dt, formatter) {
    Moment.locale('en');
    return Moment(dt).format(formatter);
}

export default DateFormatter