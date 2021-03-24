import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firebaseAuth: AngularFireAuth) {     
  }

  async login(mail: string, pass:string){
    try{
      const resp = await this.firebaseAuth.auth.signInWithEmailAndPassword(mail, pass);
      return resp;
    }catch (error){
      console.error('Error de autenticacion al hacer login: ', error);
    }
  }

  
}

