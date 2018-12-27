

export type Tx = {
    time: number,
    type: 'LOCK' | 'UNLOCK' | 'TRANSFER' | 'CONVERT',
    status: 'CONFIRMED' | 'PENDING' | 'ERROR',
    hash: string
}

export type Txs = Array<Tx>

export type TransactionState = {
    +byHash: {
        +[string]: {
            time: number,
            type: 'LOCK' | 'UNLOCK' | 'TRANSFER' | 'CONVERT',
            status: 'CONFIRMED' | 'PENDING' | 'ERROR',
            hash: string
        }
    }
}