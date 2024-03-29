import { Link } from "@open-system/core-client-components";
import { Rating } from "@open-system/core-client-form";

export interface ContentRatingProps {
  contentId: string;
  rate?: number;
  totalRate?: number;
  count?: number;
}

export function ContentRating({
  contentId,
  rate,
  totalRate = 0,
  count = 0,
  ...props
}: ContentRatingProps) {
  return (
    <div className="group flex flex-col items-center justify-center gap-1 p-5 text-center">
      <Rating
        name="rating"
        max={5}
        label={null}
        required={true}
        isVertical={true}
        placeholder={totalRate}
      />
      <div className="flex w-fit flex-row items-center gap-1 text-center">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-yellow-600"
          fill="currentColor"
          viewBox="0 0 20 20">
          <title>{`Rated ${totalRate} stars by other users`}</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <p className="text-md text-center font-body-1 text-primary">
          {totalRate}
        </p>
        <span className="mx-1 hidden h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity group-hover:block group-hover:opacity-100" />
        <Link
          variant="primary"
          className="text-md hidden font-body-1 text-primary opacity-0 transition-opacity group-hover:block group-hover:opacity-100">
          {`${count} users`}
        </Link>
      </div>
    </div>
  );
}
