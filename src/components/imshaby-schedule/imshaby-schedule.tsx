import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'imshaby-schedule',
  styleUrl: 'imshaby-schedule.css',
  shadow: true,
})

export class ImshaBySchedule {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return <div>Hello, World!</div>;
  }
}
