import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Link } from "react-router-dom"

type SignupFormProps = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setName : React.Dispatch<React.SetStateAction<string>>;
  signUpHandler: (e: React.FormEvent) => Promise<void>
  } & React.ComponentProps<"div">;

export function SignupForm({
  className,
  setEmail,
  setPassword,
  setName,
  signUpHandler,
  ...props
}: SignupFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>アカウント作成</CardTitle>
          <CardDescription>
            メールアドレスとパスワードとユーザー名を入力してください
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">ユーザー名</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="お名前"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">パスワード</Label>
                </div>
                <Input id="password" type="password" required 
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" onClick={(e) => signUpHandler(e)} className="w-full">
                    アカウント作成
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link className="underline underline-offset-4" to="/signup">ログイン画面へ</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
