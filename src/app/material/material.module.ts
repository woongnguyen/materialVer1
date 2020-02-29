import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }
