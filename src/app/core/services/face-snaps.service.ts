import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

    constructor (private http: HttpClient) {}


    getAllFaceSnaps () : Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
    }
    
    getFaceSnapById (faceSnapId: number) : Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)           
    }

    snapFaceSnapById(faceSnapId: number, snapTypes: 'snap' | 'unSnap'): Observable<FaceSnap> {
        return  this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapTypes === 'snap' ? 1 : -1)
            })),
            switchMap(updateFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updateFaceSnap))
        )
        
    }

    addNewFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
             map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
             map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
             map(previousFacesnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFacesnap => this.http.post<FaceSnap>(
                'http://localhost:3000/facesnaps',
                newFacesnap)
            )
        );
      }
        
    }
