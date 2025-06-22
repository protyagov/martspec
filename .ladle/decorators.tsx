import React from "react";
import { Story } from "@ladle/react";

export const IconWrapper = (Component: Story) => (
    <div
        className="d-flex justify-content-center mx-auto p-4 overflow-hidden border-0 rounded-4"
        style={{ backgroundColor: "#f4f4f4", minWidth: "100px" }}
    >
        <Component />
    </div>
);

export const PageWrapper = (Component: Story) => (
    <article
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", 
            margin: 0, 
            padding: 0,
            boxSizing: "border-box",
        }}
    >
        <Component />
    </article>
);
