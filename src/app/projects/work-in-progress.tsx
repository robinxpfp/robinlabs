import { AlertDialogContent, AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function WorkInProgress() {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="border-neutral-800/40 bg-neutral-800/40 text-white">
        <p>
          This page is currently under development. Please check back later.
        </p>
        <Button variant="link" className="text-white">
          <Link href="/">Back</Link>
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}
