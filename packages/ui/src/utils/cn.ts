/**
 * cn — Class Name utility
 * ─────────────────────────────────────────────────────────────────────────────
 * Merges class names, filtering falsy values.
 * Lightweight alternative to clsx with no external dependency.
 * ─────────────────────────────────────────────────────────────────────────────
 */

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean | null | undefined>
  | ClassValue[];

function toVal(mix: ClassValue): string {
  let str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object" && mix !== null) {
    if (Array.isArray(mix)) {
      for (const item of mix) {
        const val = toVal(item);
        if (val) {
          if (str) str += " ";
          str += val;
        }
      }
    } else {
      for (const key in mix) {
        if (Object.prototype.hasOwnProperty.call(mix, key) && (mix as Record<string, unknown>)[key]) {
          if (str) str += " ";
          str += key;
        }
      }
    }
  }
  return str;
}

export function cn(...args: ClassValue[]): string {
  let str = "";
  for (const arg of args) {
    const val = toVal(arg);
    if (val) {
      if (str) str += " ";
      str += val;
    }
  }
  return str;
}
