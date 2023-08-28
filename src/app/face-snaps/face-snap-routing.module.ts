import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NewSnapFaceComponent } from "./components/new-snap-face/new-snap-face.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";
import { AuthGuard } from "../core/guards/auth.guard";

const routes: Routes = [
    { path:'create', component: NewSnapFaceComponent, canActivate: [AuthGuard]},
    { path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard]},
    { path: '', component: FaceSnapListComponent, canActivate: [AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FaceSnapRoutingModule {}