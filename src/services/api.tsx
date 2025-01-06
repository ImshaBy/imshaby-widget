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
    fetchHeaders.append('Authorization', 'Bearer f47d0be041da384c077ed5e2c6adee196300b159b78f0b3c720780274f5215c5d75de0028e72d6b83f4065bd336d79c5007a31d62a7191f6b412017b2387ef6a9a578cf560557a37933853598be638235a785380b768065b491bfa46b024a83ea354a30e999ff604fb6d148904bf42c4374084d0746d6f2163ee077daa05f04c')

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
