import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title: string = 'Bases';
  private _counter: number = 10;
  
  public get counter(): number {
    return this._counter;
  }
  public set counter(value: number) {
    this._counter = value;
  }

  incrementar (): void{
    this.counter = this.counter+1;
  }

  decrementar (): void{
    this.counter = this.counter-1;
  }

  reset (): void{
    this.counter = 10;
  }

  get dameTitle (): string{
    return this.title;
  }
}
