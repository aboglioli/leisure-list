import { ElementType } from './element-type';

export interface Element {
  getId(): string;
  getMediaType(): string;
  getTitle(): string;
  getAuthor(): string;
  getDescription(): string;
  getScore(): number;
  hasImage(): boolean;
  getImageUrl(): string;
  select(): void;
  deselect(): void;
  isSelected(): boolean;
  getType(): ElementType;
}
