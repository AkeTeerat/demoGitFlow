import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenComponent } from './authen/authen.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'authen',
        component: AuthenComponent
    }, {
        path: 'home',
        component: HomeComponent,
    }, {
        path: '**',
        redirectTo: 'dashboards',
        pathMatch: 'full'
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        onSameUrlNavigation: "reload",
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
