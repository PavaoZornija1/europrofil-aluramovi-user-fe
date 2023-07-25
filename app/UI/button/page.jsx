export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className} my-2 rounded-full border-2 bg-gradient-to-tl from-gray-100 to-gray-300 px-5 text-center font-bold uppercase text-black transition-all duration-150 hover:shadow-md hover:shadow-gray-600 active:translate-y-1 active:shadow-none`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
