import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactTypesComponent } from './contact-types/contact-types.component';
import { AddEditComponent } from './contact-types/add-edit.component';
import { CollateralsComponent } from './collaterals/collaterals.component';
import { AssociationsComponent } from './associations/associations.component';
import { EdcusersComponent } from './edcusers/edcusers.component';
import { AddUserComponent } from './edcusers/add-user/add-user.component';
import { EditUserComponent } from './edcusers/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'administration/contact-types', component: ContactTypesComponent },
  { path: 'administration/contact-types/add', component: AddEditComponent },
  { path: 'administration/contact-types/edit/:id', component: AddEditComponent },
  { path: 'administration/collaterals', component: CollateralsComponent },
  { path: 'administration/associations', component: AssociationsComponent },
  { path: 'administration/edc-users', component: EdcusersComponent },
  { path: 'administration/edc-users/add', component: AddUserComponent },
  { path: 'administration/edc-users/edit/:id', component: EditUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdministrationRoutingModule {
}
