import newsImage from '../assets/news.png';

const categories = {
    News: 'News',
};

export const NEWS = [
    {
        id: 1,
        image: newsImage,
        category: categories.News,
        title: 'First News',
        news:
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut <br/>
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores <br/>
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <a href="#">Lorem</a> ipsum dolor
                sit amet.ﬂ
            </p>,
        author: 'eggistar',
        date: '13.05.1983'
    },
    {
        id: 2,
        image: newsImage,
        category: categories.News,
        title: 'Second News',
        news:
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut <br/>
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores <br/>
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <a href="#">Lorem</a> ipsum dolor sit amet.ﬂ
            </p>,
        author: 'eggistar',
        date: '13.05.1983'
    },
    {
        id: 3,
        image: newsImage,
        category: categories.News,
        title: 'Latest News',
        news:
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut <br/>
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores <br/>
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <a href="#">Lorem</a> ipsum dolor
                sit amet.ﬂ
            </p>,
        author: 'eggistar',
        date: '13.05.1983'
    }
];