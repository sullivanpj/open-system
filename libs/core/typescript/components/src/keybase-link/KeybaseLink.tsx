"use client";

import { BaseComponentProps } from "@open-system/design-system-components";
import clsx from "clsx";
import { Link } from "../link";

export function KeybaseLink({ className, ...props }: BaseComponentProps) {
  return (
    <Link
      className={clsx("h-[5rem] w-[5rem]", className)}
      inNewTab={true}
      href="https://keybase.io/sullivanp">
      <svg
        className="h-[5rem] w-[5rem] fill-primary opacity-100 transition-all hover:translate-y-0.5 hover:scale-110 hover:fill-secondary"
        viewBox="0 0 100 100"
        width="100px"
        height="100px">
        <g>
          <path d="M 48.867188 6.003906 C 48.429688 6.03125 47.996094 6.207031 47.652344 6.519531 C 47.414062 6.738281 44.453125 9.476562 41.578125 13.890625 C 40.988281 12.78125 39.828125 12 38.5 12 L 29.5 12 C 27.589844 12 26 13.589844 26 15.5 L 26 24.5 C 26 26.410156 27.589844 28 29.5 28 L 36.191406 28 C 36.078125 28.980469 36 29.976562 36 31 C 36 39.273438 42.726562 46 51 46 C 59.273438 46 66 39.273438 66 31 C 66 22.726562 59.273438 16 51 16 C 50.242188 16 50.082031 15.761719 50.015625 15.660156 C 49.230469 14.503906 50 10.898438 50.855469 8.738281 C 51.199219 7.875 50.902344 6.886719 50.136719 6.355469 C 49.753906 6.089844 49.304688 5.976562 48.867188 6.003906 Z M 30 16 L 38 16 L 38 20.835938 C 37.605469 21.855469 37.253906 22.90625 36.960938 24 L 30 24 Z M 33.292969 37.835938 C 18.4375 44.804688 10 60.605469 10 82 L 10 88 L 13.449219 83.402344 C 14.183594 86.027344 15.152344 88.550781 16.378906 90.921875 C 16.886719 91.902344 18.09375 92.285156 19.074219 91.777344 C 20.058594 91.265625 20.4375 90.058594 19.929688 89.078125 C 18.371094 86.066406 17.25 82.8125 16.613281 79.386719 C 19.632812 75.746094 22.945312 72.246094 26.132812 69.300781 C 25.078125 72.121094 24.367188 74.945312 24.015625 77.753906 L 23.386719 82.78125 L 27.28125 79.535156 C 27.394531 79.441406 38.875 70 52 70 C 58.4375 70 61.957031 70.597656 65.0625 71.125 C 67.722656 71.574219 70.234375 72 74 72 C 80.199219 72 83.59375 68.832031 85.074219 65.03125 C 85.46875 66.71875 85.746094 68.445312 85.886719 70.203125 C 85.957031 71.128906 86 72.058594 86 73 C 86 78.636719 84.675781 84.042969 82.0625 89.078125 C 81.554688 90.058594 81.9375 91.269531 82.917969 91.777344 C 83.210938 91.929688 83.53125 92 83.839844 92 C 84.5625 92 85.261719 91.609375 85.617188 90.921875 C 88.527344 85.3125 90 79.285156 90 73 C 90 71.953125 89.957031 70.914062 89.875 69.882812 C 88.910156 57.566406 82.253906 46.699219 72.121094 40.210938 C 72.039062 40.160156 71.957031 40.101562 71.875 40.050781 C 71.203125 39.628906 70.511719 39.230469 69.8125 38.847656 C 69.566406 38.710938 69.324219 38.570312 69.074219 38.441406 C 68.910156 38.355469 68.742188 38.28125 68.574219 38.199219 C 67.3125 41.261719 65.277344 43.921875 62.710938 45.941406 L 69.414062 52.644531 C 70.195312 53.425781 70.195312 54.691406 69.414062 55.472656 C 69.023438 55.863281 68.511719 56.058594 68 56.058594 C 67.488281 56.058594 66.976562 55.863281 66.585938 55.472656 L 64.910156 53.800781 L 61.296875 57.414062 C 60.90625 57.800781 60.394531 58 59.882812 58 C 59.371094 58 58.859375 57.804688 58.46875 57.414062 C 57.6875 56.632812 57.6875 55.367188 58.46875 54.585938 L 62.085938 50.96875 L 60 48.886719 L 57.414062 51.472656 C 57.023438 51.863281 56.511719 52.058594 56 52.058594 C 55.488281 52.058594 54.976562 51.863281 54.585938 51.472656 C 54.113281 51 53.960938 50.355469 54.058594 49.746094 C 53.0625 49.90625 52.042969 50 51 50 C 42.933594 50 36.046875 44.941406 33.292969 37.835938 Z M 41 80 C 39.34375 80 38 81.34375 38 83 C 38 84.65625 39.34375 86 41 86 C 42.65625 86 44 84.65625 44 83 C 44 81.34375 42.65625 80 41 80 Z M 63 80 C 61.34375 80 60 81.34375 60 83 C 60 84.65625 61.34375 86 63 86 C 64.65625 86 66 84.65625 66 83 C 66 81.34375 64.65625 80 63 80 Z M 63 80 " />
        </g>
      </svg>
    </Link>
  );
}
