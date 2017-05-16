import { ElementType } from './element-type';

export interface Element {
  getData(): any;
  getId(): string;
  getMediaType(): string;
  getTitle(): string;
  getAuthor(): string;
  getDescription(): string;
  getScore(): number;
  hasImage(): boolean;
  getImageUrl(): string;
  getBackdropUrl(): string;
  select(): void;
  deselect(): void;
  isSelected(): boolean;
  getType(): ElementType;
}
