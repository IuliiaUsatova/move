export const BACKEND_URL = 'https://www.omdbapi.com/';

export const getDataFromBackend = async (searchText) => {
    if (!searchText) return obj;
    return (await fetch(`${BACKEND_URL}?s=${searchText}&apiKey=ddeeed8e`)).json()
}

const obj = [
        {
            "title": "Bad Boys For Life",
            "description": "Aмериканский комедийный боевик режиссёров Адиля Эль Арби и Билала Фалла. Фильм является сиквелом «Плохие парни» (1995) и «Плохие парни 2» (2003).",
            "rating": 3.7,
            "image": "https://wallpaperaccess.com/full/4610640.jpg",
            "category": "Action"
        }, 
        {
            "title": "Shawshank Redemption",
            "description": "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки.",
            "rating": 5,
            "image": "https://stuki-druki.com/film/images/kadr-pobeg-iz-showshenka-01.jpg",
            "category": "Drama"
        },
        {
            "title": "The Notebook",
            "description": "Это история отношений юноши и девушки из разных социальных слоев, живших в Южной Каролине. Ной и Элли провели вместе незабываемое лето, пока их не разделили вначале родители, а затем Вторая мировая война.",
            "rating": 5,
            "image": "https://thumbs.dfs.ivi.ru/storage29/contents/a/1/1e28e7d459a9ce72bcfa9ba2e15398.jpg",
            "category": "comedy"
        },
        {
            "title": "The Gladiator",
            "description": "Исторический художественный фильм режиссёра Ридли Скотта, вышедший на экраны 1 мая 2000 года и награждённый пятью премиями «Оскар».",
            "rating": 5,
            "image": "https://www.dvhab.ru/kino/kino/images/big_4742.jpg",
            "category": "comedy"
        },
        {
            "title": "Furious 7",
            "description": "Они покорили Токио и Рио, Лос-Анджелес и Лондон. Но мир больше не играет по их правилам. Зной арабских пустынь, неприлично высокие небоскребы, миллионы долларов на колесах и очень, очень знаменитый злодей. Скорость не знает границ.",
            "rating": 2,
            "image": "https://manapop.com/wp-content/uploads/2015/04/Furious-7.jpg",
            "category": "comedy"
        }
]