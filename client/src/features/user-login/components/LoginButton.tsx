import { Button } from "@/components/ui/button";
import UserForm from "./LoginForm";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignupForm from "./SignupForm";

const LoginButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* <UserForm /> */}
          {/* <SignupForm /> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginButton;
