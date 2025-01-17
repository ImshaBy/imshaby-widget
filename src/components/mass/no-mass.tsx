import { Component, h, Fragment } from '@stencil/core'

@Component({
  tag: 'no-mass',
  styleUrl: 'mass.css',
  shadow: false
})

export class NoMass {

  render() {
    return (<>

      <div class="container-fluid mt-3">
          <span class="spanRow">На гэты дзень Імшаў няма.</span>
      </div>

    </>)
  }
}