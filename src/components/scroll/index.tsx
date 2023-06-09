import { ScrollSt } from "./styled"

export const Scroll = () => {
    return (
        <>
            <ScrollSt>
                <ul>
                    <span className="wheel" />
                    <li className="scrollSpan"></li>
                </ul>
            </ScrollSt>
        </>
    )
}
