import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ObatView from '../views/ObatView.vue';
import DashboardView from '../views/DashboardView.vue';
import ObatList from '../components/ObatList.vue';
import ObatForm from '../components/ObatForm.vue';
import ObatTable from '@/components/ObatTable.vue'; // Tambahkan impor untuk ObatTable di sini
import EditObat from '@/components/EditObat.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/obat',
    name: 'obat',
    component: ObatView,
    children: [
      {
        path: '',
        name: 'obat-list',
        component: ObatList
      },
      {
        path: 'add',
        name: 'obat-add',
        component: ObatForm
      },
      {
        path: '/obat/edit/:id',
        name: 'obat-edit',
        component: EditObat
      },
      {
        path: 'table',
        name: 'obat-table', // Beri nama route untuk ObatTable
        component: ObatTable // Tambahkan komponen ObatTable di sini
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import('../views/OverviewView.vue')
      },
      {
        path: 'stats',
        name: 'stats',
        component: () => import('../views/StatisticsView.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
