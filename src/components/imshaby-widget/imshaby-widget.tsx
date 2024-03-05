import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'imshaby-widget',
  styleUrl: 'imshaby-widget.css',
  shadow: true
})
export class ImshabyWidget {

  @Prop() parishId: string;
  @State() colorScheme: string;
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
    this.getScheduleFromAPI();
    this.getColorScheme();
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
    }
  
    xhr.send();

  }

  render() {

  let braker = false
  let masses = ''

  return(
  <div>
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
          <div class="accordion-body d-flex flex-column gap-2">
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
