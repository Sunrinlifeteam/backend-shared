import { ConfigService } from '@nestjs/config';

const config = new ConfigService();
export const isProduction = config.get('NODE_ENV') === 'production';
