'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeOffIcon, GithubIcon, TwitterIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { FormInput } from './FormInput';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const result = await signIn("credentials",{
      redirect: false,
      username,
      password
    })

    if (result?.error) {
      console.error('Sign-in failed:', result.error);
    } else {
      console.log('Sign-in successful:', result);
      router.push("/admin/dashboard");
    }

    console.log('Form submitted', { username, password, rememberMe });
  };

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
      <div className="m-auto w-full max-w-md px-4 py-8 sm:px-0">
        <div className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-gray-500">Sign in to your account to continue</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Username"
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOffIcon className="h-4 w-4" aria-hidden="true" /> : <EyeIcon className="h-4 w-4" aria-hidden="true" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>
          {/* <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
                <div className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Sign in with Google</span>
              </button>
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
                <TwitterIcon className="h-5 w-5 text-[#1DA1F2]" aria-hidden="true" />
                <span className="sr-only">Sign in with Twitter</span>
              </button>
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0">
                <GithubIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Sign in with GitHub</span>
              </button>
            </div>
          </div> */}
          <p className="mt-8 text-center text-sm text-gray-500 hidden">
            Not a member?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign up now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}