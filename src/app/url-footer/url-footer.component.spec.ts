import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFooterComponent } from './url-footer.component';

describe('UrlFooterComponent', () => {
  let component: UrlFooterComponent;
  let fixture: ComponentFixture<UrlFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrlFooterComponent]
    });
    fixture = TestBed.createComponent(UrlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
