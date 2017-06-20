import { TestBed, inject } from '@angular/core/testing';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { NgProvideUtilities } from 'app/common/utilities';

import { ToastConfigService } from './toast-config.service';

describe('ToastConfigService', () => {
  beforeEach(() => {
    const mockToastsManager = {};

    TestBed.configureTestingModule({
      providers: [
        ToastConfigService,
        NgProvideUtilities.provideValue(ToastsManager, mockToastsManager)
      ]
    });
  });

  it('should create', inject([ToastConfigService], (service: ToastConfigService) => {
    expect(service).toBeTruthy();
  }));
});
