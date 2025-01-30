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
import { DhcpPageComponent } from './dhcp-page/dhcp-page.component';
import { IpLeaseReportComponent } from './ip-lease-report/ip-lease-report.component';
import { DhcpManagementComponent } from './dhcp-management/dhcp-management.component';
import { SearchPageComponent } from './search-page/search-page.component';

import { DateWiseReportComponent } from './date-wise-report/date-wise-report.component';
import { ReportComponent } from './report/report.component';
import { InternetUsageReportComponent } from './internet-usage-report/internet-usage-report.component';
import { ReportDashboardComponent } from './report-dashboard/report-dashboard.component';
import { BackupComponent } from './backup/backup.component';
import { BackupRestoreComponent } from './backup-restore/backup-restore.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },  // This is the default route
  { path: 'network', component: NetworkPageComponent },
  { path: 'interface', component: InterfaceComponent },
  { path: 'dhcp', component: DhcpPageComponent },
  { path: 'ip-lease-report', component: IpLeaseReportComponent },
  
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
  { path: 'search-transaction', component: SearchPageComponent },
  {
    path: 'firewall-create',
    component: FirewallCreateComponent,
  },

  {
    path: 'dhcp-management',
    component: DhcpManagementComponent,
    children: [
      { path: '', redirectTo: 'dhcp', pathMatch: 'full' }, // Default route
      { path: 'dhcp', component: DhcpPageComponent },
      { path: 'ip-lease-report', component: IpLeaseReportComponent },
   
    ]
  },

    {
    path: 'report/1',
    component: InternetUsageReportComponent,
    children: [
      { path: '', redirectTo: 'date-wise', pathMatch: 'full' }, // Default route
      { path: 'date-wise', component: DateWiseReportComponent },
      { path: 'RD', component: ReportDashboardComponent},
   
    ]
  },
  { path: 'report/Date-wise Usage Report', component: DateWiseReportComponent },

{ path: 'report', component: ReportComponent },
{ path: 'backup', component: BackupComponent },
{ path: 'backup-restore', component: BackupRestoreComponent },
{path: 'report/1', component: InternetUsageReportComponent },
  { path: 'firewall-manage', component: FirewallManageComponent},
  { path: 'CreateSurfingQuotaPolicy', component: CreateSurfingQuotaPolicyComponent },
  { path: '**', redirectTo: '' },  // Fallback route
];


