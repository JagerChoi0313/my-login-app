//在全栈开发中，我们不希望每次读写数据库都重新建立连接。我们需要一个全局唯一的“指挥官”实例

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()


export default prisma