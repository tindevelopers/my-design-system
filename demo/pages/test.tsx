import React from 'react';

// Test import of components
import { AdminLayoutSaaS, SaasDashboard, UserProfile } from '@tindeveloper/design-system';

const TestPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Component Import Test</h1>
      <p className="mb-4">Testing if components can be imported successfully:</p>
      
      <div className="space-y-2">
        <p className="text-green-600">✓ AdminLayoutSaaS imported: {typeof AdminLayoutSaaS}</p>
        <p className="text-green-600">✓ SaasDashboard imported: {typeof SaasDashboard}</p>
        <p className="text-green-600">✓ UserProfile imported: {typeof UserProfile}</p>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Component Types:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>AdminLayoutSaaS: {AdminLayoutSaaS?.name || 'Unknown'}</li>
          <li>SaasDashboard: {SaasDashboard?.name || 'Unknown'}</li>
          <li>UserProfile: {UserProfile?.name || 'Unknown'}</li>
        </ul>
      </div>
    </div>
  );
};

export default TestPage;
