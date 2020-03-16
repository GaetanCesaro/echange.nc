import { Routes } from "@angular/router";
import { Error404Component } from "./app/shared/errors/404.component";
import { HomeComponent } from './app/home/home.component';
import { AuthComponent } from './app/auth/auth.component';
import { SignUpComponent } from './app/auth';
import { AdCreateComponent } from './app/ad/ad-create/ad-create.component';
/*
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolver,
    EventListResolver,
    CreateSessionComponent
} from "./app/modules/events/index";
*/

export const appRoutes: Routes = [
    /*
    {
        path: "events/new",
        component: CreateEventComponent,
        canDeactivate: ["canDeactivateCreateEvent"]
    },
    {
        path: "events",
        component: EventsListComponent,
        resolve: { events: EventListResolver }
    },
    {
        path: "events/:id",
        component: EventDetailsComponent,
        resolve: { event: EventResolver }
    },
    {
        path: "events/sessions/new",
        component: CreateSessionComponent
    },
    */
    /*{ path: "user", loadChildren: "./modules/user/user.module#UserModule" }*/
    {
      path: "home",
      component: HomeComponent
    },
    {
      path: "auth",
      component: AuthComponent
    },
    {
      path: "sign-up",
      component: SignUpComponent
    },
    {
      path: "ad/create",
      component: AdCreateComponent
    },
    { path: "404", component: Error404Component },
    { path: "", redirectTo: "/home", pathMatch: "full" }

];
