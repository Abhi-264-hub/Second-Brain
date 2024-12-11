import { ReactElement } from "react";

interface Buttonstyles{
    variant:"Primary" | "Secondary",
    text:string,
    startIcon:ReactElement,
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
}
const defaultstyles="px-4 py-2 rounded-md font-light flex items-center"
const variantStyles={
    "Primary":"bg-purple-600 text-white",
    "Secondary":"bg-purple-200 text-purple-600" 
}
export const Button=({variant,text,startIcon,onClick,fullWidth, loading}:Buttonstyles) => {
    return(
    <button onClick={onClick} className={variantStyles[variant]+" "+defaultstyles +`${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45	" : ""}`} disabled={loading}>
        <div className="pr-2">
            {startIcon}
        </div>
        {text}
    </button>
    )

}