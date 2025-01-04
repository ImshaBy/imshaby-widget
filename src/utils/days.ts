export class D {

  static readonly standardDays = ['1', '2', '3', '4', '5', '6', '7']
  static readonly daysNames = ['Нд', 'Пн', 'Ат', 'Ср', 'Чц', 'Пт', 'Сб']

  static parseDateFromString(date: string): Date {
    let dateTS = Date.parse(date)

    return new Date(dateTS)
  }

  static getToday(): Date {
    let today = new Date()

    return today
  }

  static getDayIndex(date: string): string {
    let dateObject = this.parseDateFromString(date)
    let index = (dateObject.getDay() == 0) ? (7) : (dateObject.getDay())

    return index.toString()
  }

  static getWeekDay(date: string): string {
    let index = this.getDayIndex(date)

    return this.daysNames[index]
  }

  static getWeekName(index: any): string {
    if (index == 7) { index = 0 }
    return this.daysNames[index]
  }

  static strToDate(dtStr): Date {
    if (!dtStr) return null
    let dateParts = dtStr.split("-");
    let timeParts = dateParts[2].split(" ")[1].split(":");
    dateParts[2] = dateParts[2].split(" ")[0];
    // month is 0-based, that's why we need dataParts[1] - 1
    return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0], timeParts[0], timeParts[1], timeParts[2]);
  }
}
