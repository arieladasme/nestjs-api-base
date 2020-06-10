import { prop } from '@typegoose/typegoose'

class Emails {
  @prop()
  address?: string

  @prop()
  verified?: boolean
}

export class Auth {
  //@prop({ _id: false })
  //emails: Emails

  @prop({ required: true })
  password: string

  @prop({ required: true })
  username: string
}
