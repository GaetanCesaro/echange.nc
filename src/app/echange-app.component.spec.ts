import { TestBed, async } from '@angular/core/testing';
import { EchangeAppComponent } from './echange-app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EchangeAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EchangeAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'echange'`, () => {
    const fixture = TestBed.createComponent(EchangeAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('echange');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EchangeAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to echange!');
  });
});
