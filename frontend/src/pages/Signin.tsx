import { LoginForm } from "@/components/login-form"
import authRepository from "@/features/auth.repository";
import useCurrentUserStore from "@/features/current-user.state";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, getLoginUser } = authRepository;
  const {user, setUser} = useCurrentUserStore();
  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    await getLoginUser().then((res) => {
      setUser({name:res.name,email:res.email});
    });
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm login={login} setEmail={setEmail} setPassword={setPassword} loginHandler={loginHandler} />
      </div>
    </div>
  )
}

export default Signin;
