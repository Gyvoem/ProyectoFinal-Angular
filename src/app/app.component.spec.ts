import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { ErrorComponent } from './principal/error/error.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { NavbarComponent } from './principal/navbar/navbar.component';
import { NotfoundComponent } from './principal/notfound/notfound.component';
import { PerfilComponent } from './principal/perfil/perfil.component';
import { UsuariosComponent } from './principal/usuarios/usuarios.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        //aqui
        MaterialModule,
        /* FormsModule,
        ReactiveFormsModule  */   
      ],
      declarations: [
        AppComponent,

        //AQUI, no afecta tampoco
        NavbarComponent,
          ContactoComponent,
          HomeComponent,
          UsuariosComponent,
          ErrorComponent,
          LoginComponent,
          PerfilComponent,
          NotfoundComponent
      
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'actividadfinal-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('actividadfinal-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('actividadfinal-angular app is running!');
  });
});
