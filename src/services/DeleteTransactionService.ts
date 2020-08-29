import { getCustomRepository, TransactionRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Transactionrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(Transactionrepository);
    const trasaction = await transactionRepository.findOne(id);

    if (!trasaction) {
      throw new AppError('Transaction does not exixt');
    }
    await transactionRepository.remove(trasaction);
    // TODO
  }
}

export default DeleteTransactionService;
