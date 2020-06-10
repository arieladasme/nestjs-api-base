export class CreateUserDTO {
  readonly username: string
  readonly registeredAt: Date
  readonly password: string
  readonly emails: {
    address: string
    verified: boolean
  }
}
