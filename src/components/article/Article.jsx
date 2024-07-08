import './Article.css';

export default function Article({id, article, author, date}) {
    return (
        <article className='article'>
            <h1>{id}</h1>
            <div>{article}</div>
            {date !== '' && author !== '' &&
                <p>{date + ' | ' + author}</p>
            }
        </article>
    );
}