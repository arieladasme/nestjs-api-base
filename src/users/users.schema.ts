import { prop, modelOptions } from '@typegoose/typegoose';

class Emails {
  @prop()
  address?: string;

  @prop()
  verified?: boolean;
}

class Profile {
  @prop()
  fullName?: string;
}

export enum Roles {
  ADMIN = 'Administrador',
  USER = 'Usuario'
}

@modelOptions({ schemaOptions: {
    toJSON: { virtuals: true },
  },
})

export class User {

  @prop({_id: false})
  emails: Emails;

  @prop({_id: false})
  profile: Profile;

  @prop({ default: Date.now })
  registeredAt: Date;

  @prop({ required: true, default: Roles.USER })
  roles: Roles;

  //@prop({ required: true })
  //password: bcrypt;
}
