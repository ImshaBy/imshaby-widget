import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'test-widget',
  styleUrl: 'test-widget.css',
  shadow: true,
})
export class TestWidget {

  @Prop() parishId: string;
  @State() scheduleInfo: { date: string; comment: string }[] = [];
  @State() loaded: boolean = false;

  componentWillLoad() {
    if (!this.loaded) {
      this.getScheduleFromAPI();
      this.loaded = true;
    }
  }

  getScheduleFromAPI() {
    let xhr = new XMLHttpRequest();
    let url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=' + this.getParishId();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  
    xhr.onload = () => {
    if (xhr.status != 200 || xhr.readyState != 4) {
        return;
    }
    let r = xhr.response;
    var iO = r['feed'];
    this.scheduleInfo = iO.map(a => {
      
      return {
        date: a['time_published'],
        comment: a['source'],
      };

    });

    console.log('Info loaded.');
    }
    xhr.send();
  }


  private getParishId(): string {
    return this.parishId;
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.componentWillUpdate.bind(this)}>Обновить заново</button> */}
        <p>Hello, I'm {this.getParishId()}</p>
      <table id="exported-schedule" class="table">
        <tr>
          <th>Date</th>
          <th>Comment</th>
        </tr>
      {
        this.scheduleInfo.map(el => {
          return(
            <tr>
              <td>{el.date}</td>
              <td>{el.comment}</td>
            </tr>
          )
        })
      }
      </table>
      </div>
    );
  }
}
