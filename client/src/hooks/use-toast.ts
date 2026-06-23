import { toast } from "sonner";

export interface Toast {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
}

export function useToast() {
  return {
    toast: (props: Toast) => {
      if (props.variant === "destructive") {
        toast.error(props.title || "Error", {
          description: props.description,
        });
      } else {
        toast.success(props.title || "Success", {
          description: props.description,
        });
      }
    },
  };
}
