import { LeisureListPage } from './app.po';

describe('leisure-list App', () => {
  let page: LeisureListPage;

  beforeEach(() => {
    page = new LeisureListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
