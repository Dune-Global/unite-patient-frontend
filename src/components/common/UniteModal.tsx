import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type UniteModalProps = Readonly<{
  children?: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  content?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}>;

export function UniteModal({
  title,
  description,
  children,
  footer,
  content,
  isOpen,
  onClose,
}: UniteModalProps) {
  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={onClose}>
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
