import { D } from "../utils/days"

export class DaysNavigation {

    scheduleInfo: any
    allDays: any[] = []
    daysNavs: {
      day: string,
      date: any,
      disabled: string,
      active: string,
      dayNumber: string,
    }[] = []
  
    constructor(props) {
        this.scheduleInfo = props.scheduleInfo
        this.prepareMassData()
        this.prepareNavs()
    }


    private dayInDaysExists(dayNumber: any): any {
        let found = this.scheduleInfo.find((el) => dayNumber == el.dayNumber)
        return (found === undefined) ? false : true
    }

    prepareMassData() {
        this.scheduleInfo = this.scheduleInfo.map(a => {
        return {
          date: a.date,
          dayName: D.getWeekDay(a.date),
          dayNumber: D.getDayIndex(a.date),
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
          newDate = new Date( Date.parse( this.scheduleInfo.find(el => el.dayNumber == a).date ) )
        } else {
          newDate = D.getToday()
          newDate.setDate(D.getToday().getDate() + i)
          disabled = 'disabled'
        }
        date = newDate.getDate().toString().padStart(2, '0') + '.' + (newDate.getMonth() + 1).toString().padStart(2, '0')
        

        day = D.getWeekName(a)
        if (i == 0) { active = 'active' }

        return {
          active: active,
          date: date,
          day: day,
          dayNumber: a,
          disabled: disabled,
        }
    })
    console.log(this.daysNavs)
  }

}