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
          className={`w-6 h-6 hover:fill-red-900 hover:text-white  ${
            like ? "text-white fill-red-900 " : "text-gray-900 "
          }`}
        />
      </span>
    </button>
  );
};

export default LikeButton;
