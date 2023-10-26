import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tucazorron:<u3Hvvk6u3ekwxSLH>@cluster-atmos.4vcfucb.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class MongooseConfigModule {}
