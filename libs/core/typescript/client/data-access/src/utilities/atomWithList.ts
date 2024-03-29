import { ScopedObjectState } from "@open-system/core-shared-data-access";
import {
  UniqueIdGenerator,
  isDevelopment,
} from "@open-system/core-shared-utilities";
import { Atom, WritableAtom } from "jotai";
import { atomWithReducer, splitAtom } from "jotai/utils";

export type ListAddAction<
  TValue extends ScopedObjectState = ScopedObjectState
> = { type: "add"; item: Omit<TValue, "id"> & Partial<Pick<TValue, "id">> };

export type ListRemoveAction<
  TValue extends ScopedObjectState = ScopedObjectState
> = { type: "remove"; id: string };

export type ListResetAction<
  TValue extends ScopedObjectState = ScopedObjectState
> = {
  type: "reset";
  initialValue?: Array<Omit<TValue, "id"> & Partial<Pick<TValue, "id">>>;
};

export type ListProcessAction<
  TValue extends ScopedObjectState = ScopedObjectState
> = { type: "process"; funct: (prev: TValue[]) => TValue[] };

export type ListMapAction<
  TValue extends ScopedObjectState = ScopedObjectState
> = { type: "map"; funct: (prev: TValue, index: number) => TValue };

export type ListAction<TValue extends ScopedObjectState = ScopedObjectState> =
  | ListAddAction<TValue>
  | ListRemoveAction<TValue>
  | ListResetAction<TValue>
  | ListProcessAction<TValue>
  | ListMapAction<TValue>;

export interface Options {
  allowDuplicates?: boolean;
}

export function atomWithList<
  TValue extends ScopedObjectState = ScopedObjectState
>(
  initialValue: Array<Omit<TValue, "id"> & Partial<Pick<TValue, "id">>> = [],
  options: Options = { allowDuplicates: true }
): WritableAtom<TValue[], [ListAction<TValue>], void> {
  const returnedAtom = atomWithReducer<TValue[], ListAction<TValue>>(
    initialValue.map(
      (item: Omit<TValue, "id"> & Partial<Pick<TValue, "id">>) =>
        ({ id: UniqueIdGenerator.generate(), ...item } as TValue)
    ),
    (prev: TValue[] = [], action: ListAction<TValue>) => {
      switch (action.type) {
        case "add":
          // eslint-disable-next-line no-case-declarations
          const newItem = action.item;
          if (!newItem.id) {
            newItem.id = UniqueIdGenerator.generate();
          }

          if (
            !options.allowDuplicates &&
            prev.some((item: TValue) => item.id === newItem.id)
          ) {
            // Do not allow duplicate items to be added to the list
            return prev;
          }

          return [...prev, newItem as TValue];

        case "remove":
          return prev.filter((item: TValue) => action.id !== item.id);

        case "reset":
          return (action.initialValue ?? initialValue).map(
            (item: Omit<TValue, "id"> & Partial<Pick<TValue, "id">>) =>
              ({ id: UniqueIdGenerator.generate(), ...item } as TValue)
          );

        case "process":
          return action.funct(prev);

        case "map":
          return prev.map(action.funct);

        default:
          return prev;
      }
    }
  );
  if (isDevelopment()) {
    returnedAtom.debugPrivate = true;
  }

  return returnedAtom;
}

export function splitAtomWithList<
  TValue extends ScopedObjectState = ScopedObjectState
>(
  listAtom: WritableAtom<TValue[], [ListAction<TValue>], void>
): Atom<Atom<TValue>[]> {
  const returnedAtom = splitAtom(listAtom);
  if (isDevelopment()) {
    returnedAtom.debugPrivate = true;
  }

  return returnedAtom;
}
