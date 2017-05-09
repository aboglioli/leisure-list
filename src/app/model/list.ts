import { Element, ElementType } from './list-element';

export class List {
  private id: string;
  private name: string;
  private elements: Element[];

  constructor(name: string, id?: string){
    this.name = name;

    if(id) {
      this.id = id;
    }

    this.elements = [];
  }

  getId(): string {
    return this.id;
  }

  setId(id: string) {
    this.id = id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  addElement(element: Element): boolean {
    const existingElement = this.elements.find(el => el === element);

    if(!existingElement) {
      this.elements.push(element);
      return true;
    }

    return false;
  }

  getElementById(id: string): Element {
    return this.elements.find(element => element.getId() === id);
  }

  getElements(): Element[] {
    return this.elements;
  }

  getElementsByType(type: ElementType): Elements[] {
    return this.elements.filter(element => element.getType() === type);
  }
}
