import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'start', loadChildren: () => import('./modules/start/start.module').then(m => m.StartModule) },
  { path: 'room', loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule) },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
