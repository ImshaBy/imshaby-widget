export class CONST {
    static API_MASS_URL: string = 'https://api.imsha.by/api/mass/week'
    static API_COLOR_SCHEME_URL: string = 'https://content.imsha.by/api/schedule-page?locale=be&populate[0]=theme'
    static API_COLOR_SCHEME_AUTHORIZATION_TOKEN: string = 'Bearer f47d0be041da384c077ed5e2c6adee196300b159b78f0b3c720780274f5215c5d75de0028e72d6b83f4065bd336d79c5007a31d62a7191f6b412017b2387ef6a9a578cf560557a37933853598be638235a785380b768065b491bfa46b024a83ea354a30e999ff604fb6d148904bf42c4374084d0746d6f2163ee077daa05f04c'

    static TRUE: boolean = true
    static FALSE: boolean = false
    static NULL: any = null

    static PLATE_SHOW_ACTIVE: string = 'show active'

    static ERR_GETTING_SCHEDULE: string = 'Service could not obtain schedule.'
    static ERR_GETTING_COLOR_SCHEME: string = 'Service could not obtain color scheme.'
    static ERR_WIDGET_COMPOSITION_FAILED: string = 'На жаль, не ўдалося карэктна завяршыць пабудову віджэта і вывесці расклад Святых Імш.'
}