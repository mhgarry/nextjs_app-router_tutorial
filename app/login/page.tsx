import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="md: relative mx-auto -mt-32 flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-3 md:h-3">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}