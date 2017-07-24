import { TestBed, inject } from '@angular/core/testing';

import { PlaygroundIndividualServiceService } from './playground-individual-service.service';

describe('PlaygroundIndividualServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaygroundIndividualServiceService]
    });
  });

  it('should be created', inject([PlaygroundIndividualServiceService], (service: PlaygroundIndividualServiceService) => {
    expect(service).toBeTruthy();
  }));
});
