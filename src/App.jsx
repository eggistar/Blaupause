import {useState} from "react";
import './App.css'

import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import News from "./components/news/News";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";

import {NEWS} from "./data/NewsData";
import {ARTICLE} from "./data/ArticleData";

export default function App() {
    const [content, setContent] = useState('news');
    return (
        <>
            <Header/>
            <Navigation onClickFunction={setContent}/>
            <main>
                {content === 'news' &&
                    NEWS
                        .sort((a, b) => a.id < b.id ? 1 : -1)
                        .map((newsElement) => (
                            <News key={newsElement.id} {...newsElement}/>
                        ))
                }
                {content === 'article' &&
                    <Article {...ARTICLE.article}/>
                }
            </main>
            <Footer/>
        </>
    )
}