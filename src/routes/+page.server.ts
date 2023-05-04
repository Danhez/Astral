import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export const actions = {
    query:async ({request}) => {
        const data = await request.formData();
        await prisma.usuario.create({
            data:{
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