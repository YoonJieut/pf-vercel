import { useState } from "react";

const TipComp = ({
  children,
  message,
}: {
  children: React.ReactNode;
  message: string;
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-0 flex flex-col items-center mb-6 group-hover:flex">
          <span className="relative z-10 p-2 text-xs leading-none text-slate-300 whitespace-no-wrap bg-main-1 shadow-lg rounded-md">
            {message}
          </span>
          <div className="w-3 h-3 -mt-2 rotate-45 bg-main-1"></div>
        </div>
      )}
    </div>
  );
};

export default TipComp;
