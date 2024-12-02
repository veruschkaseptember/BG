'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Dummy authentication
    const dummyCredentials = {
      email: 'dummy@email.com',
      password: 'dummy',
    };

    try {
      if (
        formData.email === dummyCredentials.email &&
        formData.password === dummyCredentials.password
      ) {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Store auth state
        localStorage.setItem('isAuthenticated', 'true');

        // Redirect to dashboard
        router.push('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="w-[400px] bg-white rounded-xl p-8 shadow-lg">
        <div className="flex justify-center mb-8">
          <Image src="/logo.svg" alt="Logo" width={160} height={32} priority />
        </div>
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#67ADB9] text-white p-3 rounded-lg hover:bg-[#5999a3] transition-colors disabled:opacity-50">
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600 text-center">
          dummy@email.com / dummy
        </div>
      </div>
    </div>
  );
}
