var page = {
    langs: {
        "b-form__label_name": {
            "ru": "Имя",
            "ua": "Ім'я"
        },
        "b-form__label_surname": {
            "ru": "Фамилия",
            "ua": "Прізвище"
        },
        "b-form__label_season": {
            "ru": "Ваше любимое время года",
            "ua": "Ваша улюблена пора року"
        },
        "b-form__label_fruit": {
            "ru": "Ваш любимый фрукт",
            "ua": "Ваш улюблений фрукт"
        },
        "b-form__label_animals": {
            "ru": "Ваше любимое животное",
            "ua": "Ваше улюблена тварина"
        },
        "b-form__label_review": {
            "ru": "Ваш отзыв",
            "ua": "Ваш відгук"
        },
        "b-form__ok-button": {
            "ru": "Отправить",
            "ua": "Надiслати"
        }
    },
    regexps: {
        "name": "^[0-9a-z а-я\\-_]{1,20}$",
        "brand": "^[A-Za-z\\-]{2,15}$",
        "price": "^[0-9]{3,6}$",
        "description": "^.+$"


    }
};
Settings.init(page);