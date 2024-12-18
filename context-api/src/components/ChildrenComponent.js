import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import GrandChildComponent from "./GrandChildComponent";

export default function ChildrenComponent() {
    const {mode} = useContext(ThemeContext);
    return (
        <div>
            <h1>This is a children component</h1>
            <p>Theme mode: {mode}</p>
            <GrandChildComponent />
        </div>
    );
};