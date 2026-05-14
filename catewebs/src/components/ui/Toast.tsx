import { cn } from "@/utils";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  onClose?: () => void;
}

export const Toast = ({ message, type = "info", onClose }: ToastProps) => {
  const colors = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  };

  return (
    <div className={cn("p-4 rounded-md", colors[type])}>
      <p>{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="mt-2 text-sm underline"
        >
          Close
        </button>
      )}
    </div>
  );
};
