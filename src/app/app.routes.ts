import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterfaceComponent } from './interface/interface.component';
import { FirewallCreateComponent } from './firewall-create/firewall-create.component';
import { FirewallManageComponent } from './firewall-manage/firewall-manage.component';
import { NetworkPageComponent } from './network-page/network-page.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { DnsComponent } from './dns/dns.component';
import { GatewayComponent } from './gateway/gateway.component';
import { FirewallComponent } from './firewall/firewall.component';
import { CreateSurfingQuotaPolicyComponent } from './create-surfing-quota-policy/create-surfing-quota-policy.component';
import { PolicyComponent } from './policy/policy.component';
import { ManageSurfingQuotaPolicyComponent } from './manage-surfing-quota-policy/manage-surfing-quota-policy.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },  // This is the default route
  { path: 'network', component: NetworkPageComponent },
  { path: 'interface', component: InterfaceComponent },
  {
    path: 'list-of-items',
    component: ListOfItemsComponent,
    children: [
      { path: '', redirectTo: 'interface', pathMatch: 'full' }, // Default route
      { path: 'interface', component: InterfaceComponent },
      { path: 'gateway', component: GatewayComponent },
      { path: 'dns', component: DnsComponent },
    ]
  },

  {
    path: 'policy',
    component: PolicyComponent,
    children: [
      { path: '', redirectTo: 'CreateSurfingQuotaPolicy', pathMatch: 'full' }, // Default route
      { path: 'CreateSurfingQuotaPolicy', component: CreateSurfingQuotaPolicyComponent },
      { path: 'ManageSurfingQuotaPolicy', component: ManageSurfingQuotaPolicyComponent },
    ]
  },
  {
    path: 'firewall',
    component: FirewallComponent,
    children: [
      { path: '', redirectTo: 'firewall-create', pathMatch: 'full' }, // Default route
      { path: 'firewall-create', component: FirewallCreateComponent },
      { path: 'firewall-manage', component: FirewallManageComponent },
      { path: 'dns', component: DnsComponent },
    ]
  },
  { path: 'dns', component: DnsComponent },
  {
    path: 'firewall-create',
    component: FirewallCreateComponent,
  },
  { path: 'firewall-manage', component: FirewallManageComponent},
  { path: 'CreateSurfingQuotaPolicy', component: CreateSurfingQuotaPolicyComponent },
  { path: '**', redirectTo: '' },  // Fallback route
];


