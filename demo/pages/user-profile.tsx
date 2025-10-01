import React from 'react';
import { AdminLayoutSaaS, UserProfile } from '@tindeveloper/design-system';

const UserProfileDemo: React.FC = () => {
  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      href: '/saas-admin',
      icon: '🏠',
    },
    {
      id: 'users',
      label: 'Users',
      href: '/saas-admin/users',
      icon: '👥',
      badge: '12',
    },
    {
      id: 'profile',
      label: 'User Profile',
      href: '/user-profile',
      icon: '👤',
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/saas-admin/settings',
      icon: '⚙️',
    },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Profile' },
  ];

  const userInfo = {
    name: 'Musharof Chowdhury',
    email: 'musharof@company.com',
    role: 'Team Manager',
    avatar: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=MC',
  };

  const profileData = {
    userInfo: {
      name: 'Musharof Chowdhury',
      email: 'musharof@company.com',
      role: 'Team Manager',
      location: 'Arizona, United States.',
      avatar: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=MC',
      bio: 'Team Manager with expertise in project management and team leadership.',
    },
    personalInfo: {
      firstName: 'Chowdury',
      lastName: 'Musharof',
      phone: '+09 363 398 46',
      bio: 'Team Manager with expertise in project management and team leadership.',
    },
    address: {
      country: 'United States',
      city: 'Arizona, United States.',
      postalCode: 'ERT 2489',
      taxId: 'AS4568384',
    },
    socialLinks: {
      facebook: 'https://facebook.com/musharof',
      twitter: 'https://x.com/musharof',
      linkedin: 'https://linkedin.com/in/musharof',
      instagram: 'https://instagram.com/musharof',
    },
  };

  return (
    <AdminLayoutSaaS
      pageTitle="User Profile"
      navigationItems={navigationItems}
      userInfo={userInfo}
      showBreadcrumbs={true}
      breadcrumbs={breadcrumbs}
    >
      <UserProfile
        userInfo={profileData.userInfo}
        personalInfo={profileData.personalInfo}
        address={profileData.address}
        socialLinks={profileData.socialLinks}
        onEditProfile={() => console.log('Edit profile clicked')}
        onEditAddress={() => console.log('Edit address clicked')}
      />
    </AdminLayoutSaaS>
  );
};

export default UserProfileDemo;
