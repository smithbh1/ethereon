import { Routes } from '@angular/router';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Routes = [
    {path: 'chat', component: ChatViewComponent},
    { path: 'login', component: LoginComponent },
    {path: 'dashboard', component: DashboardComponent},
];
