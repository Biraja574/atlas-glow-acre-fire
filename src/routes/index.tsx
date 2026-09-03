import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { useLab } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    void useLab.persist.rehydrate();
  }, []);
  return <AppShell />;
}
