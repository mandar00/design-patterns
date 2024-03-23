import { forwardRef } from "react";

//  refs are not porps and need to be imported separately
const CustomInput = (props, ref) => {
  return <input {...props} ref={ref} className="text-input" />;
};

export const Input = forwardRef(CustomInput);