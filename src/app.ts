import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import { PrismaClient } from '@prisma/client'
import { routes } from './app/routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
export const prisma = new PrismaClient();

app.use('/api/v1', routes)

//if no routes found
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        message: 'Not Found',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'API Not Found'
            }
        ]
    });
    // next()
})



export default app;