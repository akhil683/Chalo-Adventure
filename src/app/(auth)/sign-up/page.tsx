import AuthPage from "../auth";
import { AuthForm } from "../AuthForm";

export default function SignInPage() {
  return (
    <AuthPage>
      <AuthForm mode="signup" />
    </AuthPage>
  );
}
