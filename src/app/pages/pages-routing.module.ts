import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ContainerregistryComponent } from './containerregistry/containerregistry.component';
import { NamespacesComponent } from './namespaces/namespaces.component';
import { ChangequotaComponent } from './changequota/changequota.component';
import { NamespacesuserComponent } from './namespacesuser/namespacesuser.component';
import { UsersComponent } from './users/users.component';
import { AlertsComponent } from './alerts/alerts.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesdetailsComponent } from './nodesdetails/nodesdetails.component'
import { RolesComponent } from './roles/roles.component'
import { PersistentComponent } from './persistent/persistent.component';
import { StorageclassesComponent } from './storageclasses/storageclasses.component'
import { DefaultComponent } from './dashboards/default/default.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { ReplicasetsComponent } from './replicasets/replicasets.component';
import { PodsComponent } from './pods/pods.component';
import { ReplicationComponent } from './replication/replication.component';
import { JobsComponent } from './jobs/jobs.component';
import { DaemonsetsComponent } from './daemonsets/daemonsets.component';
import { IngressesComponent } from './ingresses/ingresses.component';
import { ServicesComponent } from './services/services.component';
import { ServicesdetailsComponent } from './servicesdetails/servicesdetails.component';
import { ConfigmapsComponent } from './configmaps/configmaps.component';
import { PersistentvalumeComponent } from './persistentvalume/persistentvalume.component';
import { SecretsComponent } from './secrets/secrets.component';
import { PersistentvalumedetailsComponent } from './persistentvalumedetails/persistentvalumedetails.component';
import { BudashboardComponent } from './budashboard/budashboard.component';
import { ClusterComponent } from './cluster/cluster.component';
import { SystemdashboardComponent } from './systemdashboard/systemdashboard.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { ClusterslistComponent } from './clusterslist/clusterslist.component';
import { AuthGuard } from '../core/guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'bu/dashboard' },
  { path: 'dashboard', component: NodesdetailsComponent,canActivate: [AuthGuard]},
  { path: 'bu/dashboard', component: NodesdetailsComponent,canActivate: [AuthGuard] },
  { path: 'bu/containerregistry', component: ContainerregistryComponent },
  { path: 'bus/dashboard', component: BudashboardComponent },
  
  { path: 'cluster/namespaces', component: NamespacesComponent },
  { path: 'dashboardd', component: DefaultComponent },
  { path: 'bu/namespaces/list', component: NamespacesComponent },
  { path: 'bu/changequota', component: ChangequotaComponent },
  { path: 'bu/namespaces/user', component: NamespacesuserComponent },
  { path: 'bu/users', component: UsersComponent },
  { path: 'bu/alerts', component: AlertsComponent },
  { path: 'sa/dashboard', component: SystemdashboardComponent },
  { path: 'sa/cluster', component: ClusterComponent },
  { path: 'sa/alerts', component: AlertsComponent },
  { path: 'sa/approvals', component: ApprovalsComponent },
  { path: 'sa/users', component: UsersComponent },
  { path: 'sa/clusterslist', component: ClusterslistComponent },
  { path: 'cluster/nodes', component: NodesComponent },
  { path: 'cluster/nodes/details', component: NodesdetailsComponent },
  { path: 'cluster/roles', component: RolesComponent },
  { path: 'cluster/persistent', component: PersistentComponent },
  { path: 'cluster/storageclasses', component: StorageclassesComponent },
  { path: 'workloads/developments', component: DevelopmentsComponent },
  { path: 'workloads/replica', component: ReplicasetsComponent },
  { path: 'workloads/pods', component: PodsComponent },
  { path: 'workloads/replication', component: ReplicationComponent },
  { path: 'workloads/jobs', component: JobsComponent },
  { path: 'workloads/daemonsets', component: DaemonsetsComponent },
  { path: 'discovery/ingresses', component: IngressesComponent },
  { path: 'discovery/services', component: ServicesComponent },
  { path: 'discovery/services/details', component: ServicesdetailsComponent },
  { path: 'config/configmaps', component: ConfigmapsComponent },
  { path: 'config/persistentvalume', component: PersistentvalumeComponent },
  { path: 'config/persistentvalume/details', component: PersistentvalumedetailsComponent },
  { path: 'config/secrets', component: SecretsComponent },

  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
