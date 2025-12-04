// src/components/GitCloneModal.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner"; // если используешь sonner
import Button from "@/components/ui/button/Button";
import { Title } from "@/components/ui/text/Title";
import Input from "@/components/ui/input/Input";
import { MdOutlineContentCopy } from "react-icons/md";
import { useTranslations } from "next-intl";

interface GitCloneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GitCloneModal = ({ isOpen, onClose }: GitCloneModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

    const t = useTranslations("Modal");
  

  const cloneCommand = `https://github.com/AsimMahmudov/next-structure.git`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cloneCommand).then(() => {
      toast.success("Скопировано!");
    });
  };

  // Закрытие по Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      if (inputRef.current) inputRef.current.select();
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Закрытие по клику вне модалки
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-[#181818] rounded-lg shadow-lg border border-[#3f3f3f] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#3f3f3f]">
          <Title className="text-white">{t("title")}</Title>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Закрыть"
          >
            <IoClose size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="relative">
            <Input
              ref={inputRef}
              type="text"
              readOnly
              value={cloneCommand}
              className="text-[14px]"
            />
            <button
              onClick={copyToClipboard}
              className="absolute right-2 top-1/2 transform -translate-y-1/2  "
            >
              <MdOutlineContentCopy />
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            {t("text")}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-4 py-3   border-t border-[#3f3f3f]">
          <Button onClick={onClose} className=" bg-[#9900ff]">
             {t("btn")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GitCloneModal;