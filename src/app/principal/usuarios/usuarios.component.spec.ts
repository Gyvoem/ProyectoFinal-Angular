import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponent } from './usuarios.component';

//aqui
import { HttpClientTestingModule} from '@angular/common/http/testing' //+++++++
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserinterceptorsService } from 'src/app/services/userinterceptors.service';


describe('UsuariosComponent', () => {
  let component: UsuariosComponent;
  let fixture: ComponentFixture<UsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosComponent ], 
      // aqui
      imports: [
        HttpClientTestingModule,
        UserserviceService,
        UserinterceptorsService
      ],
      providers:[
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
