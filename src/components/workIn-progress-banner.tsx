import { Alert, AlertTitle } from "@/components/ui/alert";

export default function WorkInProgressBanner() {
  return (
    <div className="w-full pt-2">
      <Alert className="flex items-center justify-center space-x-2 text-center">
        <AlertTitle>🚧 Work in progress 🚧</AlertTitle>
      </Alert>
    </div>
  );
}
