import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/LoginRegisterDTO.model';
import { Observable } from 'rxjs/internal/Observable';
import { jwtDecode } from 'jwt-decode';
import { TokenDataDTO } from '../models/TokenDataDTO.model';
import { decode } from 'punycode';
import { PostFormatDTO } from '../models/PostFormatDTO.model';
import { PostDTO } from '../models/PostDTO.model';
import { UserInformationDTO } from '../models/UserInfoDTO.model';
import { CommentWithUserandPostDTO } from '../models/CommentWithUserandPostDTO.model';
import { CommentWithUserDTO } from '../models/CommentWithUserDTO.model';
import { CommentDTO } from '../models/CommentDTO.model';
import { NewsDTO } from '../models/NewsDTO.model';
import { AddNewsDTO } from '../models/AddNewsDTO.model';
import { TeamsDTO } from '../models/TeamsDTO.model';
import { AddTeamsDTO } from '../models/AddTeamsDTO.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {

   }
  
  registerUsers(model:LoginDTO) : Observable<void>
  {
    return this.http.post<void>('http://localhost:5291/api/User/register-user',model);
  }

  loginUser(model:LoginDTO) : Observable<{result: string}>
  {
    return this.http.post<{result:string}>('http://localhost:5291/api/User/login',model)
  }

  getPosts():Observable<PostFormatDTO[]>
  {
    return this.http.get<PostFormatDTO[]>('http://localhost:5291/api/Post/posts')
  }

  addPost(post: PostDTO): Observable<void> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<void>(`http://localhost:5291/api/Post/post`, post, { headers });
  }
  
  unapprovedPosts():Observable<PostFormatDTO[]>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<PostFormatDTO[]>('http://localhost:5291/api/Post/unapproved-posts', { headers });
  }


  approvePost(id:number):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<void>(`http://localhost:5291/api/Post/approve/${id}`,{headers})
  }

  deletePost(id:number):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<void>(`http://localhost:5291/api/Post/delete-post/${id}`,{headers})
  }

  getUserProfile():Observable<UserInformationDTO>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<UserInformationDTO>(`http://localhost:5291/api/User/user-detail`,{headers})
  }


  getUserPosts():Observable<PostFormatDTO[]>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<PostFormatDTO[]>(`http://localhost:5291/api/Post/user-post`,{headers})
  }

  getUserComments():Observable<CommentWithUserandPostDTO[]>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<CommentWithUserandPostDTO[]>(`http://localhost:5291/api/Comment/comments-by-user`,{headers})
  }

  getAllUsers():Observable<UserInformationDTO[]>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<UserInformationDTO[]>(`http://localhost:5291/api/User`,{headers})
  }

  updateUser(model:UserInformationDTO):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.put<void>(`http://localhost:5291/api/User`,model,{headers})
  }

  getPost(id:number):Observable<PostFormatDTO>
  {
    return this.http.get<PostFormatDTO>(`http://localhost:5291/api/Post/post/${id}`)
  }

  getCommentsbyPost(id:number):Observable<CommentWithUserDTO[]>
  {
    return this.http.get<CommentWithUserDTO[]>(`http://localhost:5291/api/Comment/comments-by-post/${id}`)
  }

  addComment(commentMessage:CommentDTO,id:number):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.post<void>(`http://localhost:5291/api/Comment/${id}`,commentMessage,{headers})
  }

  deletePostByUser(id:number):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<void>(`http://localhost:5291/api/Post/post-delete/${id}`,{headers})
  }

  deleteCommentByUser(id:number):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<void>(`http://localhost:5291/api/Comment/comments-delete/${id}`,{headers})
  }

  addNews(news:AddNewsDTO):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.post<void>(`http://localhost:5291/api/News`,news,{headers})
  }

  getAllNews():Observable<NewsDTO[]>
  {
    return this.http.get<NewsDTO[]>(`http://localhost:5291/api/News`)
  }

  
  deleteNews(id:number):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.delete<void>(`http://localhost:5291/api/News/delete-news/${id}`,{headers})
  }

  addTeams(team:AddTeamsDTO):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.post<void>(`http://localhost:5291/api/Table/add-teams`,team,{headers})
  }

  getTeam(id:number):Observable<TeamsDTO>
  {
    return this.http.get<TeamsDTO>(`http://localhost:5291/api/Table/team/${id}`)
  }

  getAllTeams():Observable<TeamsDTO[]>
  {
    return this.http.get<TeamsDTO[]>(`http://localhost:5291/api/Table/all-teams`)
  }

  updateTeam(id:number,team:TeamsDTO):Observable<void>
  {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.put<void>(`http://localhost:5291/api/Table/update-points/${id}`,team,{headers})
  }

  setToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('jwtToken', token);
    }
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('jwtToken');
    }
    return null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isUser(): boolean {
    const userInfo = this.getUserInfo();
    if(userInfo?.role=="User")
      {
        return true
      }
    else{
      return false
    }
  }

  isAdmin(): boolean {
    const userInfo = this.getUserInfo();
    if(userInfo?.role=="Admin")
      {
        return true
      }
    else
    {
      return false
    }
  }
  getUserInfo(): TokenDataDTO | null{
    const token = this.getToken();
    if (token)
      {
        const decoded:any = jwtDecode(token);
        console.log(decoded)
        return{
          username:decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
          email : decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
          role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
          id:decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/serialnumber']
        };
      }
      return null;
  }

  deleteToken(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('jwtToken');
    }
  }

  logoutUser():void{
    this.deleteToken();
  }

}

