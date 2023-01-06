document.getElementById('btnGeneration').addEventListener('click', function(){
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.YoB;
    document.getElementById('secondNameOutput').innerText = initPerson.SecondName;
    document.getElementById('vonBeruf').innerText = initPerson.Beruf;
    document.getElementById('birthDayOutPut').innerText = initPerson.DayOfBirth;
    document.getElementById('birthMonthOutput').innerText = initPerson.MonthOfBirth;
});

document.getElementById('btnReset').addEventListener('click',reset);
 function reset () {
    document.getElementById('firstNameOutput').innerText = 'Иван';
    document.getElementById('surnameOutput').innerText = 'Пупкин';
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('birthYearOutput').innerText = ',года рождения';
    document.getElementById('secondNameOutput').innerText = 'Васильевич';
    document.getElementById('vonBeruf').innerText = 'Проффесия';
    document.getElementById('birthDayOutPut').innerText = ' дня ';
    document.getElementById('birthMonthOutput').innerText = ',месяца ';
}


Changecheck