function SearchButton({ id, label, isActive, onClick }) {
  const colorClasses = isActive
    ? "bg-green-500 hover:bg-green-600"
    : "bg-gray-200 hover:bg-gray-400";

  return (
    <button
      id={id}
      className={`w-48 h-10 text-sm text-black rounded-md ${colorClasses} px-4`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default SearchButton;
