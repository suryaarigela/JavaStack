import { CARESPage } from './app.po';

describe('cares App', () => {
  let page: CARESPage;

  beforeEach(() => {
    page = new CARESPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
