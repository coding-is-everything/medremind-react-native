import { Stack } from "expo-router";
import React from "react";

export default function HistoryLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "white" },
                animation: "slide_from_right",
            }}
        />
    );
}