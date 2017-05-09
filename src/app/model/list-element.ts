export enum ElementType {
  MOVIE, GAME, MUSIC
}

export interface Element {
  getId(): string,
  getTitle(): string,
  getAuthor(): string,
  getDescription(): string,
  getScore(): number,
  getImageUrl(): string,
  select(): void,
  deselect(): void,
  isSelected(): boolean,
  getType(): ElementType
}
