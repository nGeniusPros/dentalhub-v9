import { MenuItem } from '../../types';

export const adminMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    path: '/admin-dashboard',
    group: 'Main'
  },
  {
    id: '2',
    label: 'AI Consultant',
    icon: 'Brain',
    path: '/admin-dashboard/ai-consultant',
    group: 'Main'
  },
  {
    id: '3',
    label: 'Patients',
    icon: 'Users2',
    path: '/admin-dashboard/patients',
    group: 'Clinical'
  },
  {
    id: '4',
    label: 'Insurance & A/R',
    icon: 'FileText',
    path: '/admin-dashboard/insurance',
    group: 'Main'
  },
  {
    id: '5',
    label: 'Staff',
    icon: 'UserCog',
    path: '/admin-dashboard/staff',
    group: 'Management'
  },
  {
    id: '6',
    label: 'HR',
    icon: 'Users2',
    path: '/admin-dashboard/hr',
    group: 'Management'
  },
  {
    id: '7',
    label: 'Membership Plans',
    icon: 'Crown',
    path: '/admin-dashboard/membership-plans',
    group: 'Main'
  },
  {
    id: '8',
    label: 'SMS Campaigns',
    icon: 'MessageSquare',
    path: '/admin-dashboard/sms-campaigns',
    group: 'Marketing'
  },
  {
    id: '9',
    label: 'Email Campaigns',
    icon: 'Mail',
    path: '/admin-dashboard/email-campaigns',
    group: 'Marketing'
  },
  {
    id: '10',
    label: 'Voice Agent',
    icon: 'Phone',
    path: '/admin-dashboard/voice-campaigns',
    group: 'Marketing'
  },
  {
    id: '11',
    label: 'Social Media',
    icon: 'Share',
    path: '/admin-dashboard/social-media',
    group: 'Marketing'
  },
  {
    id: '12',
    label: 'Reputation',
    icon: 'Star',
    path: '/admin-dashboard/reputation',
    group: 'Marketing'
  },
  {
    id: '13',
    label: 'Membership',
    icon: 'Crown',
    path: '/admin-dashboard/membership',
    group: 'Main'
  },
  {
    id: '14',
    label: 'Learning Center',
    icon: 'GraduationCap',
    path: '/admin-dashboard/learning',
    group: 'Resources'
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: 'Files',
    path: '/admin-dashboard/resources',
    group: 'Resources'
  },
  {
    id: '15',
    label: 'Contact Manager',
    icon: 'Building2',
    path: '/admin-dashboard/contact-manager',
    group: 'System'
  },
  {
    id: '16',
    label: 'Marketplace',
    icon: 'Store',
    path: '/admin-dashboard/marketplace',
    group: 'System'
  },
  {
    id: '17',
    label: 'Password Manager',
    icon: 'Key',
    path: '/admin-dashboard/settings/passwords',
    group: 'System'
  },
  {
    id: '18',
    label: 'Settings',
    icon: 'Cog',
    path: '/admin-dashboard/settings/general',
    group: 'System'
  }
];

export const patientMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Overview',
    icon: 'LayoutDashboard',
    path: '/patient-dashboard',
    group: 'Main'
  },
  {
    id: '2',
    label: 'Account Balance',
    icon: 'DollarSign',
    path: '/patient-dashboard/balance',
    group: 'Financial'
  },
  {
    id: '3',
    label: 'Appointments',
    icon: 'Calendar',
    path: '/patient-dashboard/appointments',
    group: 'Clinical'
  },
  {
    id: '4',
    label: 'Pending Treatment',
    icon: 'Stethoscope',
    path: '/patient-dashboard/treatments',
    group: 'Clinical'
  },
  {
    id: '5',
    label: 'Family Members',
    icon: 'Users',
    path: '/patient-dashboard/family',
    group: 'Clinical'
  },
  {
    id: '6',
    label: 'Documents',
    icon: 'FileText',
    path: '/patient-dashboard/documents',
    group: 'Records'
  },
  {
    id: '7',
    label: 'Resources',
    icon: 'BookOpen',
    path: '/patient-dashboard/resources',
    group: 'Support'
  },
  {
    id: '8',
    label: 'Account Settings',
    icon: 'Settings',
    path: '/patient-dashboard/settings',
    group: 'Account'
  }
];

export const staffMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    icon: 'LayoutDashboard',
    path: '/staff-dashboard',
    group: 'Main'
  },
  {
    id: '2',
    label: 'Appointments',
    icon: 'Calendar',
    path: '/staff-dashboard/appointments',
    group: 'Main'
  },
  {
    id: '3',
    label: 'Patients',
    icon: 'Users2',
    path: '/staff-dashboard/patients',
    group: 'Clinical'
  },
  {
    id: '4',
    label: 'Schedule',
    icon: 'CalendarCheck',
    path: '/staff-dashboard/schedule',
    group: 'Clinical'
  },
  {
    id: '5',
    label: 'Messages',
    icon: 'MessageSquare',
    path: '/staff-dashboard/messages',
    group: 'Communication'
  },
  {
    id: '6',
    label: 'Settings',
    icon: 'Settings',
    path: '/staff-dashboard/settings',
    group: 'System'
  }
];