import { TestBed } from '@angular/core/testing';
import { CitiesApiService } from './cities-api.service';
describe('CitiesApiService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CitiesApiService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cities-api.service.spec.js.map