import { ReactElement } from "react"

export function SideBarItem({text,Icon}:{
    text:string,
    Icon:ReactElement
}){
    return <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-cyan-100 rounded max-w-48 pl-4 transition-all duration-150">
        <div className="pr-2">
            {Icon}
        </div>
        <div>
         {text}
        </div>
    </div>
}