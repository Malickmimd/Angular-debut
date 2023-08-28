import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { NewSnapFaceComponent } from './components/new-snap-face/new-snap-face.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapRoutingModule } from './face-snap-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewSnapFaceComponent
  ],
  imports: [
    CommonModule,
    FaceSnapRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewSnapFaceComponent
  ]
})
export class FaceSnapsModule { }
