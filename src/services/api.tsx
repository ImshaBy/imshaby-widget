import { CONST } from './constants'

export class API {

  scheduleInfo: any
  colorScheme: string
  colorSchemeHash: string

  public async requestInfo(props) {
    await Promise.all([
      this.getScheduleFromAPI(props),
      this.getColorSchemeFromAPI()
    ])
  }

  public getScheduleInfo() {
    return this.scheduleInfo
  }

  public getColorScheme() {
    return this.colorScheme
  }

  public getColorSchemeHash() {
    return this.colorSchemeHash
  }

  private getScheduleFromAPI(props) {

    const fetchHeaders = new Headers()
    fetchHeaders.append('Content-Type', 'application/json; charset=utf-8')
    fetchHeaders.append('x-show-pending', 'true')
    fetchHeaders.append('parish-week-api-key', props.parishId)

    return fetch(CONST.API_MASS_URL, {
        method: 'GET',
        headers: fetchHeaders,
      })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.scheduleInfo = response
        return true
      })
      .catch((error) => {
        throw new Error(CONST.ERR_GETTING_SCHEDULE + " [" + error + "]")
      })

  }

  private getColorSchemeFromAPI() {

    const fetchHeaders = new Headers()
    fetchHeaders.append('Authorization', CONST.API_COLOR_SCHEME_AUTHORIZATION_TOKEN)

    return fetch(CONST.API_COLOR_SCHEME_URL, {
        method: 'GET',
        headers: fetchHeaders,
        redirect: "follow",
      })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.colorScheme = response.data.attributes.theme.data.attributes.color
        this.colorSchemeHash = this.colorScheme.slice(1)

        return (this.colorScheme !== CONST.NULL && this.colorSchemeHash !== CONST.NULL) ? true : false
      })
      .catch((error) => {
        throw new Error(CONST.ERR_GETTING_COLOR_SCHEME + " [" + error + "]")
      })

  }
  
}
