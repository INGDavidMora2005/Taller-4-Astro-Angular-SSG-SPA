import { TestBed } from '@angular/core/testing';
import { CustomersService } from './customers.service';
import { CUSTOMERS } from '../../data/customers.interface';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersService);
  });

  describe('Creación del servicio', () => {

    it('debería crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllCustomers debería retornar un observable con los clientes', (done) => {
      service.getAllCustomers().subscribe(customers => {
        expect(customers).toEqual(CUSTOMERS);
        expect(customers.length).toBe(CUSTOMERS.length);
        done();
      });
    });

  });

});