import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'imshaby-widget',
  styleUrl: 'imshaby-widget.css',
  shadow: true
})
export class ImshabyWidget {

  @Prop() parishId: string;
  @State() colorScheme: string;
  @State() colorSchemeHash: string;
  @State() allDays: any[] = [];

  @State() scheduleInfo: {
    date: string,
    dayName: string,
    days: string,
    massHours: {
      time: string,
      info: string,
      duration: string,
      langCode: string,
      needUpdate: boolean,
      online: boolean,
      rorate: boolean,
      address: string,
      broadcastUrl: string,
    }[],
    }[] = [];

  @State() daysNavs: {
    day: string,
    date: any,
    disabled: string,
    active: string,
    dayNumber: string,
  }[] = [];
  
  @State() parishInfo : {
    parishId: string,
    parishName: string,
  };

  componentWillLoad() {
    this.getColorScheme();
    this.getScheduleFromAPI();
  }

  getScheduleFromAPI() {
    let xhr = new XMLHttpRequest();
    // let url = 'https://api.imsha.by/api/mass/week';
    let url = 'https://app.nutricio.org/api/imshaby-widget';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    //xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    // xhr.setRequestHeader('x-show-pending', 'true');
    // xhr.setRequestHeader('parish-week-api-key', this.getParishId());
  
    xhr.onload = () => {
    if (xhr.status != 200 || xhr.readyState != 4) {
        return;
    }
    let r = xhr.response;

    this.scheduleInfo = r.map(a => {
      
      return {
        date: a.date,
        dayName: this.getWeekDay(a.date),
        days: a.massHours[0].data[0].days[0],
        massHours: a.massHours.map(e => {
          return {
            time: e.hour,
            info: e.data[0].info,
            duration: e.data[0].duration,
            langCode: e.data[0].langCode,
            needUpdate: e.data[0].needUpdate,
            online: e.data[0].online,
            rorate: e.data[0].rorate,
            address: e.data[0].parish.address,
            broadcastUrl: e.data[0].parish.broadcastUrl
          }
        }),
      };

    });

    let standardDays = ['1', '2', '3', '4', '5', '6', '7']
    
    let index = standardDays.indexOf( this.getTodayDay().getDay().toString() )
    
    if (index !== -1) {
        let slicedArray = standardDays.slice(index)

        slicedArray = slicedArray.concat(standardDays.slice(0, index))

        slicedArray.forEach(day => this.allDays.push( day ))
    }

    this.daysNavs = this.allDays.map((a, i) => {
      let active = '';
      let date;
      let day = '';
      let disabled = '';
      let newDate;

      if (this.dayInDaysExists(a)) {
        date = this.scheduleInfo.find(el => el.days == a).date
        date = Date.parse(date)
        newDate = new Date(date)
        date = newDate.getDate().toString().padStart(2, '0') + '.' + (newDate.getMonth() + 1).toString().padStart(2, '0')

        
      } else {
        disabled = ' disabled'
        date = '—'
      }

      day = this.getWeekName(a);
      if (i == 0) {
        active = ' active'
      }

      return {
        active: active,
        date: date,
        day: day,
        dayNumber: a,
        disabled: disabled,
      }
    });

    // console.log('Schedule was caught.');
    // console.log('response: ')
    // console.log(r)
    // console.log('schedule: ')  
    // console.log(this.scheduleInfo)

    // console.log('dayNavs: ')
    // console.log(this.daysNavs)

    // console.log('allDays: ')
    // console.log(this.allDays)
    }
    xhr.send();
  }


  getParishId(): string {
    return this.parishId;
  }

  private getWeekDay(date: string) : string {
    let dateTS = Date.parse(date);
    let days = ['Нд', 'Пн', 'Ат', 'Ср', 'Чц', 'Пт', 'Сб'];
    
    return days[new Date(dateTS).getDay()];
  }

  private getTodayDay() : Date {
    let today = new Date()

    return today
  }

  private getWeekName(index: any) : string {
    if (index == 7) {index = 0}
    return ['Нд', 'Пн', 'Ат', 'Ср', 'Чц', 'Пт', 'Сб'][index];
  }

  private dayInDaysExists(days: any) : any {
    let found = this.scheduleInfo.find((el) => days == el.days);
    if (found === undefined) {return false} else {return true};
  }

  private toggleNav = (event: Event) => {
    let btn = (event.target) as HTMLElement
    if (btn.tagName == 'SPAN') {btn = btn.parentElement}

    let nav = btn.parentElement
    nav.querySelectorAll('.daysNavLink').forEach(el => { el.classList.remove('active'); el.ariaSelected = 'false'; })
    btn.classList.toggle('active')
    btn.ariaSelected = 'true'

    let tab = nav.parentElement.querySelector('#v-pills-tabContent')
    tab.querySelectorAll('.tab-pane').forEach(el => { el.classList.remove('show'); el.classList.remove('active'); })
    tab.querySelector(btn.dataset.bsTarget).classList.toggle('show')
    tab.querySelector(btn.dataset.bsTarget).classList.toggle('active')
  }

  private getColorScheme() : any {
    let xhr = new XMLHttpRequest();
    let url = 'https://content.imsha.by/api/schedule-page?locale=be&populate[0]=theme';
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Authorization', 'Bearer f47d0be041da384c077ed5e2c6adee196300b159b78f0b3c720780274f5215c5d75de0028e72d6b83f4065bd336d79c5007a31d62a7191f6b412017b2387ef6a9a578cf560557a37933853598be638235a785380b768065b491bfa46b024a83ea354a30e999ff604fb6d148904bf42c4374084d0746d6f2163ee077daa05f04c');
  
    xhr.onload = () => {
    if (xhr.status != 200 || xhr.readyState != 4) {
        return;
    }
    let r = xhr.response;
    this.colorScheme = r.data.attributes.theme.data.attributes.color;
    this.colorSchemeHash = this.colorScheme.slice(1)
    }
  
    xhr.send();

  }

  render() {

  let braker = false
  let masses = ''

  return(
  <div>
    <style>
      {
        `
        * {
          --color-scheme: ${this.colorScheme};
        }

        .broadcastUrl:hover, .daysNavLink {
          color: var(--color-scheme);
        }

        .daysNavLink.active, .daysNavLink:hover {
          background-color: var(--color-scheme) !important;
        }

        .massRorate {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='26' viewBox='0 0 14 26' fill='none'%3E%3Cpath d='M8.08221 8.62695H4.10547V22.6192H8.08221V8.62695Z' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.09375 8.62657V7.27637' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.06346 4.3457C6.06346 4.3457 5.03298 5.81102 6.06346 7.27633' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.11914 4.3457C6.11914 4.3457 7.14963 5.81102 6.11914 7.27633' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.15199 6.99707H2.70898' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.1518 4.34553L2.77344 3.80371' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.91406 4.34553L9.29243 3.80371' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.32753 6.99707H7.88477' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.05469 1.11035V2.57567' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.11914 11.3223H7.91601' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.10547 11.3223H6.31141L6.3338 11.7105C6.3338 11.925 6.50508 12.0988 6.71608 12.0988C6.9273 12.0988 7.09835 11.9248 7.09835 11.7105V11.3223' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M0.839844 22.7227H11.3335' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.3508 22.7199C12.4161 22.7199 13.2797 21.8428 13.2797 20.7608C13.2797 19.6789 12.4161 18.8018 11.3508 18.8018C10.2855 18.8018 9.42188 19.6789 9.42188 20.7608C9.42188 21.8428 10.2855 22.7199 11.3508 22.7199Z' stroke='%23${this.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        }

        .massOnline {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.9364 20.3544C24.6818 18.9492 25.0003 16.6832 25.0003 12.9972C25.0003 9.32581 24.6848 7.07302 23.9315 5.63006C23.1764 4.13164 22.281 3.65603 20.5039 3.54187C19.2907 3.45142 16.2754 3.40039 13.0031 3.40039C9.72369 3.40039 6.70711 3.4514 5.48479 3.54258C3.71762 3.6563 2.82196 4.13296 2.0603 5.63554C1.31788 7.07353 1 9.33732 1 13.0106C1 16.663 1.31942 18.9382 2.06683 20.3715C2.81858 21.8547 3.69996 22.3256 5.48218 22.4633C6.76309 22.5458 9.95039 22.6006 13.0031 22.6006C16.0489 22.6006 19.2347 22.5457 20.5039 22.4642C22.3025 22.3256 23.1837 21.854 23.9364 20.3544ZM20.3683 5.93748C21.4799 6.00894 21.686 6.11885 22.0384 6.82036C22.5514 7.7976 22.8202 9.71009 22.8202 13.011C22.8202 16.2869 22.5499 18.2099 22.0408 19.1702C21.6872 19.8739 21.4825 19.9834 20.3657 20.0695C19.1645 20.1466 16.0096 20.201 13.0048 20.201C9.99328 20.201 6.83682 20.1466 5.62402 20.0686C4.52108 19.9833 4.31341 19.8724 3.96768 19.1903C3.45508 18.2072 3.18359 16.2734 3.18359 12.9975C3.18359 9.72362 3.45364 7.80047 3.96349 6.8129C4.3146 6.12031 4.52373 6.00902 5.62409 5.93817C6.78918 5.85131 9.7774 5.80078 13.0048 5.80078C16.2253 5.80078 19.2121 5.85133 20.3683 5.93748ZM10.8183 9.40032L16.2729 13.0004L10.8183 16.6004V9.40032Z' fill='%23${this.colorSchemeHash}'/%3E%3C/svg%3E");
        }

        .circle {
          border: 2px solid var(--color-scheme);
        }
        
        `
      }
    </style>
  <div class="align-items-center">
    <div class="nav-pills nav-fill justify-content-center d-flex flex-row" id="v-pills-tab" role="tablist">

  {

    this.daysNavs.map((el, i) => {
      let aria ='false';
      let k = ++i
      if (el.active) {aria = 'true'} 
      
      return(
        <button class={`nav-link daysNavLink${el.active}${el.disabled}`} id={`v-pills-d${k}`} data-bs-toggle="pill" data-bs-target={`#v-pills-d${k}-tab`} type="button" role="tab" aria-controls={`v-pills-d${k}-tab`} aria-selected={`${aria}`} onClick={this.toggleNav}>
          <span class="daysSpan">
            {el.day}
            <br />
            {el.date}
            </span>
        </button>
      )
    })
  }

  </div>
    <div class="tab-content" id="v-pills-tabContent">

  {
    
    this.daysNavs.map((el, i) => {
    masses = '';
    let k = i
    k++
    let showActive = ''

    if (!braker) {
      braker = true
      showActive = ' show active'
    }

    if (el.disabled) {
      masses += `
      <div class="container-fluid mt-3">
        <span class="spanRow">На гэты дзень Імш няма.</span>
      </div>
        `;
    } else {
    this.scheduleInfo.find(o => o.days==el.dayNumber).massHours.map((m, n) => {
      let p = n
      p++
      let circle = 'notactual';

      if (m.needUpdate == false) {circle = 'actual'}

      let rorate = ' d-none'
      let online = ' d-none'
      if (m.rorate == true) {rorate = ''}
      if (m.online == true) {online = ''}

      let broadcastUrl = '#';
      if (m.broadcastUrl != null) {broadcastUrl = m.broadcastUrl}

      masses += `
        <div class="accordion-item" onclick="e = this.querySelector('.accordion-button'); e.ariaExpanded = !e.classList.toggle('collapsed'); (this.querySelector(e.dataset.bsTarget)).classList.toggle('show');">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${k}-${p}" aria-expanded="false" aria-controls="flush-collapse${k}-${p}"}>
            <span class="circle bg-${circle}"></span>
            <span class="massHour">${m.time}</span>
            <div class="ms-5 me-auto">
              <span class="massRorate ${rorate}"></span>
              <span class="massOnline ${online}"></span>
            </div>
          </button>
        </h2>
        <div id="flush-collapse${k}-${p}" class="accordion-collapse collapse" data-bs-parent="accordionFlush${k}">
          <div class="accordion-body d-flex flex-column gap-2 border-gray">
            <span class="langCode">Мова: ${m.langCode}</span>
            <span class="spanRow spanAddress">
              <span class="address">Адрас: ${m.address}</span>
            </span>
            <span class="spanRow spanRorate ${rorate}">
              <span class="massRorate"></span> Раратняя Імша
            </span>
            <span class="spanRow spanOnline ${online}">
              <a href="${broadcastUrl}" class="broadcastUrl spanRow">
                <span class="massOnline"></span> Імша online
              </a>
            </span>
            <span class="spanRow spanComment">
              <span class="massComment">${m.info}</span>
            </span>
          </div>
        </div>
      </div>
      `
      }) 
    }



    return(
      <div class={`tab-pane fade${showActive}${el.disabled}`} id={`v-pills-d${k}-tab`} role="tabpanel" aria-labelledby={`v-pills-d${k}`} tabindex="0">
                
      <div class="accordion accordion-flush" id={`accordionFlush${k}`} innerHTML={masses}></div>
    </div>
    )

    })
  
  }

    </div>
    </div>

  </div>
  )


  }
}
