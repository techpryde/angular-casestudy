import { AngularCasestudyPage } from './app.po';

describe('angular-casestudy App', () => {
  let page: AngularCasestudyPage;

  beforeEach(() => {
    page = new AngularCasestudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
