import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CardComponent } from './shared/widget/card/card.component';
import { Card3Component } from './shared/widget/card3/card3.component';
import { Card4Component } from './shared/widget/card4/card4.component';
import { Card5Component } from './shared/widget/card5/card5.component';
import { DonutchartComponent } from './shared/widget/donutchart/donutchart.component';
import { SplinegraphComponent } from './shared/widget/splinegraph/splinegraph.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },{
    path:'posts',
    component:PostsComponent
  },{
    path:'spline',
    component:SplinegraphComponent
  },{
    path:'donut',
    component:DonutchartComponent
  },{
    path:'card',
    component:Card5Component
  }

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
