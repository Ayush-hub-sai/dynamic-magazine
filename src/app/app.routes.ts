import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/Components/dashboard/dashboard.component';
import { CategoryComponent } from './pages/Components/category/category.component';
import { PostItemsComponent } from './pages/Components/post-items/post-items.component';
import { EditionComponent } from './pages/Components/edition/edition.component';
import { MemberComponent } from './pages/Components/member/member.component';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'post-items',
        component: PostItemsComponent
    },
    {
        path: 'editions',
        component: EditionComponent
    },
    {
        path: 'members',
        component: MemberComponent
    }
];
