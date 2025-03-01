import prisma from '../lib/prisma';
import { initialData, Option } from './seed'

async function main(){
    console.log(initialData)

    await prisma.area.deleteMany();
    await prisma.option.deleteMany();
    await prisma.question.deleteMany();
    await prisma.surveyResult.deleteMany();

    const { areas, questions, options } = initialData;

    // options
    const optionsData:Option[] = options.map(option => ({
        option: option.option,
        value: option.value,
    }))

    await prisma.option.createMany({
        data: optionsData,
    })

}

(()=> {

    if (process.env.NODE_ENV === 'production') return;

    main();
})();