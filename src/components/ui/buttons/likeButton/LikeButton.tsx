import { Heart } from "lucide-react";

interface PropsLikeButton {
  like: boolean;
  setLike: (value: boolean) => void;
}

const LikeButton = ({ like, setLike }: PropsLikeButton) => {
  return (
    <button onClick={() => setLike(!like)} className="">
      <span>
        <Heart
          strokeWidth={1}
          className={`w-6 h-6 border-fill text-gray-800  fill-white hover:fill-red-700 font-light ${
            like && " fill-red-700 "
          }`}
        />
      </span>
    </button>
  );
};

export default LikeButton;
