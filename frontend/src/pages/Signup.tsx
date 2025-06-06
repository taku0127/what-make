import { SignupForm } from "@/components/signup-form";
import authRepository from "@/features/auth.repository";
import useCurrentUserStore from "@/features/current-user.state";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp, getLoginUser } = authRepository;
  const { user, setUser} = useCurrentUserStore();
  const signUpHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(name, email, password);
    await getLoginUser().then((res) => {
      setUser({name:res.name,id:res.id});
    }).catch(err => {
      console.log(err);
    });
  }
  if(user != null) return <Navigate replace to="/"/>;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm setName={setName} setEmail={setEmail} setPassword={setPassword} signUpHandler={signUpHandler} />
      </div>
    </div>
  )
}

export default Signup;
