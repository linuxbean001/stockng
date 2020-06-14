import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { NgxChartistModule } from 'ngx-chartist';
import { NgxEchartsModule } from 'ngx-echarts';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

import { FullCalendarModule } from '@fullcalendar/angular';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';

import { CryptoModule } from './crypto/crypto.module';
import { EmailModule } from './email/email.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { ContactsModule } from './contacts/contacts.module';
import { UtilityModule } from './utility/utility.module';
import { UiModule } from './ui/ui.module';
import { FormModule } from './form/form.module';
import { TablesModule } from './tables/tables.module';
import { IconsModule } from './icons/icons.module';
import { ChartModule } from './chart/chart.module';
import { CalendarComponent } from './calendar/calendar.component';
import { MapsModule } from './maps/maps.module';
import { ChatComponent } from './chat/chat.component';
import { ContainerregistryComponent } from './containerregistry/containerregistry.component';
import { NamespacesComponent } from './namespaces/namespaces.component';
import { NodesComponent } from './nodes/nodes.component';
import { AdvancedSortableDirective } from './namespaces/advanced-sortable.directive';
import { StorageclassesSortableDirective } from './storageclasses/storageclasses-sortable.directive';
import { RolesSortableDirective } from './roles/roles-sortable.directive';
import { NodesSortableDirective } from './nodes/nodes-sortable.directive';
import { NodesdetailsComponent } from './nodesdetails/nodesdetails.component';
import { RolesComponent } from './roles/roles.component';
import { PersistentComponent } from './persistent/persistent.component';
import { PersistentSortableDirective } from './persistent/persistent-sortable.directive';
import { StorageclassesComponent } from './storageclasses/storageclasses.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { ReplicasetsComponent } from './replicasets/replicasets.component';
import { DevelopmentsSortableDirective } from './developments/developments-sortable.directive';
import { ReplicasetsSortableDirective } from './replicasets/replicasets-sortable.directive';
import { PodsComponent } from './pods/pods.component';
import { PodsSortableDirective } from './pods/pods-sortable.directive';
import { ReplicationComponent } from './replication/replication.component';
import { ReplicationSortableDirective } from './replication/replication-sortable.directive';
import { JobsComponent } from './jobs/jobs.component';
import { JobsSortableDirective } from './jobs/jobs-sortable.directive';
import { DaemonsetsComponent } from './daemonsets/daemonsets.component';
import { DaemonsetsSortableDirective } from './daemonsets/daemonsets-sortable.directive';
import { IngressesComponent } from './ingresses/ingresses.component';
import { IngressesSortableDirective } from './ingresses/ingresses-sortable.directive';
import { ServicesComponent } from './services/services.component';
import { ServicesSortableDirective } from './services/services-sortable.directive';
import { ServicesdetailsComponent } from './servicesdetails/servicesdetails.component';
import { ServicesdetailsSortableDirective } from './servicesdetails/servicesdetails-sortable.directive';
import { ConfigmapsComponent } from './configmaps/configmaps.component';
import { ConfigmapsSortableDirective } from './configmaps/configmaps-sortable.directive';

import { PersistentvalumeComponent } from './persistentvalume/persistentvalume.component';
import { SecretsComponent } from './secrets/secrets.component';
import { PersistentvalumeSortableDirective } from './persistentvalume/persistentvalume-sortable.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3
};

@NgModule({
  declarations: [CalendarComponent, ChatComponent, ContainerregistryComponent, NamespacesComponent, NodesComponent,AdvancedSortableDirective,NodesSortableDirective, NodesdetailsComponent,RolesSortableDirective,StorageclassesSortableDirective, RolesComponent, PersistentComponent,PersistentSortableDirective, StorageclassesComponent, DevelopmentsComponent, ReplicasetsComponent,ReplicasetsSortableDirective,DevelopmentsSortableDirective, PodsComponent,PodsSortableDirective, ReplicationComponent,ReplicationSortableDirective, JobsComponent, DaemonsetsComponent,DaemonsetsSortableDirective, IngressesComponent,IngressesSortableDirective, ServicesComponent,ServicesSortableDirective, ServicesdetailsComponent,ServicesdetailsSortableDirective, ConfigmapsComponent,ConfigmapsSortableDirective, PersistentvalumeComponent,PersistentvalumeSortableDirective, SecretsComponent,],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ChartsModule,
    NgxChartistModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    DashboardsModule,
    CryptoModule,
    EcommerceModule,
    EmailModule,
    InvoicesModule,
    ProjectsModule,
    UIModule,
    TasksModule,
    ContactsModule,
    UtilityModule,
    UiModule,
    FormModule,
    TablesModule,
    IconsModule,
    ChartModule,
    WidgetModule,
    MapsModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    PerfectScrollbarModule,
    NgbPaginationModule,
    NgbTypeaheadModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PagesModule { }
