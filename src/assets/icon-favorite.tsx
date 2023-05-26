const IconFavorite = ({
  width = 24,
  active = false,
}: {
  width?: number;
  active?: boolean;
}) => {
  return (
    <svg
      width={width}
      viewBox="0 0 52 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.75 13.6875C50.75 6.85375 44.9778 1.3125 37.858 1.3125C32.5368 1.3125 27.9662 4.409 26 8.82825C24.0338 4.409 19.4632 1.3125 14.1392 1.3125C7.025 1.3125 1.25 6.85375 1.25 13.6875C1.25 33.5425 26 46.6875 26 46.6875C26 46.6875 50.75 33.5425 50.75 13.6875Z"
        fill={active ? "#F15E5E" : "#f2f2f2"}
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default IconFavorite;
