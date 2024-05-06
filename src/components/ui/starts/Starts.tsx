import { StarIcon } from "lucide-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Starts = () => {
  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((rating) => (
        <StarIcon
          key={rating}
          className={classNames(
            4 > rating ? "text-yellow-600" : "text-black",
            "h-4 w-4 flex-shrink-0"
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default Starts;
