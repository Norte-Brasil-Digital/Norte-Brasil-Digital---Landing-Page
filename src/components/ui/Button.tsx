interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  action?: string
  children: React.ReactNode;
}

export default function Button({ className, type = 'button', children }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${className} rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
    >
      {children}
    </button>
  );
}
