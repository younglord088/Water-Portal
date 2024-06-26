/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/S7Zo1K1uUGh
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function loginComponent() {
  return (
    (<div className="flex items-center justify-center min-h-screen bg-[#0e1e40]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-center">
          <img
            alt="India Water Portal Logo"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/40",
              objectFit: "cover",
            }}
            width="200" />
        </div>
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="username@gmail.com" type="email" />
          </div>
          <div>
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <div className="flex justify-end">
            <Link className="text-sm" href="#">
              Forgot Password?
            </Link>
          </div>
          <Button className="w-full">Sign in</Button>
        </form>
        <p className="text-center">or continue with</p>
        <div className="flex justify-center space-x-4">
          <Button className="flex items-center px-4 py-2 space-x-2" variant="outline">
            <ChromeIcon className="w-4 h-4" />
            <span className="sr-only">Google</span>
          </Button>
          <Button className="flex items-center px-4 py-2 space-x-2" variant="outline">
            <AppleIcon className="w-4 h-4" />
            <span className="sr-only">Apple</span>
          </Button>
          <Button className="flex items-center px-4 py-2 space-x-2" variant="outline">
            <FacebookIcon className="w-4 h-4" />
            <span className="sr-only">Facebook</span>
          </Button>
        </div>
        <p className="text-center text-sm">
          Don't have an account yet?
          <Link className="text-blue-600" href="#">
            Register for free
          </Link>
        </p>
      </div>
    </div>)
  );
}

function AppleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>)
  );
}


function ChromeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>)
  );
}


function FacebookIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>)
  );
}
