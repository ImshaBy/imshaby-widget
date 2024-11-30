import { Component, h } from '@stencil/core';

@Component({
  tag: 'no-mass',
  styleUrl: 'mass.css',
  shadow: true
})

export class NoMass {

  render() {
    return (
      <div class="container-fluid mt-3">
          <span class="spanRow">На гэты дзень Імш няма.</span>
      </div>
    )
  }
}