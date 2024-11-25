import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });
  it('add two numbers', () => {
    expect(fixture.somar(1, 4)).toBe(5);
  });
});
