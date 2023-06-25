import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const actions = {
    query:async ({request}) => {
        const data = await request.formData();
        await prisma.usuario.upsert({
            where:{
                correo: data.get('correo')!.toString()
            },
            update:{
                preguntas:{
                    create: {texto: data.get('pregunta')!.toString()}
                }
            },
            create:{
                nombre: data.get('nombre')!.toString(),
                correo: data.get('correo')!.toString(),
                fnacimiento: new Date(data.get('fnacimiento')!.toString()),
                preguntas:{
                    create: {texto: data.get('pregunta')!.toString()}
                }
            }
        })
    }
};

/* data:{
    nombre: data.get('nombre')!.toString(),
    correo: data.get('correo')!.toString(),
    fnacimiento: new Date(data.get('fnacimiento')!.toString()),
    preguntas:{
        create: {texto: data.get('pregunta')!.toString()}
    }
} */