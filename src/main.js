import {
    WebFusionConfig
} from "./config.js";

import {
    setText,
    setButtonState,
    setScreenMessage
} from "./ui.js";


console.log(
    "⚡ WebFusion 2.0 starting..."
);

console.log(
    "Configuration:",
    WebFusionConfig
);


// Engine status

setText(
    "engine-status",
    "QEMU-Wasm target"
);


// GPU detection

if (
    "gpu" in navigator
) {

    setText(
        "gpu-status",
        "WebGPU available"
    );

} else {

    setText(
        "gpu-status",
        "WebGPU unavailable"
    );

}


// Initial VM state

setText(
    "vm-status",
    "Ready"
);


// Start

document
    .getElementById("start-btn")
    .addEventListener(
        "click",
        () => {

            console.log(
                "🚀 VM start requested"
            );

            setScreenMessage(
                "Engine Lab",
                "QEMU-Wasm integration coming next..."
            );

            setText(
                "vm-status",
                "Engine test"
            );

            setButtonState(
                "start-btn",
                false
            );

            setButtonState(
                "pause-btn",
                true
            );

            setButtonState(
                "reset-btn",
                true
            );
        }
    );


// Pause

document
    .getElementById("pause-btn")
    .addEventListener(
        "click",
        () => {

            setText(
                "vm-status",
                "Paused"
            );
        }
    );


// Reset

document
    .getElementById("reset-btn")
    .addEventListener(
        "click",
        () => {

            setScreenMessage(
                "WebFusion 2.0",
                "Virtual machine ready"
            );

            setText(
                "vm-status",
                "Ready"
            );

            setButtonState(
                "start-btn",
                true
            );

            setButtonState(
                "pause-btn",
                false
            );

            setButtonState(
                "reset-btn",
                false
            );
        }
    );


// Fullscreen

document
    .getElementById("fullscreen-btn")
    .addEventListener(
        "click",
        async () => {

            const screen =
                document.getElementById(
                    "vm-screen"
                );

            if (
                document.fullscreenElement
            ) {

                await document.exitFullscreen();

            } else {

                await screen.requestFullscreen();

            }
        }
    );
