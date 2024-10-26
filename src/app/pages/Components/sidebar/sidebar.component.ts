import { Component, computed, Input, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLinkActive, RouterModule } from '@angular/router';

export type MenuItem = {
  icon: string,
  label: string,
  route?: string
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'category',
      label: 'Category',
      route: 'category'
    },
    {
      icon: 'view_list',
      label: 'Post',
      route: 'post-items'
    },
    {
      icon: 'editions',
      label: 'Editions',
      route: 'editions'
    },
    {
      icon: 'supervised_user_circle',
      label: 'Members',
      route: 'members'
    }
  ])

  sidenavCollapsed = signal(false)
  @Input() set collapsedData(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sidenavCollapsed() ? '32' : '100')
}
