import './Navigation.css';

export default function Navigation({onClickFunction}) {
    return (
        <nav>
            <button onClick={() => onClickFunction('news')}>NEWS</button>
            <button onClick={() => onClickFunction('article')}>ARTICLE</button>
        </nav>
    );
}