import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <span className="text-white font-bold text-2xl">DS</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Design System Demo
          </h1>
          <p className="text-gray-600 mb-8">
            Explore your custom components and layouts
          </p>
          
            <div className="space-y-4">
              <Link
                href="/saas-admin"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors block text-center"
              >
                🚀 SaaS Admin Dashboard
              </Link>
              
              <Link
                href="/user-profile"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors block text-center"
              >
                👤 User Profile Page
              </Link>

              <Link
                href="/simple-admin"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md transition-colors block text-center"
              >
                🏢 Basic Admin Panel
              </Link>
            
            <div className="text-sm text-gray-500">
              <p className="mb-2">Component Features:</p>
              <ul className="text-left space-y-1">
                <li>• 🚀 SaaS Dashboard with metrics and analytics</li>
                <li>• 👤 User profile management system</li>
                <li>• 🏢 Responsive admin layouts</li>
                <li>• 📊 Data tables and charts</li>
                <li>• 🎨 Dark/light mode support</li>
                <li>• 📱 Mobile-responsive design</li>
                <li>• 🔧 Builder.io integration ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
