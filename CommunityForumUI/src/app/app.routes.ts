import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { ForumPostsComponent } from './features/forum-posts/forum-posts.component';
import { ForumPostingComponent } from './features/forum-posting/forum-posting.component';
import { UnapprovedPostsComponent } from './features/unapproved-posts/unapproved-posts.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { UserPostsComponent } from './features/user-posts/user-posts.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { AdminDashboardHomeComponent } from './features/admin-dashboard-home/admin-dashboard-home.component';

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
    },
    {
        path:'user-profile',
        component:UserProfileComponent
    },
    {
        path:'posts/my-posts',
        component:UserPostsComponent
    },
    {
        path:'admin',
        component:AdminDashboardHomeComponent
    },
    {
        path:'',
        component:NavbarComponent
    }
];
