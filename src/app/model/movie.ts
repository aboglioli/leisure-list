import { Element } from './element';
import { ElementType } from './element-type';
import { TMDBMovie } from './the-movie-db';

export class Movie implements Element {
  private data: TMDBMovie;
  private selected: boolean;
  private type: ElementType;

  constructor(data: TMDBMovie) {
    this.data = data;
    this.selected = false;
    this.type = ElementType.MOVIE;
  }

  setData(data: TMDBMovie) {
    this.data = data;
  }

  getId(): string {
    return String(this.data.id);
  }

  getTitle(): string {
    return this.data.original_title;
  }

  getAuthor(): string {
    if(!this.data.production_companies) {
      return '';
    }

    const companies = this.data.production_companies.map(pc => pc.name);

    return companies.join(' - ');
  }

  getDescription(): string {
    return this.data.overview;
  }

  getScore(): number {
    return this.data.vote_average;
  }

  getGenre(): string {
    if(!this.data.genres) {
      return '';
    }

    const genres = this.data.genres.map(g => g.name);

    return genres.join(', ');
  }

  getImageUrl(): string {
    return this.data.poster_path;
  }

  select(): void {
    this.selected = true;
  }

  deselect(): void {
    this.selected = false;
  }

  isSelected(): boolean {
    return this.selected;
  }

  getType(): ElementType {
    return this.type;
  }

}
