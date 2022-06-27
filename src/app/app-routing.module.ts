import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementComponent } from './element/element.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'element/:position', component: ElementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
