import { Component, Prop, State, h } from '@stencil/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { API } from '../../services/api';
import { DaysNavigation } from '../navs/navs';

@Component({
  tag: 'imshaby-schedule',
  styleUrl: 'imshaby-schedule.css',
  shadow: true,
})

export class ImshaBySchedule {
  
  @Prop() parishId: string;
  @Prop() expanded: boolean = true;

  @State() private srv: any;
  @State() private colorStyle: any;
  @State() private navigaion: any;

  componentWillLoad() {
    this.srv = new API({parishId: this.getParishId()})
    this.createColors()

    this.navigaion = new DaysNavigation({scheduleInfo: this.srv.scheduleInfo})

  }

  private getParishId() {
    return this.parishId;
  }

  private createColors() {
    this.colorStyle = `
      <style>      
        * {
          --color-scheme: ${this.srv.colorScheme};
        }

        .broadcastUrl:hover, .daysNavLink {
          color: var(--color-scheme) !important;
        }

        .daysNavLink.active, .daysNavLink:hover {
          background-color: var(--color-scheme) !important;
        }

        .massRorate {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='26' viewBox='0 0 14 26' fill='none'%3E%3Cpath d='M8.08221 8.62695H4.10547V22.6192H8.08221V8.62695Z' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.09375 8.62657V7.27637' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.06346 4.3457C6.06346 4.3457 5.03298 5.81102 6.06346 7.27633' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.11914 4.3457C6.11914 4.3457 7.14963 5.81102 6.11914 7.27633' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.15199 6.99707H2.70898' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.1518 4.34553L2.77344 3.80371' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.91406 4.34553L9.29243 3.80371' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9.32753 6.99707H7.88477' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M6.05469 1.11035V2.57567' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M7.11914 11.3223H7.91601' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.10547 11.3223H6.31141L6.3338 11.7105C6.3338 11.925 6.50508 12.0988 6.71608 12.0988C6.9273 12.0988 7.09835 11.9248 7.09835 11.7105V11.3223' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M0.839844 22.7227H11.3335' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M11.3508 22.7199C12.4161 22.7199 13.2797 21.8428 13.2797 20.7608C13.2797 19.6789 12.4161 18.8018 11.3508 18.8018C10.2855 18.8018 9.42188 19.6789 9.42188 20.7608C9.42188 21.8428 10.2855 22.7199 11.3508 22.7199Z' stroke='%23${this.srv.colorSchemeHash}' stroke-miterlimit='10' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") !important;
        }

        .massOnline {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M23.9364 20.3544C24.6818 18.9492 25.0003 16.6832 25.0003 12.9972C25.0003 9.32581 24.6848 7.07302 23.9315 5.63006C23.1764 4.13164 22.281 3.65603 20.5039 3.54187C19.2907 3.45142 16.2754 3.40039 13.0031 3.40039C9.72369 3.40039 6.70711 3.4514 5.48479 3.54258C3.71762 3.6563 2.82196 4.13296 2.0603 5.63554C1.31788 7.07353 1 9.33732 1 13.0106C1 16.663 1.31942 18.9382 2.06683 20.3715C2.81858 21.8547 3.69996 22.3256 5.48218 22.4633C6.76309 22.5458 9.95039 22.6006 13.0031 22.6006C16.0489 22.6006 19.2347 22.5457 20.5039 22.4642C22.3025 22.3256 23.1837 21.854 23.9364 20.3544ZM20.3683 5.93748C21.4799 6.00894 21.686 6.11885 22.0384 6.82036C22.5514 7.7976 22.8202 9.71009 22.8202 13.011C22.8202 16.2869 22.5499 18.2099 22.0408 19.1702C21.6872 19.8739 21.4825 19.9834 20.3657 20.0695C19.1645 20.1466 16.0096 20.201 13.0048 20.201C9.99328 20.201 6.83682 20.1466 5.62402 20.0686C4.52108 19.9833 4.31341 19.8724 3.96768 19.1903C3.45508 18.2072 3.18359 16.2734 3.18359 12.9975C3.18359 9.72362 3.45364 7.80047 3.96349 6.8129C4.3146 6.12031 4.52373 6.00902 5.62409 5.93817C6.78918 5.85131 9.7774 5.80078 13.0048 5.80078C16.2253 5.80078 19.2121 5.85133 20.3683 5.93748ZM10.8183 9.40032L16.2729 13.0004L10.8183 16.6004V9.40032Z' fill='%23${this.srv.colorSchemeHash}'/%3E%3C/svg%3E") !important;
        }

        .circle {
          border: 2px solid var(--color-scheme) !important;
        }

      </style>
      `
  }

  render() {
    return (
      <div>
        {this.colorStyle}


      </div>
      );
  }
}
