// src/components/products/AddToCartButton.tsx
interface AddToCartButtonProps {
  onClick: () => void;
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    flex items-center justify-center gap-2
    rounded-full px-8 py-3
    bg-[#393D43] border border-gray-300
    text-[#AFD5E7] font-medium
    text-sm sm:text-base
    shadow-sm transition
    hover:bg-gray-600 hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
  "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
          fill="currentColor"
        />
        <path
          d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
          fill="currentColor"
        />
        <path
          d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Add to Cart</span>
    </button>
  );
}