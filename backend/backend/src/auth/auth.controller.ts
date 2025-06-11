import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('verify')
  async verify(@Body() body: { message: string; signature: string }) {
    return this.authService.verifySignature(body.message, body.signature);
  }
}
