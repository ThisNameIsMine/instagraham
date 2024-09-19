"use client";
import React from "react";
import { modalState } from "../../atom/modalAtom";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Image from "next/image";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);

  function addImageToPost(event) {
    const reader = new FileReader();
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  }

  return (
    <div>
      {open && (
        <Modal
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white rounded-md shadow-md border-2 "
          isOpen={open}
          onRequestClose={() => {
            setOpen(false);
            setSelectedFile(null);
          }}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {selectedFile ? (
              <img
                onClick={() => setSelectedFile(null)}
                src={selectedFile}
                alt="yo"
                className="w-full max-h-[250px] object-scale-down cursor-pointer"
              />
            ) : (
              <CameraIcon
                onClick={() => {
                  filePickerRef.current.click();
                }}
                className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500 hover:scale-110"
              />
            )}

            <input
              type="file"
              hidden
              ref={filePickerRef}
              onChange={addImageToPost}
            />
            <input
              type="text"
              placeholder="Please enter your caption..."
              maxLength="150"
              className="m-4 border-none text-center w-full focus:ring-0"
            />
            <button
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
              disabled
            >
              Upload post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
