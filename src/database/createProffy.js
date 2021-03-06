module.exports = async function (db, { proffyValue, classValue,classScheduleValues }) {
    //inserir dados na tabela proffy
    const insertedProffy = await db.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        )VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes

    const insertedClasses = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const classes_id = insertedClasses.lastID
    
    //Inserir dados na tabela class_shedule

    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValues)=>{
        return db.run(`
            INSERT INTO class_schedule (
                classes_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${classes_id}",
                "${classScheduleValues.weekday}",
                "${classScheduleValues.time_from}",
                "${classScheduleValues.time_to}"

            );
        `)
    })
    // Aqui vou executar todos os db.runs() das  class_schedules
    await Promise.all(insertedAllClassScheduleValues)
}