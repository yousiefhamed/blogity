"use client";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="bg-purple-100 w-full flex justify-between items-start gap-1 flex-wrap p-2 rounded-tl-md rounded-tr-md border border-gray-400">
      <div className="w-full flex justify-start items-center gap-1 flex-wrap ">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Heading 2"
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={
            editor.isActive("heading", { level: 3 })
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Heading 3"
        >
          <Heading3 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 4 }).run();
          }}
          className={
            editor.isActive("heading", { level: 4 })
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Heading 4"
        >
          <Heading4 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 5 }).run();
          }}
          className={
            editor.isActive("heading", { level: 5 })
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Heading 5"
        >
          <Heading5 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 6 }).run();
          }}
          className={
            editor.isActive("heading", { level: 6 })
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
        >
          <Heading6 className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Ordered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Blockquote"
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Code"
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "text-yellow-500 bg-purple-800 rounded-md p-1 transition-all"
              : "text-purple-800 p-1 rounded-md transition-all"
          }
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
