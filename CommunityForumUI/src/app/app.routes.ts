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
import { HomepageComponent } from './features/homepage/homepage.component';
import { EditUserProfileComponent } from './features/edit-user-profile/edit-user-profile.component';
import { UserListsAdminComponent } from './features/user-lists-admin/user-lists-admin.component';
import { UserCommentsComponent } from './features/user-comments/user-comments.component';
import { ForumPostWithCommentsComponent } from './features/forum-post-with-comments/forum-post-with-comments.component';
import { AddNewsComponent } from './features/add-news/add-news.component';
import { ListDeleteNewsComponent } from './features/list-delete-news/list-delete-news.component';
import { AddTeamsComponent } from './features/add-teams/add-teams.component';
import { ListUpdateTeamsComponent } from './features/list-update-teams/list-update-teams.component';

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
        component:HomepageComponent
    },
    {
        path:'edit',
        component:EditUserProfileComponent
    },
    {
        path:'admin/user-lists',
        component:UserListsAdminComponent
    },
    {
        path:'my-comments',
        component:UserCommentsComponent
    },
    {
        path:'post/:id',
        component:ForumPostWithCommentsComponent
    },
    {
        path:'admin/add-news',
        component:AddNewsComponent
    },
    {
        path:'admin/list-delete-news',
        component:ListDeleteNewsComponent
    },
    {
        path: 'admin/add-teams',
        component:AddTeamsComponent
    },
    {
        path:'admin/list-teams',
        component:ListUpdateTeamsComponent
    }


];
