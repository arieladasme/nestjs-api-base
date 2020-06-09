import { prop, modelOptions } from '@typegoose/typegoose';

class Emails {
  @prop()
  address?: string;

  @prop()
  verified?: boolean;
}

@modelOptions({ schemaOptions: {
    toJSON: { virtuals: true },
  },
})

export class User {

  @prop({_id: false})
  emails: Emails;

  @prop({ default: Date.now })
  registeredAt: Date;

  @prop({ required: true })
  password: string;
}
