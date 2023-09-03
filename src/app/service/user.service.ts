import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "http://localhost:9090/auth";
  role = "";

  message:string = "";
  token = "";
  public name = "";
  id:number = 0;

  constructor(private http: HttpClient){}

  register(user:User){
    return this.http.post(`${this.BASE_URL}/register`, user, {responseType: 'text'});
  }

  login(user: User){
    return this.http.post(`${this.BASE_URL}/login`, user);
  }
  
  logout(id: number){
    return this.http.put(`${this.BASE_URL}/logout/${id}`, id);
  }

  changePassword(user:User){
    return this.http.put(`${this.BASE_URL}/changepassword`,user); // remaining
  }

  removeUser(id:number){
    return this.http.delete(`${this.BASE_URL}/deletebyid/${id}`);// remaining
  }

  updateProfile(id:number, user: User){
    return this.http.put("", user); // remaining
  }

  getUserDetails(email:string){
    console.log("email : " + email);
    
    return this.http.get(`${this.BASE_URL}/user/${email}`);
  }

  setUserDetails(user:User){
    localStorage.setItem('user', JSON.stringify(user));
  }

  isLogedIn(){
    return localStorage.getItem('token') != null;
  }

  checkRole(){
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    
    if(role != null && token != null){
      return role;
    }else{
      return "";
    }
  }

  setToken(token: string) {
    alert("Userservice setToken function :" + token)
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  setRoles(roles: []){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  getRoles(){
    return localStorage.getItem('roles');
  }

  clear(){
    localStorage.clear();
  }

  setId(id:number){
    this.id = id;    
  }

  getId(){
    return this.id;
  }
}
