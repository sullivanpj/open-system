import { useAtom, useAtomValue, useSetAtom } from "jotai/react";
import { themeAtom } from "../models/theme";

export const useTheme = () => useAtom(themeAtom);

export const useThemeValue = () => useAtomValue(themeAtom);
export const useSetTheme = () => useSetAtom(themeAtom);
