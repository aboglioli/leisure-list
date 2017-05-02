export enum ListType {
  MOVIES, GAMES, MUSIC
}

export interface List {
  getId(): string,
  setId(id: string),
  getName(): string,
  setName(name: string),
  getType(): ListType,
  addElement(element: any): boolean,
  getElements(): any[]
}

export class MoviesList implements List {
  private id: string;
  private name: string;
  private type: ListType;
  private elements: any[];

  constructor(name: string, id?: string){
    this.name = name;
    this.type = ListType.MOVIES;

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
