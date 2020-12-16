import { TestBed } from '@angular/core/testing';

import { HotCodePushService } from './hot-code-push.service';

describe('HotCodePushService', () => {
  let service: HotCodePushService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotCodePushService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
