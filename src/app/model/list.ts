export enum ListType {
  MOVIES, GAMES, MUSIC
}

export interface List {
  getName(): string,
  setName(name: string),
  getType(): ListType,
  addElement(element: any): boolean,
  getElements(): any[]
}

export class MoviesList implements List {
  private name: string;
  private type: ListType;
  private elements: any[];

  constructor(name: string){
    this.name = name;
    this.type = ListType.MOVIES;

    this.elements = [];
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getType(): ListType {
    return this.type;
  }

  addElement(element: any): boolean {
    const existingElement = this.elements.find(el => el === element);

    if(!existingElement) {
      this.elements.push(element);
      return true;
    }

    return false;
  }

  getElements(): any[] {
    return this.elements;
  }
}
