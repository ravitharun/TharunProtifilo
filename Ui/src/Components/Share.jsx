import React from "react";
import { FiShare2 } from "react-icons/fi";

function Share() {
  const handleShare = async () => {
    const shareData = {
      title: "protifilo - Ravi Tharun",
      text: "Check out my portfolio website!",
      url: "https://69316a5392bf1300080ff089--tharunprotifilo.netlify.app/",
    };
    await navigator.share(shareData);
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1 bg-green-500 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-green-600 transition-all"
    >
      <FiShare2 size={14} />
      Share
    </button>
  );
}

export default Share;
