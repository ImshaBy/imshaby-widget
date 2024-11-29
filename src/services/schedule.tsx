import { State } from '@stencil/core';
import { D } from '../utils/days';
import { CONST } from './constants';

export class APISchedule {

  @State() scheduleInfo: any;

  @State() allDays: any[] = [];
  @State() daysNavs: {
    day: string,
    date: any,
    disabled: string,
    active: string,
    dayNumber: string,
  }[] = [];

  async getScheduleFromAPI(props) {

      const fetchHeaders = new Headers();
      fetchHeaders.append('Content-Type', 'application/json; charset=utf-8');
      fetchHeaders.append('x-show-pending', 'true');
      fetchHeaders.append('parish-week-api-key', props.parishId());

      try {
        const response = await fetch(CONST.API_URL, {
          method: 'GET',
          headers: fetchHeaders,
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        this.scheduleInfo = await response.json();
        this.scheduleInfo = this.scheduleInfo.map(a => {
          return {
            date: a.date,
            dayName: D.getWeekDay(a.date),
            days: a.massHours[0].data[0].days[0],
            massHours: a.massHours.map(e => {
              return {
                time: e.hour,
                info: e.data[0].info,
                duration: e.data[0].duration,
                langCode: e.data[0].langCode,
                needUpdate: e.data[0].needUpdate,
                lastConfirmRelevance: e.data[0].parish.lastConfirmRelevance,
                updatePeriodInDays: e.data[0].parish.updatePeriodInDays,
                online: e.data[0].online,
                rorate: e.data[0].rorate,
                address: e.data[0].parish.address,
                broadcastUrl: e.data[0].parish.broadcastUrl
              }
            }),
          }
        })

      } catch (error) {
        throw new Error(CONST.ERR_GETTING_SCHEDULE)
      }
    }

  private dayInDaysExists(days: any): any {
    let found = this.scheduleInfo.find((el) => days == el.days)
    return (found === undefined) ? false : true
  }

  prepareNavs() {
    
    let todaysIndex = D.getToday().getDay()
    if (todaysIndex == 0) { todaysIndex = 7 }

    let index = D.standardDays.indexOf(todaysIndex.toString())
    if (index !== -1) {
      let slicedArray = D.standardDays.slice(index)
      slicedArray = slicedArray.concat(D.standardDays.slice(0, index))
      slicedArray.forEach(day => this.allDays.push(day))
    }

    this.daysNavs = this.allDays.map((a, i) => {
      let active = ''
      let date: any
      let day = ''
      let disabled = ''
      let newDate: Date

      if (this.dayInDaysExists(a)) {
        date = this.scheduleInfo.find(el => el.days == a).date
        date = Date.parse(date)
        newDate = new Date(date)
        date = newDate.getDate().toString().padStart(2, '0') + '.' + (newDate.getMonth() + 1).toString().padStart(2, '0')
      } else {
        disabled = ' disabled'
        date = '—'
      }

      day = D.getWeekName(a)
      if (i == 0) { active = ' active' }

      return {
        active: active,
        date: date,
        day: day,
        dayNumber: a,
        disabled: disabled,
      }
    })

  }
  
}
