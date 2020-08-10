const database = require('./db');
const createProffy = require('./createProffy');



database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        name: "Gleydson Delcho",
        avatar: "https://instagram.fsdu2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/14515852_305791426457044_7521083490209628160_a.jpg?_nc_ht=instagram.fsdu2-1.fna.fbcdn.net&_nc_ohc=jPgT1Ardm8UAX9vcnt0&oh=311b2c5575d8ad8224c8812632c9a406&oe=5F589F31",
        whatsapp: "6199999999",
        bio: "Engenheiro"
    }

    classValue = {
        subject: 4, 
        cost: "60", 
    }

    classScheduleValues = [
        {           
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 4, 
            time_from: 820, 
            time_to: 2220
        }
    ]
    // await createProffy (db, {proffyValue, classValue, classScheduleValues});

    //Consultar dados proffys
    const selectedAllProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedAllProffys)

    //Consultar as classes
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "4"
        AND class_schedule.time_from <= "820"
        AND class_schedule.time_to > "820";

    `)
    // console.log(selectClassesSchedules)
});
