import React from "react";
import '../button/style.css'

export function ButtonAnimation() {
    return (
        <>
            <input type="checkbox" id="toggle" class="toggle--checkbox" />
            <label for="toggle" class="toggle--label">
                <span class="toggle--label-background"></span>
            </label>
            <div class="background"></div>
        </>
    )
}