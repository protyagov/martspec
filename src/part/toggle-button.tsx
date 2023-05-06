import React from "react";
import { Locale } from "src/i18n/locale";

interface ToggleButtonProps {
    cls: string;
    btnContent?: string; 
    toggledContent?: string;
}


export default function ToggleButton(props: ToggleButtonProps) {
    const [isToggled, setIsToggled] = React.useState<Boolean>(false);
    
    return <div className={`${props.cls} ${props.cls}-toggled-${isToggled}`}>
        <button onClick={() => setIsToggled(current => !current)}>
            { props.btnContent }
        </button>
        {
            isToggled && (
                <div className="toggled-content">
                    { props.toggledContent }
                </div>
            )
        }
    </div>;
}
