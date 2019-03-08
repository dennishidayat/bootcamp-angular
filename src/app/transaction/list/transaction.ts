import { Account } from 'src/app/account/list/account';

export class Transaction {
    id : number;
    type : String;
    amount : number;
    amountsign : String;
    account : Account;
}