import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap
    
    constructor (private router: Router) {}

    onViewMore () : void {
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
    }  
      }