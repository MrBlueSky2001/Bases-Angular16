import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private _nombre: string = "IronMan";

  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }

  public get nombreEnMayusculas(): string{
    return this._nombre.toUpperCase();
  }

  public edad: number=45;

  dimeDescripcion(): string {
    return `${this._nombre} - ${this.edad}`
  }

  cambiarNombre(): void{
    let nuevoNombre: string | null = String(prompt("Dime el nuevo nombre"));
    console.log(nuevoNombre);
    this._nombre=nuevoNombre;
  }

  cambiarEdad(): void{
    let nuevaEdadSt: number | null = Number(prompt("Dime la nueva edad"));
    console.log(nuevaEdadSt);
    this.edad=nuevaEdadSt;
  }

  reset(): void{
    this._nombre="IronMan";
    this.edad=45;
  }
}
