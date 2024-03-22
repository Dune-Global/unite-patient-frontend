import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface UniteModalProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  content?: React.ReactNode;
}

export function UniteModal({
  title,
  description,
  children,
  footer,
  content,
}: UniteModalProps) {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] border-ugray-0">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">{content}</div>
          <DialogFooter>{footer}</DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
