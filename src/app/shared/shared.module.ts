import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { GraphsComponent } from './widget/graphs/graphs.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SplinegraphComponent } from './widget/splinegraph/splinegraph.component';
import { DonutchartComponent } from './widget/donutchart/donutchart.component';
import { CardComponent } from './widget/card/card.component';
import { Card2Component } from './widget/card2/card2.component';
import { Card3Component } from './widget/card3/card3.component';
import { Card4Component } from './widget/card4/card4.component';
import { Card5Component } from './widget/card5/card5.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AccordionComponent } from '../modules/accordion/accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GraphsComponent,
    SplinegraphComponent,
    DonutchartComponent,
    CardComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    Card5Component,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    CdkAccordionModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    GraphsComponent,
    SplinegraphComponent,
    CardComponent,
    DonutchartComponent,
    Card2Component,
    Card3Component,
    Card4Component,
    AccordionComponent,
    Card5Component
  ]
})
export class SharedModule { }
