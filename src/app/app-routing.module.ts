import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
/* Componentes importados*/
import { CursosComponent } from "./pages/cursos/cursos.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { JuegosInteractivosComponent } from "./pages/juegos-interactivos/juegos-interactivos.component";


const app_routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'juegos', component: JuegosInteractivosComponent},
    { path: 'cursos', component: CursosComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }