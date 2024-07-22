import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ForumPostsComponent } from './features/forum-posts/forum-posts.component';
import { ForumPostingComponent } from './features/forum-posting/forum-posting.component';
import { UnapprovedPostsComponent } from './features/unapproved-posts/unapproved-posts.component';

export const routes: Routes = [
    {
        path:'user/login',
        component: LoginComponent
    },
    {
        path:'user/login/register',
        component: RegisterComponent
    },
    {
        path:'forum/posts',
        component:ForumPostsComponent
    },
    {
        path:'forum/posts/add/new',
        component:ForumPostingComponent
    },
    {
        path:'admin/unapproved-posts',
        component:UnapprovedPostsComponent
    }
];
