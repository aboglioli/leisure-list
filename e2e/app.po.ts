import { browser, element, by } from 'protractor';

export class LeisureListPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ll-root h1')).getText();
  }
}
