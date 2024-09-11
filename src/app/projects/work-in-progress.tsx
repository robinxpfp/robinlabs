import {
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialog,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function WorkInProgress() {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent>
        <p>
          This page is currently under development. Please check back later.
        </p>
        <Button variant="link">
          <Link href="/about">Back</Link>
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  );
}
