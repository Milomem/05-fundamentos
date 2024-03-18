import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { CreateAccountController } from './controllers/create-account'
import { AuthenticateController } from './controllers/authenticate'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-case/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-case/fetch-recent-questions'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-case/register-student'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-case/authenticate-student'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
  ],
})
export class HttpModule {}
