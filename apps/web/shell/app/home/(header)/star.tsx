import { BaseComponentProps } from "@open-system/design-system-components";
import clsx from "clsx";

export default function Star({ className, ...props }: BaseComponentProps) {
  return (
    <svg className={clsx("absolute h-10 w-10", className)} viewBox="0 0 87 87">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.7332 26.8586L43.007 0.558105L42.2808 26.8586C42.2236 28.9325 41.7835 30.9098 41.0286 32.7226C38.5242 32.0805 36.2267 30.4939 34.7415 27.9696L30.1724 20.2035L34.433 28.1431C37.3791 33.6332 34.789 40.059 29.635 42.4056C28.5605 42.6591 27.4452 42.8073 26.3005 42.8389L0 43.5651L26.3005 44.2914C27.4786 44.3239 28.6255 44.4799 29.7288 44.7471C34.746 47.254 37.1262 53.6781 34.0794 59.0567L29.6383 66.8968L34.3839 59.2372C35.9903 56.6445 38.4541 55.0885 41.0917 54.5616C41.808 56.3321 42.2252 58.2563 42.2808 60.2717L43.007 86.5722L43.7332 60.2717C43.7894 58.2384 44.2135 56.2979 44.9416 54.5144C47.751 55.0037 50.3857 56.6483 52.0276 59.439L56.5967 67.2051L52.3361 59.2655C49.0114 53.0699 52.7372 45.6827 59.2418 44.3111C59.3985 44.3023 59.5557 44.2957 59.7136 44.2914L69.5818 44.0189L70.343 44.0126L70.0914 44.0048L86.0141 43.5651L59.7136 42.8389C58.6767 42.8103 57.6641 42.686 56.684 42.4745C51.9121 39.8471 49.716 33.6016 52.6897 28.3519L57.1308 20.5118L52.3852 28.1714C50.6584 30.9585 47.9407 32.5476 45.0815 32.9482C44.268 31.0744 43.7929 29.0189 43.7332 26.8586Z"
        fill="#fef9c3"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.7332 26.8586L43.007 0.558105L42.2808 26.8586C42.2236 28.9325 41.7835 30.9098 41.0286 32.7226C38.5242 32.0805 36.2267 30.4939 34.7415 27.9696L30.1724 20.2035L34.433 28.1431C37.3791 33.6332 34.789 40.059 29.635 42.4056C28.5605 42.6591 27.4452 42.8073 26.3005 42.8389L0 43.5651L26.3005 44.2914C27.4786 44.3239 28.6255 44.4799 29.7288 44.7471C34.746 47.254 37.1262 53.6781 34.0794 59.0567L29.6383 66.8968L34.3839 59.2372C35.9903 56.6445 38.4541 55.0885 41.0917 54.5616C41.808 56.3321 42.2252 58.2563 42.2808 60.2717L43.007 86.5722L43.7332 60.2717C43.7894 58.2384 44.2135 56.2979 44.9416 54.5144C47.751 55.0037 50.3857 56.6483 52.0276 59.439L56.5967 67.2051L52.3361 59.2655C49.0114 53.0699 52.7372 45.6827 59.2418 44.3111C59.3985 44.3023 59.5557 44.2957 59.7136 44.2914L69.5818 44.0189L70.343 44.0126L70.0914 44.0048L86.0141 43.5651L59.7136 42.8389C58.6767 42.8103 57.6641 42.686 56.684 42.4745C51.9121 39.8471 49.716 33.6016 52.6897 28.3519L57.1308 20.5118L52.3852 28.1714C50.6584 30.9585 47.9407 32.5476 45.0815 32.9482C44.268 31.0744 43.7929 29.0189 43.7332 26.8586Z"
        fill="#fef9c3"
        fillOpacity="0.2"></path>
    </svg>
  );
}