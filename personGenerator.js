const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алиса",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анастасия",
            "id_5": "Диана",
            "id_6": "Надежда",
            "id_7": "Марина",
            "id_8": "Дарья",
            "id_9": "Елизавета",
            "id_10": "Софья"
        } 
    }`,
    secondFemaleJson: `{
        "count": 10,
        "list": {
        "id_1": "Александровна",
        "id_2": "Максимовна",
        "id_3": "Ивановна",
        "id_4": "Артемовна",
        "id_5": "Дмитриевна",
        "id_6": "Никитична",
        "id_7": "Михаиловна",
        "id_8": "Даниловна",
        "id_9": "Егоровна",
        "id_10": "Андреевна"
        }
    }`,    
    secondMaleJson: `{
        "count": 10,
        "list": {
        "id_1": "Александрович",
        "id_2": "Максимович",
        "id_3": "Иванович",
        "id_4": "Артемович",
        "id_5": "Дмитриевич",
        "id_6": "Никитич",
        "id_7": "Михаилович",
        "id_8": "Данилович",
        "id_9": "Егорович",
        "id_10": "Андреевич"
    }
    }`, 
    maleBerufJson: `{
        "count": 10,
        "list": {
        "id_1": "Строитель",
        "id_2": "Крановщик",
        "id_3": "Подполковник",
        "id_4": "Экспедитор",
        "id_5": "Грузчик",
        "id_6": "Таргетолог",
        "id_7": "Водитель такси",
        "id_8": "Аналитик",
        "id_9": "Руководитель отдела",
        "id_10": "Механик"
    }
    }`,
    femaleBerufJson: `{
        "count": 10,
        "list": {
        "id_1": "Уборщица",
        "id_2": "Бухгалтер",
        "id_3": "Кассир",
        "id_4": "Администратор",
        "id_5": "Продавец-консультант",
        "id_6": "Мерчендайзер",
        "id_7": "Хостес",
        "id_8": "Официант",
        "id_9": "Управляющая",
        "id_10": "Светская львица"
    }
    }`,
    monthOfBirthJson: `{
        "count": 12,
        "list": {
        "id_1": "января",
        "id_2": "февраля",
        "id_3": "марта",
        "id_4": "апреля",
        "id_5": "мая",
        "id_6": "июня",
        "id_7": "июля",
        "id_8": "августа",
        "id_9": "сентября",
        "id_10": "октября",
        "id_11": "ноября",
        "id_12": "декабря"
    }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomPol: function() {
        const Male = this.randomIntNumber();
        let gender = Male == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender
    },


    randomFirstName: function() {
        if ( this.person.gender == 'Мужчина' ) {
            return this.randomValue(this.firstNameMaleJson)}
        else {
            return this.randomValue(this.firstNameFemaleJson)}
            },

    randomSecondName: function() {
        if ( this.person.gender == 'Мужчина' ) {
            return this.randomValue(this.secondMaleJson)}
        else {
            return this.randomValue(this.secondFemaleJson)}
            },        


     randomSurname: function() {
        if ( this.person.gender == 'Мужчина' ) {
            return this.randomValue(this.surnameJson);
        }
        else {
            return this.randomValue(this.surnameJson)+'а';
        }
    },

    randomYoB: function(min,max) {
        min = 1970;
        max = 2004;
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
 
    },


    randomMoB: function() {
        return this.randomValue(this.monthOfBirthJson);
    
    },

    
    randomDoB: function(min,max) {
        if (this.randomMoB() == "апреля" || "июня" || "сентября" || "ноября" ) {
            min = 1;
            max = 30;
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }
        else if (this.person.MonthOfBirth == "февраля" ) {
            min = 1;
            max = 28;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        } else {    
            min = 1;
            max = 31;
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }   
        
    },
    


    randomBeruf: function() {                                      // Beruf - профессия на немецком
        if ( this.person.gender == 'Мужчина' ) {
            return this.randomValue(this.maleBerufJson);
        }
        else {
            return this.randomValue(this.femaleBerufJson);
        }
    },


    getPerson: function () {
        this.person = {};               
        this.person.gender = this.randomPol();
        this.person.firstName = this.randomFirstName();
        this.person.Surname = this.randomSurname();
        this.person.YoB = this.randomYoB();
        this.person.SecondName = this.randomSecondName();
        this.person.Beruf = this.randomBeruf();
        this.person.DayOfBirth = this.randomDoB();
        this.person.MonthOfBirth = this.randomMoB();
        return this.person;
    }
};
