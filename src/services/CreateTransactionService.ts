// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const transaction = transactionRepository.create({
      title,
      value,
      type,
    });
    await transactionRepository.save(transaction);

    return transaction;

    // TODO
  }
}

export default CreateTransactionService;
