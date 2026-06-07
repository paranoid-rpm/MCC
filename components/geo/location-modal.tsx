"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CityAutocompleteMock } from "@/components/geo/city-autocomplete-mock";
import type { GeoLocation } from "@/lib/geo";

export function LocationModal({
  open,
  onOpenChange,
  onSelect
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (location: GeoLocation) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/62 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(640px,calc(100%-32px))] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cream/12 bg-[#0b0f0c] p-6 text-cream shadow-[0_28px_100px_rgba(0,0,0,.5)]">
          <div className="flex items-start justify-between gap-5">
            <div>
              <Dialog.Title className="font-serif text-3xl text-cream">
                Выберите город
              </Dialog.Title>
              <Dialog.Description className="mt-2 text-sm leading-6 text-cream/62">
                Можно выбрать город вручную. Точный адрес заводчика публично не показывается.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Закрыть">
                <X size={18} />
              </Button>
            </Dialog.Close>
          </div>
          <div className="mt-5">
            <CityAutocompleteMock
              onSelect={(location) => {
                onSelect(location);
                onOpenChange(false);
              }}
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
