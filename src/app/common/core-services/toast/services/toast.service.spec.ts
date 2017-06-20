import { TestBed, inject } from '@angular/core/testing';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { NgProvideUtilities } from 'app/common/utilities';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => {
    const mockToastsManager = {};

    TestBed.configureTestingModule({
      providers: [
        ToastService,
        NgProvideUtilities.provideValue(ToastsManager, mockToastsManager)
      ]
    });
  });

  it('should create', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});
