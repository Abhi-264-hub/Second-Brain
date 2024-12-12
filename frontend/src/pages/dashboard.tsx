import { Button } from "../components/Button"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Card } from "../components/Card"

export const Dashboard=()=>{
    return <div>
    <div className="flex justify-end gap-4 pr-2">
        <Button text="Share" startIcon={<ShareIcon/>} variant="Secondary"/>
        <Button text="Add Content" startIcon={<PlusIcon/>} variant="Primary"/>
    </div>
    <div className="flex gap-4 flex-warp">
    <Card title="Full Stack Application" link="https://www.youtube.com/watch?v=pfZT6Opgy4o" type="youtube"/>
    <Card title="Views of Musk" link="https://x.com/Teslaconomics/status/1867093961279672581" type="twitter"/>
    </div>
    </div>

}