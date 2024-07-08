import './News.css';

export default function News({image, title, category, news, date, author}) {
    return (
        <article className='newsElement'>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>
                <p>{category}</p>
                <h2>{title}</h2>
                <p>{news}</p>
                <p id='newsAuthor'>{date + " | " + author}</p>
            </div>
        </article>
    )
}