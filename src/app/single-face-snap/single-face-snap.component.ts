import { Component, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
    faceSnap!: FaceSnap
    buttonContent!: string
    
    constructor (private faceSnapService: FaceSnapsService,
                private route: ActivatedRoute) {}

    ngOnInit() {
      this.buttonContent = 'Oh Snap!'
      const id = +this.route.snapshot.params['id'];
      this.faceSnap = this.faceSnapService.getFaceSnapById(id)  
    }
    
    onClickSnap() {
      
      if(this.buttonContent === 'Oh Snap!') {
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap')
        this.buttonContent = 'Oops, un Snap!'
      }
      else {
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unSnap')
        this.buttonContent = 'Oh Snap!'}
      }
      }
