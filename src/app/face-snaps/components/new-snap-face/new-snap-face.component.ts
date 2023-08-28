import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { FaceSnap } from '../../../core/models/face-snap.model';
import { Observable, map } from 'rxjs';
import { FaceSnapsService } from '../../../core/services/face-snaps.service'
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-snap-face',
  templateUrl: './new-snap-face.component.html',
  styleUrls: ['./new-snap-face.component.scss']
})
export class NewSnapFaceComponent implements OnInit {
    snapForm!: FormGroup
    faceSnapPreview$!: Observable<FaceSnap>
    ValidUrl!: RegExp

    constructor(private formBuilder: FormBuilder, 
                private faceSnapService: FaceSnapsService,
                private route: Router) {}

    ngOnInit(): void {
        this.ValidUrl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/
        this.snapForm = this.formBuilder.group(
        {
          title : [null, [Validators.required]],
          description : [null, [Validators.required]],
          imageUrl : [null, [Validators.required, Validators.pattern(this.ValidUrl)]],
          location : [null]
        },
        {
          updateOn: 'blur'
        })
        this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
          map(formValue => ({
              ...formValue,
              createdDate: new Date(),
              snaps: 0,
              id: 0
          }))
      )
    }
    onSubmitForm() {
      this.faceSnapService.addNewFaceSnap(this.snapForm.value).pipe(
        tap(() => this.route.navigateByUrl('/facesnaps'))
      ).subscribe()
      
  }
    
}
