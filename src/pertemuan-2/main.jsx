import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import './custom.css';
import ArtikelDetail from "./ArtikelDetail";
import QnASection from "./QnASection";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
            <HelloWorld/>
            </Container>
            <ArtikelDetail/>
            <QnASection/>
        </div>
    )
