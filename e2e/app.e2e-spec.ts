import { RouterLearnPage } from './app.po';

describe('router-learn App', () => {
  let page: RouterLearnPage;

  beforeEach(() => {
    page = new RouterLearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
