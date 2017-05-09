export enum ElementType {
  MOVIE, GAME, MUSIC
}

export interface Element {
  getId(): string;
  getName(): string;
  getAuthor(): string;
  getDescription(): string;
  getScore(): string;
  getImageUrl(): string;
  getType(): ElementType;
}

export class Movie implements Element {
  private data: any;
  private type: ElementType;

  constructor(data: any) {
    this.data = data;
    this.type = ElementType.MOVIE;
  }

  getId(): string {
    return '123';
  }

  getName(): string {
    return '123';
  }

  getAuthor(): string {
    return '123';
  }

  getDescription(): string {
    return '123';
  }

  getScore(): string {
    return '123';
  }

  getImageUrl(): string {
    return '123';
  }

  getType(): ElementType {
    return this.type;
  }

}
