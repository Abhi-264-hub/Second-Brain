import { Button } from "../components/Button"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/ShareIcon"

export const Dashboard=()=>{
    return <div className="flex justify-end gap-4 pr-2">
        <Button text="Share" startIcon={<ShareIcon/>} variant="Secondary"/>
        <Button text="Add Content" startIcon={<PlusIcon/>} variant="Primary"/>
    </div>

}