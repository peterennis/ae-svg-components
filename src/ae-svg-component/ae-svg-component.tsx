import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'ae-svg-component',
  styleUrl: 'ae-svg-component.css',
  shadow: true
})
export class AeSvgComponent {

  @Prop() aeid: string;
  @Prop() wide: string;
  @Prop() url: string;

  /**
   * The component is about to load and has not rendered yet.
   * This is the best place to make any data updates
   * before the first render.
   * componentWillLoad will only be called once.
   */
  componentWillLoad() {
    console.log('Component ae-svg-component is about to be rendered');
    console.log('this.id=' + this.aeid);

    //let theClass = document.querySelector("#aesvg");
    //theClass.classList.remove("#ae2");
  }

  render() {
    return (
      <div>
        <img id={this.aeid} class="aesvg" src={this.url} width={this.wide} />
      </div>
    );
  }
}


//      <div>
//        <object type="image/svg+xml" data="{{url}}"></object>
//      </div>

//      <div innerHTML={`
//        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512">
//          <path fill={this.aered} d="M173.887 128.991c-84.52.25-156.47 64.57-167.325 128.075l32.295-.29c21.31-63.18 89.715-108.69 158.555-96.485 34.37 8.36 34.64 33.805 35.35 61.86-20.5.39-41.66-2.1-60.58-.425-53.395 8.195-88.7 26.17-89.65 81.53 1.35 42.74 33.135 75.18 71.795 75.715 43.525-.225 73.925-19.295 98.96-48.52l9-160.15c-23.115-34.2-43.65-41.695-88.395-41.305zm56.375 123.535c.255 19.08 2.04 38.055 8.105 54.995-28.725 22.835-74.53 48.92-105.805 23.075-14.33-15.705-15.76-42.19-1.95-56.785 27.885-27.655 66.815-20.205 99.65-21.28zm-223.76 4.455c1.625 123.46 91.735 243.64 243.215 248.67 123.525 4.105 257.06-98.645 256.245-254.065l-.07.03c-22.95 145.395-165.385 219.985-255.21 219.66-119.58-.265-211.72-93.845-211.72-214.52z"/>
//          <path fill={this.aegreen} d="M253.337 7.756c-114.07.06-246.76 92.475-246.775 249.31 32.5-146.995 125.02-208.175 243.65-216.43 128.355 4.245 220.595 118.22 225.085 211.905l30.665-.95C504.257 115.681 391.017 7.686 253.337 7.756zm88.44 121.05c-32.05 1.375-58.165 16.2-79.5 40.035l-9.44 161.16c27.58 28.475 66.865 43.985 101.325 44.215 78.915.005 138.355-57.405 151.73-122.595l-30.545.835c-17.74 64.255-71.275 91.645-121.96 94.2-48.985-1.84-81.805-32.435-79.855-95.45l161.48.85c.18-32.66-6.095-70.775-24.38-94.3-15.77-19.225-38.64-28.95-68.855-28.95zm.93 30.16c39.06 1.83 55.17 27.445 59.23 61.775H276.272c5.85-36.5 32.215-61.255 66.435-61.775z"/>
//        </svg>`}>
//      </div>
