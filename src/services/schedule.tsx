import { Prop } from '@stencil/core';
import { D } from '../utils/days';
import { CONST } from './constants';

export class APISchedule {

  @Prop() scheduleInfo: any;

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

}
