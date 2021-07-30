import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  public name : string = 'Ironman';
  public age  : number = 25;

  public getCapitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getName(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeName(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 45;
  }
}
