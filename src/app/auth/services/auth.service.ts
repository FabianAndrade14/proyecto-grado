import { Injectable } from '@angular/core';
import  auth from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import  User from 'firebase/app';

@Injectable()

export class AuthService {

  constructor(public afAuth: AngularFireAuth,) { }

  async login( email: string, password: string ){
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
  }
  register() {}

  async logout() {
    await this.afAuth.signOut();
  }

  getCurrentUser() {}

  
}
